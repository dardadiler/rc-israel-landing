import type { VercelRequest, VercelResponse } from '@vercel/node';

// Streak CRM API endpoint for creating boxes (leads) - v2 API required for boxes
const STREAK_API_URL = 'https://www.streak.com/api/v2/pipelines';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  timestamp: string;
  source: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get environment variables
  const STREAK_API_KEY = process.env.STREAK_API_KEY;
  const STREAK_PIPELINE_KEY = process.env.STREAK_PIPELINE_KEY;
  const STREAK_STAGE_KEY = process.env.STREAK_STAGE_KEY;

  if (!STREAK_API_KEY || !STREAK_PIPELINE_KEY) {
    console.error('Missing Streak configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const leadData: LeadData = req.body;

    // Validate required fields
    if (!leadData.phone && !leadData.email) {
      return res.status(400).json({ error: 'Phone or email required' });
    }

    // Create box name from lead data
    const boxName = leadData.name || leadData.phone || leadData.email || 'New Lead';

    // Create the box (lead) in Streak
    const createBoxResponse = await fetch(
      `${STREAK_API_URL}/${STREAK_PIPELINE_KEY}/boxes`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(STREAK_API_KEY + ':').toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: boxName,
          stageKey: STREAK_STAGE_KEY,
          notes: `
שם: ${leadData.name || 'לא צוין'}
טלפון: ${leadData.phone || 'לא צוין'}
אימייל: ${leadData.email || 'לא צוין'}
מקור: ${leadData.source || 'landing-page'}
תאריך: ${leadData.timestamp || new Date().toISOString()}
          `.trim(),
        }),
      }
    );

    if (!createBoxResponse.ok) {
      const errorText = await createBoxResponse.text();
      console.error('Streak API error:', createBoxResponse.status, errorText);
      return res.status(500).json({
        error: 'Failed to create lead in CRM',
        status: createBoxResponse.status,
        details: errorText
      });
    }

    const boxData = await createBoxResponse.json();

    // If we have email, add it as a contact
    if (leadData.email) {
      try {
        await fetch(
          `https://www.streak.com/api/v2/boxes/${boxData.key}/contacts`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${Buffer.from(STREAK_API_KEY + ':').toString('base64')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: leadData.email,
            }),
          }
        );
      } catch (contactErr) {
        console.error('Error adding contact:', contactErr);
        // Don't fail the whole request if contact creation fails
      }
    }

    // Update box fields if available
    // You can customize field keys based on your Streak pipeline setup
    const fieldsToUpdate: Record<string, string> = {};

    if (leadData.phone) {
      // Replace with your actual Streak field key for phone
      // fieldsToUpdate['YOUR_PHONE_FIELD_KEY'] = leadData.phone;
    }

    if (Object.keys(fieldsToUpdate).length > 0) {
      try {
        await fetch(
          `https://www.streak.com/api/v2/boxes/${boxData.key}/fields`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${Buffer.from(STREAK_API_KEY + ':').toString('base64')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fieldsToUpdate),
          }
        );
      } catch (fieldsErr) {
        console.error('Error updating fields:', fieldsErr);
      }
    }

    return res.status(200).json({
      success: true,
      boxKey: boxData.key,
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // The user will set this environment variable for their Google Apps Script Web App
    const GOOGLE_APP_SCRIPT_URL = process.env.GOOGLE_APP_SCRIPT_URL || '';

    if (!GOOGLE_APP_SCRIPT_URL) {
      console.warn("GOOGLE_APP_SCRIPT_URL is not set. Simulating a successful submission.");
      return NextResponse.json({ success: true, message: 'Simulated success (URL not set)' });
    }

    const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

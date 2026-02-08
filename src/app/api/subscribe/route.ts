import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Buttondown API
    const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;
    
    if (!BUTTONDOWN_API_KEY) {
      console.error('BUTTONDOWN_API_KEY not configured');
      // In development, just log and succeed
      if (process.env.NODE_ENV === 'development') {
        console.log('Dev mode: Would subscribe:', email);
        return NextResponse.json({ success: true, message: 'Subscribed (dev mode)' });
      }
      return NextResponse.json(
        { error: 'Newsletter not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        tags: ['cricuthelper-website'],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle already subscribed
      if (response.status === 400 && data.email) {
        return NextResponse.json(
          { error: 'You\'re already subscribed!' },
          { status: 400 }
        );
      }
      
      console.error('Buttondown error:', data);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: response.status }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

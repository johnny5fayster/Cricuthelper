import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (resets on deploy)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return true;
  }
  
  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, honeypot } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Pretend success to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for Buttondown API key
    const apiKey = process.env.BUTTONDOWN_API_KEY;
    
    if (!apiKey) {
      // Development mode - just log
      console.log('[DEV] Email signup:', email);
      return NextResponse.json({ 
        success: true, 
        message: 'Thanks for subscribing!' 
      });
    }

    // Production - send to Buttondown
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        tags: ['website-signup'],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      
      // Handle already subscribed
      if (response.status === 400 && error.email) {
        return NextResponse.json({ 
          success: true, 
          message: "You're already subscribed!" 
        });
      }
      
      throw new Error(error.detail || 'Subscription failed');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thanks for subscribing! Check your email to confirm.' 
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

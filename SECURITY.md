# SECURITY.md — CricutHelper Security Guidelines

## Current State (Static Site)
The site is currently static public content with no user data. Risk level: **Low**

### What's Protected
- GitHub repo is public (intentional — open source builds trust)
- No API keys in codebase
- No user authentication yet
- Email capture is localStorage only (client-side, no backend)

---

## Credential Handling

### Golden Rules
1. **Never commit secrets** to the repo (API keys, tokens, passwords)
2. **Never paste tokens in chat** — they persist in message history
3. **Rotate immediately** if a token is exposed
4. **Use short-lived tokens** when possible

### For GitHub Tokens
- Create with minimal scopes (repo access only)
- Delete after use if one-time operation
- Use SSH keys for ongoing access (more secure than PATs)

### Environment Variables
When we add API integrations:
```bash
# .env.local (never committed)
STRIPE_SECRET_KEY=sk_live_xxx
OPENAI_API_KEY=sk-xxx
DATABASE_URL=postgres://xxx
```

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

---

## When We Add Premium Features

### Authentication (Priority: High)
- **Use**: NextAuth.js or Clerk (battle-tested, handles edge cases)
- **Don't**: Roll our own auth (guaranteed security holes)
- **Enable**: Email verification, rate limiting on login attempts

### Payments (Priority: High)
- **Use**: Stripe Checkout (PCI compliant out of the box)
- **Don't**: Ever touch raw card numbers
- **Enable**: Webhook signature verification

### Database
- **Use**: Connection pooling (Prisma + PgBouncer or Supabase)
- **Don't**: Expose DB credentials in client-side code
- **Enable**: Row-level security if using Supabase

### API Routes
```typescript
// Always validate & rate limit
import { rateLimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  // 1. Rate limit
  const limiter = await rateLimit(req);
  if (!limiter.success) return new Response('Too many requests', { status: 429 });
  
  // 2. Validate input
  const body = await req.json();
  const validated = schema.safeParse(body);
  if (!validated.success) return new Response('Invalid input', { status: 400 });
  
  // 3. Authenticate
  const session = await getSession();
  if (!session) return new Response('Unauthorized', { status: 401 });
  
  // 4. Do the thing
}
```

---

## Deployment Security (Vercel)

### Already Handled by Vercel
- HTTPS everywhere
- DDoS protection
- Automatic security headers

### Add These Headers (next.config.js)
```javascript
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

---

## Social Account Security

When setting up Pinterest/X/TikTok for Johnny to manage:

1. **Use unique passwords** (generated, 20+ chars)
2. **Enable 2FA** with authenticator app (not SMS)
3. **Store in password manager** (1Password, Bitwarden)
4. **Create app-specific passwords** where available
5. **Review connected apps** quarterly

---

## Incident Response

If credentials are exposed:
1. **Rotate immediately** — don't wait
2. **Check access logs** — GitHub audit log, Vercel logs
3. **Revoke sessions** — force logout everywhere
4. **Assess damage** — what could they have accessed?
5. **Document** — add to lessons learned

---

## Security Checklist Before Launch

### Free Tier Launch
- [ ] No secrets in repo (scan with `git secrets`)
- [ ] Security headers configured
- [ ] Rate limiting on any API routes
- [ ] Input validation on all forms

### Premium Tier Launch
- [ ] Auth provider configured (NextAuth/Clerk)
- [ ] Stripe webhook signatures verified
- [ ] Database credentials in env vars only
- [ ] CSRF protection enabled
- [ ] Session management configured
- [ ] Password requirements enforced
- [ ] Account lockout after failed attempts

---

## Tools

- **git-secrets**: Prevents committing secrets
- **Snyk**: Dependency vulnerability scanning
- **Vercel**: Built-in security monitoring

---

*Last updated: 2026-02-07*
*Review quarterly or before major feature launches*

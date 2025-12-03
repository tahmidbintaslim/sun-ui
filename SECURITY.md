# Security Policy

Sun UI takes security very seriously. We appreciate your help in keeping Sun UI secure.

## Reporting a Vulnerability

**DO NOT** report security vulnerabilities via GitHub issues or public discussions.

### How to Report

Please report security vulnerabilities by email to:

📧 **security@sun-ui.dev**

Please include:

- Description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Suggested fix (if you have one)

**When to Report**

- Found a potential security vulnerability
- Discovered a vulnerability in a dependency
- Concerned about security practices

---

## Response Timeline

We take all security reports seriously. Here's what to expect:

1. **Acknowledgment** — Within 24 hours
2. **Assessment** — Within 48 hours
3. **Fix** — Timeframe depends on severity
4. **Disclosure** — We'll coordinate with you

---

## Vulnerability Severity

We classify vulnerabilities by severity:

### Critical 🔴

- Remote code execution
- Authentication bypass
- Data exposure of sensitive information
- Complete system compromise

**Response**: Immediate fix and emergency patch release

### High 🟠

- Significant security flaw
- Could lead to data loss or unauthorized access
- Affects multiple users

**Response**: Fix within 1 week

### Medium 🟡

- Limited security impact
- Requires specific conditions to exploit
- Affects specific configurations

**Response**: Fix within 2 weeks

### Low 🟢

- Minor security issue
- Low probability of exploitation
- Limited impact

**Response**: Fix in next regular release

---

## Disclosure Policy

### Coordinated Disclosure

We follow responsible disclosure practices:

1. **Reporter**: Sends vulnerability details
2. **Our Team**: Confirms and assesses
3. **Fix Development**: Creates and tests patch
4. **Coordination**: Works with reporter on timeline
5. **Release**: Publishes patch release
6. **Disclosure**: Publishes security advisory

### Timeline

- We'll request 90 days before public disclosure
- Can negotiate if needed
- Credit given to reporter (unless anonymity requested)

### Public Announcement

Once patched, we'll announce via:

- GitHub Security Advisory
- Release notes
- Changelog
- Twitter/Community channels

---

## Security Best Practices

### For Users

When using Sun UI, follow these practices:

1. **Keep Updated** — Always use the latest version

   ```bash
   pnpm up @sun-ui/react
   ```

2. **Monitor Dependencies** — Check for vulnerabilities

   ```bash
   pnpm audit
   ```

3. **Report Vulnerabilities** — Found an issue? Report it privately

4. **Follow Material-UI Guidance** — Sun UI wraps MUI, so follow their security practices

5. **Validate Input** — Always validate user input

   ```tsx
   // Good
   <TextField
     value={userInput}
     onChange={(e) => setInput(sanitize(e.target.value))}
   />

   // Avoid
   <TextField onChange={(e) => setInput(e.target.value)} />
   ```

### For Contributors

1. **Code Review** — All changes reviewed for security
2. **Dependency Audits** — Regular checks of dependencies
3. **Type Safety** — Strict TypeScript reduces bugs
4. **Testing** — Comprehensive tests catch issues
5. **Accessibility** — a11y testing helps find problems

---

## Dependency Security

### Regular Audits

- **Weekly**: Automated dependency checks
- **Monthly**: Manual security review
- **Quarterly**: Complete audit

### Using Secure Dependencies

Sun UI's only runtime dependencies:

- **React** — Essential UI library
- **Material-UI (MUI)** — Component base
- **Emotion** — CSS-in-JS (peer dep)

All dependencies are:

- ✅ Actively maintained
- ✅ Have strong security track records
- ✅ Regularly updated

### Check Vulnerabilities

```bash
# Check for known vulnerabilities
pnpm audit

# Install patches
pnpm audit --fix
```

---

## Common Vulnerabilities

### XSS (Cross-Site Scripting)

Sun UI components escape user input by default:

```tsx
// Safe - XSS prevented
<Alert>{userProvidedText}</Alert>

// If you need HTML, use dangerouslySetInnerHTML carefully
// Only use with trusted content
<div dangerouslySetInnerHTML={{ __html: trustedHTML }} />
```

### CSRF (Cross-Site Request Forgery)

Sun UI is a client-side library. CSRF prevention is backend responsibility:

```typescript
// Backend: Include CSRF token
const headers = {
  'X-CSRF-Token': csrfToken,
};
```

### DOM-Based Vulnerabilities

Always sanitize dynamic content:

```tsx
// Good - Safe
import DOMPurify from 'dompurify';

<div>{DOMPurify.sanitize(userInput)}</div>

// Avoid - Unsafe
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### Dependency Vulnerabilities

Report any dependency vulnerabilities to the maintainers immediately.

---

## Security Headers

For applications using Sun UI, implement these headers:

```
# Prevent XSS
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

# Content Security Policy
Content-Security-Policy: default-src 'self'; script-src 'self'

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions Policy
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## OWASP Top 10

Sun UI addresses OWASP Top 10 vulnerabilities:

1. ✅ **Broken Access Control** — Type-safe props system
2. ✅ **Cryptographic Failures** — Use HTTPS always
3. ✅ **Injection** — Input escaping by default
4. ✅ **Insecure Design** — Follows MUI security patterns
5. ✅ **Security Misconfiguration** — Defaults are secure
6. ✅ **Vulnerable Components** — Regularly updated dependencies
7. ✅ **Authentication Failures** — Not in scope (server-side)
8. ✅ **Data Integrity Failures** — Relies on secure backend
9. ✅ **Logging & Monitoring Gaps** — Implement in your app
10. ✅ **SSRF** — Not applicable to client-side library

---

## Frequently Asked Questions

### Is Sun UI secure for production?

Yes. Sun UI is production-ready with comprehensive testing, security reviews, and follows Material-UI's security practices.

### What about third-party components?

All dependencies are carefully vetted. MUI is maintained by the MUI team and has excellent security practices.

### How often are dependencies updated?

- **Weekly**: Automated checks
- **Monthly**: Manual updates
- **Security**: Immediate patches

### What if I find a vulnerability?

Report it privately at: **security@sun-ui.dev**

### Can I use Sun UI with Sensitive Data?

Yes, but implement proper backend security:

- Use HTTPS
- Validate on server
- Sanitize user input
- Use secure authentication

### Are there known vulnerabilities?

No known unpatched vulnerabilities. See releases for security updates.

---

## Security Acknowledgments

We're grateful to security researchers who help keep Sun UI safe. Acknowledged researchers:

- (None reported yet - help us out!)

---

## Code Security Tips

### ✅ Safe Patterns

```tsx
// Always escape user input
<TextField value={userInput} onChange={handleChange} />

// Use semantic HTML
<Button type="button">Action</Button>

// Validate on client and server
<TextField
  error={isInvalid}
  helperText={isInvalid ? 'Invalid input' : ''}
/>

// Use proper content security
const sanitized = DOMPurify.sanitize(html);
```

### ❌ Avoid These

```tsx
// Never use dangerouslySetInnerHTML with user input
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// Don't disable validation
<TextField required={false} />

// Don't store sensitive data in localStorage
localStorage.setItem('token', sensitiveToken);

// Don't commit secrets
// ❌ process.env.API_KEY = 'secret'
// ✅ Use .env files
```

---

## Resources

- **[OWASP](https://owasp.org)** — Web security guidance
- **[NIST](https://csrc.nist.gov)** — Security standards
- **[CWE](https://cwe.mitre.org)** — Common weaknesses
- **[Material-UI Security](https://mui.com/material-ui/guides/security/)** — MUI security guide

---

## Contact

- **Email**: security@sun-ui.dev
- **GitHub**: [@tahmidbintaslim](https://github.com/tahmidbintaslim)
- **Discussions**: [GitHub Discussions](https://github.com/tahmidbintaslim/sun-ui/discussions)

---

<div align="center">

**Thank you for helping keep Sun UI secure! 🔒**

</div>

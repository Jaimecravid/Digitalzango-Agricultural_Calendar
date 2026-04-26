# Netlify Deployment Specifications

## Build Commands

- `npm run build` (ensure TypeScript compiles without errors)
- `netlify build` (if custom build steps are needed)

## Environment Configuration

| Variable Name         | Value/Description            | Scope      |
|---------------------- |-----------------------------|------------|
| REACT_APP_API_URL     | Production API endpoint      | Production |
| NODE_ENV              | production                   | All        |
| NETLIFY_SITE_ID       | Netlify site identifier      | All        |

## Asset & CDN Optimization

- Enable Netlify CDN for static assets (images, JS bundles).
- Configure cache headers for agricultural data files.

## Offline Support

- Implement a service worker for offline-first experience.
- Document caching strategy for rural/low-connectivity users.

## Security

- Add CSRF protection to API routes.
- Implement API rate limiting (especially on weather endpoints).
- Add input validation/sanitization for all forms.

## Monitoring & Analytics

- Enable Netlify analytics.
- Integrate error monitoring (e.g., Sentry).
- Add analytics to track feature usage.

## Redirects & Routing

- Set up `_redirects` file for SPA routing.
- Configure custom domain and SSL.

## Deployment Checklist

- [ ] All build errors resolved (TypeScript, translation, duplication)
- [ ] Bundle size optimized (code splitting, dynamic imports)
- [ ] Mobile performance tested (CSS, images, lazy loading)
- [ ] Offline support implemented and tested
- [ ] Security hardening completed
- [ ] Netlify config and environment variables set
- [ ] Final build and deployment verified

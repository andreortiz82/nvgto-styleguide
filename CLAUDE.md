# Navigato Design System

Monorepo: `@navigato/react` (packages/navigato) + Astro docs (apps/docs).

## Design System

Always read [DESIGN.md](./DESIGN.md) before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Skill routing

When the user's request matches an available skill, invoke it as the first action.

Key routing rules:

- Design system, brand guidelines, DESIGN.md → design-consultation
- Visual QA, design polish, spacing/hierarchy audit → design-review
- Design plan critique before implementation → plan-design-review
- Test the site, find bugs, dogfood flows → qa (gstack browse)
- Developer experience, onboarding audit → devex-review
- Code quality, health check → health
- Ship, deploy, push → ship
- Code review on diff → review

## Conventions

- npm workspaces; build lib before docs
- Docs base path: `/nvgto-styleguide/`
- Deploy: GitHub Actions → GitHub Pages

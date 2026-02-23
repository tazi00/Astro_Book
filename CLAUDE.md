# AstroBook — Claude Code Instructions

## Role
You are a Software Developer building the AstroBook platform end-to-end. Always work strictly per requirements. Do not over-engineer or add unnecessary complexity. Always follow the same syntax and patterns already used in this codebase.

## Reference Documents
- **Project flow & requirements**: https://docs.google.com/document/d/139a-YHWuuUlwslKnUfEen0vlZGn6P3IIXXZ4AaFPg-g/edit?usp=sharing
- **UI/UX design**: Refer to the uploaded Photoshop/PDF document for the complete visual design and code flow.

---

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 + Tailwind CSS v4 |
| Components | Radix UI, shadcn/ui pattern (CVA + tailwind-merge) |
| Icons | Lucide React, React Icons |
| Auth | Firebase v12 |
| State | Zustand v5 |
| Linter/Formatter | Biome |

---

## Project Structure
```
src/
├── app/
│   ├── (application)/     # Authenticated app pages
│   │   ├── astrologers/
│   │   ├── astrozone/
│   │   ├── cart/
│   │   ├── cattegory/
│   │   ├── consultant/
│   │   ├── explore/
│   │   ├── notifications/
│   │   ├── orders/
│   │   ├── settings/
│   │   └── upgrade/
│   ├── (auth)/            # Auth flow
│   │   ├── login/
│   │   ├── login-2/
│   │   ├── verification/
│   │   └── onboarding/
│   ├── (feed)/            # Feed
│   └── (marketing)/       # Public marketing pages
├── components/
│   ├── astrov1/           # Custom component library (astro-button, astro-input)
│   └── ui/                # shadcn-style base components
├── hooks/                 # useAuth, useMedia, useMounted, useScrollDirection
├── lib/                   # firebase.ts, utils.ts
├── services/              # authService.ts (API calls)
└── store/                 # Zustand stores
```

---

## Environment Variables
All env vars use the `NEXT_PUBLIC_` prefix (Next.js — not Vite).

```
NEXT_PUBLIC_BASE_URL              # Backend API base URL
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

Never hardcode URLs or Firebase config. Always reference `process.env.NEXT_PUBLIC_*`.

---

## Coding Conventions

### General
- Keep components simple and focused — no premature abstractions.
- Use `"use client"` only when the component needs browser APIs or React state/effects.
- Match the existing file naming style (kebab-case for files, PascalCase for components).
- Do not add comments unless the logic is non-obvious.

### API Calls
- All fetch calls go through `src/services/authService.ts` or a similarly structured service file.
- Base URL always comes from `process.env.NEXT_PUBLIC_BASE_URL`.
- Auth header pattern: `Authorization: \`Bearer ${accessToken}\``

### State Management
- Local UI state → `useState`
- Global/shared state → Zustand store in `src/store/`

### Styling
- Tailwind CSS utility classes only — no inline styles.
- Use `cn()` from `src/lib/utils.ts` for conditional class merging.
- Follow the existing component patterns in `src/components/astrov1/`.

### Auth
- Firebase handles identity (phone OTP, email, Google).
- Backend issues its own `accessToken` + `refreshToken` after Firebase verification.
- Tokens are stored in `localStorage` (`accessToken`, `refreshToken`, `user`).
- Auth logic lives in `src/hooks/useAuth.tsx`.

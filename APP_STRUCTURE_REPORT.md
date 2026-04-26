# Full Application Structure Report - Digitalzango Agricultural Calendar

## 1. Project Overview

| Property | Value |
|----------|-------|
| **Name** | digitalzango-agricultural-calendar |
| **Version** | 0.1.0 |
| **Framework** | Next.js 15.2.4 (App Router) |
| **Language** | TypeScript 5.x |
| **React** | 19.x |
| **Styling** | Tailwind CSS 3.4 + shadcn/ui |
| **Package Manager** | npm 9.0.0 |
| **Deployment** | Netlify |
| **Testing** | Jest 30 + React Testing Library |
| **PWA** | Service Workers, Web App Manifest |

### Purpose
A Progressive Web App (PWA) for Angolan farmers providing agricultural planning, weather integration, crop management, pest alerts, resource management, and community features.

### Supported Languages
- Portuguese (pt) - Primary
- English (en)
- French (fr)
- Kimbundu (ki)
- Umbundu (um)

### Supported Regions
- Luanda, Benguela, Huambo, Bié, Malanje, Uíge

---

## 2. Root Directory Structure

```
Digitalzango-Agricultural_Calendar/
├── .gemini/                    # Gemini AI configuration
├── .git/                       # Git repository
├── .windsurf/                  # Windsurf IDE rules
│   └── rules/
│       ├── coding-standards.md
│       ├── code-review.md
│       ├── error-handling.md
│       ├── feature-breakdown.md
│       └── testing-guidelines.md
├── .netlify/                   # Netlify deployment config
├── .next/                      # Next.js build output
├── app/                        # Next.js App Router (pages, layouts, api, contexts, components)
├── components/                 # Shared React components
├── docs/                       # Project documentation
├── hooks/                      # Custom React hooks
├── lib/                        # Libraries, utilities, databases, articles
├── node_modules/               # Dependencies
├── public/                     # Static assets (images, locales, service workers, icons)
├── styles/                     # Global CSS files
├── types/                      # TypeScript type definitions
├── utils/                      # Utility functions
├── vscode/                     # VS Code configuration
├── .gitignore                  # Git ignore rules
├── .opencode.json              # OpenCode configuration
├── .txnetlify.toml             # Netlify config (alternate)
├── components.json             # shadcn/ui configuration
├── i18npt.json                 # i18n Portuguese config
├── jest.config.js              # Jest test configuration
├── jest.setup.js               # Jest setup file
├── netlify.toml                # Netlify deployment configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── next-i18next.config.js      # Internationalization config
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Dependency lock file
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # Project readme
├── tailwind.config.ts          # Tailwind CSS configuration
├── translation_keys.txt        # Translation keys reference
├── tsconfig.json               # TypeScript configuration
├── tsconfig.tsbuildinfo        # TypeScript build info
└── windsurf_deployment.yaml    # Windsurf deployment config
```

---

## 3. App Directory (Next.js App Router)

### 3.1 Page Routes

```
app/
├── page.tsx                          # Home page (root)
├── layout.tsx                        # Root layout
├── globals.css                       # Global styles
│
├── calendario/                       # Agricultural Calendar
│   ├── page.tsx
│   └── __tests__/page.test.tsx
│
├── tempo/                            # Weather
│   └── page.tsx
│
├── cultivos/                         # Crops
│   ├── page.tsx
│   └── [slug]/page.tsx               # Dynamic crop detail pages
│
├── pragas/                           # Pests & Diseases
│   ├── pulgao/page.tsx               # Aphids
│   ├── trips/page.tsx                # Thrips
│   ├── trapoeraba/page.tsx
│   ├── tiririca/page.tsx
│   ├── roedores/page.tsx             # Rodents
│   ├── rato-domestico/page.tsx       # Domestic rat
│   ├── rato-do-campo/page.tsx        # Field rat
│   ├── ratazana/page.tsx             # Brown rat
│   ├── cochonilha/page.tsx           # Scale insects
│   └── cigarrinha/page.tsx           # Leafhoppers
│
├── produtos/                         # Products
│   ├── page.tsx
│   ├── seeds/page.tsx                # Seeds
│   ├── fertilizers/page.tsx          # Fertilizers
│   └── tools/page.tsx                # Tools
│
├── comprar/                          # Shop
│   ├── sistema-irrigacao-gotejamento/page.tsx  # Drip irrigation system
│   ├── pulverizador-manual-20l/page.tsx        # Manual sprayer 20L
│   └── kit-ferramentas-basicas/page.tsx        # Basic tool kit
│
├── comunidade/                       # Community
│   ├── page.tsx
│   ├── forum/page.tsx
│   ├── groups/page.tsx
│   └── sharing/page.tsx
│
├── forum/                            # Forum (standalone)
│   ├── page.tsx
│   └── loading.tsx
│
├── blog/                             # BlogI nee
│   ├── page.tsx
│   ├── [slug]/page.tsx               # Dynamic blog post
│   └── [slug]/page.js
│
├── eventos/                          # Events (if exists)
├── events/                           # Events
│   └── page.tsx
│
├── ferramentas/                      # Tools (Portuguese)
│   └── page.tsx
│
├── tools/                            # Tools (English)
│   └── page.tsx
│
├── recursos/                         # Resources
│   └── page.tsx
│
├── provincias/                       # Provinces
│   └── page.tsx
│
├── tutorials/                        # Tutorials
│   └── page.tsx
│
├── sobre/                            # About
│   └── page.tsx
│
├── baixar-app/                       # Download App
│   └── page.tsx
│
├── crop-guides/                      # Crop Guides
│   └── page.tsx
│
├── contact/                          # Contact
│   └── page.tsx
│
├── careers/                          # Careers
│   └── page.tsx
│
├── privacy/                          # Privacy Policy
│   └── page.tsx
│
├── terms/                            # Terms of Service
│   └── page.tsx
│
├── cookies/                          # Cookie Policy
│   └── page.tsx
│
├── disclaimer/                       # Disclaimer
│   └── page.tsx
│
├── faq/                              # FAQ
│   └── page.tsx
│
└── affiliate-disclosure/             # Affiliate Disclosure
    └── page.tsx
```

### 3.2 API Routes

```
app/api/
├── weather/route.ts                  # Weather data API endpoint
└── blog/route.ts                     # Blog data API endpoint
```

### 3.3 Contexts (State Management)

```
app/contexts/
├── language-context.tsx              # Language/i18n context
├── region-context.tsx                # Region selection context
├── weather-context.tsx               # Weather data context
└── optimized/
    ├── app-providers.tsx             # Combined app providers
    ├── weather-context.tsx           # Optimized weather context
    └── agricultural-context.tsx      # Agricultural data context
```

### 3.4 App Components

```
app/components/
├── weather-widget.tsx                # Weather display widget
├── UserCounter.tsx                   # User counter component
├── __tests__/
│   ├── header.test.tsx
│   └── footer.test.tsx
└── ui/                               # shadcn/ui components
    ├── OptimizedImage.tsx
    ├── pest-alert-card.tsx
    ├── weather-display.tsx
    ├── input.tsx
    ├── input-otp.tsx
    ├── button.tsx
    ├── dialog.tsx
    ├── dropdown-menu.tsx
    ├── select.tsx
    ├── tabs.tsx
    ├── toast.tsx
    ├── toaster.tsx
    ├── sonner.tsx
    ├── tooltip.tsx
    ├── toggle.tsx
    ├── toggle-group.tsx
    ├── textarea.tsx
    ├── table.tsx
    ├── switch.tsx
    ├── slider.tsx
    ├── skeleton.tsx
    ├── sidebar.tsx
    ├── sheet.tsx
    ├── separator.tsx
    ├── scroll-area.tsx
    ├── resizable.tsx
    ├── radio-group.tsx
    ├── progress.tsx
    ├── popover.tsx
    ├── pagination.tsx
    ├── navigation-menu.tsx
    ├── menubar.tsx
    ├── label.tsx
    ├── hover-card.tsx
    ├── form.tsx
    └── use-toast.ts
    └── use-mobile.tsx
```

### 3.5 App Utilities & Types

```
app/
├── utils/
│   └── cache.ts                      # Caching utilities
├── types/
│   └── calendar.ts                   # Calendar type definitions
├── services/
│   └── weather-service.ts            # Weather API service
└── enhanced-calendar-styles.css      # Calendar-specific styles
```

---

## 4. Shared Components

```
components/
├── calendar/
│   ├── CalendarHeader.tsx            # Calendar header component
│   ├── MonthCard.tsx                 # Month display card
│   └── ProvinceSelector.tsx          # Province/region selector
└── blog-preview.tsx                  # Blog preview component
```

---

## 5. Library Directory

### 5.1 Data & Databases

```
lib/
├── data/
│   ├── crops-database.ts             # Crop database for Angola
│   ├── products-database.ts          # Products database
│   └── calendar.ts                   # Calendar data
```

### 5.2 Utilities

```
lib/
├── utils.ts                          # General utilities
├── utils/
│   ├── crop-utils.ts                 # Crop-related utilities
│   └── pest-utils.ts                 # Pest-related utilities
├── types/
│   └── agriculture.ts                # Agriculture type definitions
├── performance-offline.ts            # Offline performance utilities
├── performance-offline.js
└── calendar-data.ts                  # Calendar data utilities
```

### 5.3 Articles & Content

```
lib/
├── articles/
│   ├── weather-planning-for-farmers.md
│   ├── guia-de-identificacao-e-controlo-de-pragas.md
│   ├── angolas-global-avocado-expansion.md
│   ├── agricultura-sustentavel-e-lucrativa-em-angola.md
│   └── agricultura-de-precisao-em-angola.md
├── articles.js                       # Article loader
└── getBlogPosts.ts                   # Blog post retrieval
```

### 5.4 Intelligence

```
lib/
├── agricultural-intelligence.ts      # Agricultural intelligence logic
└── agricultural-intelligence.js
```

---

## 6. Public Directory (Static Assets)

### 6.1 Internationalization (Locales)

```
public/locales/
├── en/common.json                    # English translations
├── pt/common.json                    # Portuguese translations
├── fr/common.json                    # French translations
├── ki/common.json                    # Kimbundu translations
└── um/common.json                    # Umbundu translations
```

### 6.2 Images

```
public/images/
├── blog/
│   ├── default.jpg
│   ├── jeferson-pedra.png
│   ├── agricultura-de-precicao-em-angola.jpg
│   ├── Weather-Planning-for-Farmers.jpg
│   ├── Guia-de-Identificacao-e-Controlo-de-Pragas.jpg
│   └── Agricultura-Sustentável-e-Lucrativa-em-Angola.jpg
├── angola-agri.png
├── angola-avocados.jpg
├── ana-mukonko.jpg
├── blog/default.jpg
├── camponessas.png
├── community-placeholder.png
├── green-badge.jpg
├── Histórias-de-Sucesso-Agrícola-Angolano.jpeg
├── jeferson-pedra.png
├── joao-fernandes.jpg
├── lobito-corridor-logistics.jpg
├── maria-santos.jpg
├── sunset.png
├── tractor.png
├── trust.jpg
└── vecteezy.png
```

### 6.3 PWA & Icons

```
public/
├── favicon.ico
├── icon-192x192.png
├── logo.svg
├── placeholder.svg
├── placeholder.jpg
├── placeholder-user.jpg
├── placeholder-logo.svg
├── placeholder-logo.png
├── sw.js                             # Main service worker
└── weather-sw.js                     # Weather service worker
```

---

## 7. Styles

```
styles/
├── globals.css                       # Global application styles
└── weather-animations.css            # Weather-specific animations
```

---

## 8. Hooks

```
hooks/
├── use-toast.ts                      # Toast notification hook
└── use-mobile.ts                     # Mobile detection hook
```

---

## 9. Types

```
types/
└── calendar.ts                       # Calendar-related TypeScript types
```

---

## 10. Utilities

```
utils/
└── cache.ts                          # Caching utility functions
```

---

## 11. Documentation

```
docs/
├── WEATHER_API_SETUP.md              # Weather API configuration guide
├── PROJECT_ANALYSIS_REPORT.md        # Project analysis
├── ProjectOverview.md                # Project overview
├── Implementation.md                 # Implementation details
├── ErrorTracker.md                   # Error tracking documentation
├── DIGITALZANGO_TRANSLATION_HOOK_AUDIT.md  # Translation audit
└── Deployment.md                     # Deployment guide
```

---

## 12. IDE & Tool Configuration

### 12.1 Windsurf Rules

```
.windsurf/rules/
├── coding-standards.md/coding-standards.md
├── code-review.md/code-review.md
├── error-handling.md/error-handling.md
├── feature-breakdown.md/feature-breakdown.md
└── testing-guidelines.md/testing-guidelines.md
```

### 12.2 VS Code

```
vscode/
└── mcp.json                          # MCP configuration
```

---

## 13. Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `next.config.js` | Next.js framework configuration |
| `next-i18next.config.js` | Internationalization configuration |
| `tailwind.config.ts` | Tailwind CSS utility classes configuration |
| `postcss.config.mjs` | PostCSS processor configuration |
| `tsconfig.json` | TypeScript compiler options |
| `jest.config.js` | Jest testing framework configuration |
| `jest.setup.js` | Jest test environment setup |
| `netlify.toml` | Netlify deployment settings |
| `components.json` | shadcn/ui component library configuration |
| `i18npt.json` | Portuguese i18n settings |
| `translation_keys.txt` | Reference for all translation keys |
| `.gitignore` | Files/folders excluded from git |
| `.opencode.json` | OpenCode tool configuration |
| `next-env.d.ts` | Next.js TypeScript environment declarations |

---

## 14. NPM Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server |
| `dev:turbo` | `next dev --turbopack` | Start dev with Turbopack |
| `build` | `npm install && next build` | Production build |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint |
| `analyze` | `cross-env ANALYZE=true next build` | Bundle analysis |
| `test` | `jest` | Run test suite |
| `test:watch` | `jest --watch` | Run tests in watch mode |
| `preinstall` | `npx only-allow npm` | Enforce npm usage |
| `postinstall` | `npm install --save-dev @types/node` | Install node types |

---

## 15. Key Dependencies

### Core
- `next`: 15.2.4 - React framework
- `react`: 19.x - UI library
- `react-dom`: 19.x - React DOM renderer
- `typescript`: 5.x - Type safety

### UI & Styling
- `tailwindcss`: 3.4.x - Utility-first CSS
- `@radix-ui/*`: Various - Accessible UI primitives
- `lucide-react`: 0.454.x - Icon library
- `class-variance-authority`: 0.7.x - Component variants
- `tailwind-merge`: 2.5.x - Tailwind class merging
- `tailwindcss-animate`: 1.0.x - Animation utilities
- `next-themes`: 0.4.x - Theme/dark mode

### Forms & Validation
- `react-hook-form`: 7.54.x - Form management
- `@hookform/resolvers`: 3.9.x - Form validation
- `zod`: 3.24.x - Schema validation

### Data Visualization
- `chart.js`: 4.4.x - Charting library
- `react-chartjs-2`: 5.3.x - React Chart.js wrapper
- `recharts`: 2.12.x - Composable charting

### Calendar & Date
- `react-big-calendar`: 1.19.x - Calendar component
- `date-fns`: 3.6.x - Date utilities
- `react-day-picker`: 9.6.x - Date picker

### Content & Markdown
- `react-markdown`: 10.1.x - Markdown renderer
- `gray-matter`: 4.0.x - Front matter parsing
- `remark`: 15.0.x - Markdown processor
- `remark-html`: 16.0.x - Markdown to HTML

### Internationalization
- `next-i18next`: 15.4.x - i18n for Next.js

### Notifications
- `sonner`: 1.7.x - Toast notifications

### UI Components
- `cmdk`: 1.0.4 - Command palette
- `embla-carousel-react`: 8.5.x - Carousel
- `vaul`: 1.1.x - Drawer component
- `input-otp`: 1.4.1 - OTP input
- `react-resizable-panels`: 2.1.x - Resizable panels

### Dev & Testing
- `@testing-library/react`: 16.3.x - React testing
- `@testing-library/jest-dom`: 6.6.x - Jest DOM matchers
- `jest`: 30.x - Test runner
- `jest-environment-jsdom`: 30.x - JSDOM environment
- `@next/bundle-analyzer`: 15.3.x - Bundle analysis
- `cross-env`: 7.0.x - Cross-env variables
- `critters`: 0.0.24 - CSS inlining

---

## 16. Application Architecture Summary

```
┌─────────────────────────────────────────────────────────────┐
│                      Next.js 15 App                         │
├─────────────────────────────────────────────────────────────┤
│  Pages (App Router)                                         │
│  calendario | tempo | cultivos | pragas | produtos | blog   │
│  comunidade | forum | eventos | ferramentas | recursos       │
├─────────────────────────────────────────────────────────────┤
│  State Management (React Context)                           │
│  Language Context | Region Context | Weather Context         │
│  Agricultural Context (optimized)                           │
├─────────────────────────────────────────────────────────────┤
│  UI Layer                                                   │
│  shadcn/ui Components | Tailwind CSS | Lucide Icons          │
│  Calendar Components | Weather Widgets | Blog Preview        │
├─────────────────────────────────────────────────────────────┤
│  Data Layer                                                 │
│  Crops Database | Products Database | Calendar Data          │
│  Agricultural Intelligence | Pest/Crop Utils                │
├─────────────────────────────────────────────────────────────┤
│  External Services                                          │
│  Weather API (OpenWeatherMap) | Service Workers (PWA)        │
├─────────────────────────────────────────────────────────────┤
│  Internationalization                                       │
│  next-i18next | 5 Languages (pt, en, fr, ki, um)            │
├─────────────────────────────────────────────────────────────┤
│  Content                                                    │
│  Markdown Articles | Blog Posts | Translation Files          │
└─────────────────────────────────────────────────────────────┘
```

---

## 17. Feature Modules

| Module | Routes | Description |
|--------|--------|-------------|
| **Calendar** | `/calendario` | Agricultural calendar with monthly planning |
| **Weather** | `/tempo`, `/api/weather` | Weather forecasts and alerts |
| **Crops** | `/cultivos/[slug]`, `/crop-guides` | Crop information and guides |
| **Pests** | `/pragas/*` | Pest identification and control |
| **Products** | `/produtos/*` | Seeds, fertilizers, tools catalog |
| **Shop** | `/comprar/*` | Purchase agricultural equipment |
| **Community** | `/comunidade/*`, `/forum` | Farmer community and forums |
| **Blog** | `/blog/[slug]` | Agricultural articles and news |
| **Resources** | `/recursos` | Agricultural resources |
| **Tools** | `/ferramentas`, `/tools` | Agricultural tools |
| **Provinces** | `/provincias` | Regional information |
| **Events** | `/events` | Agricultural events |
| **Tutorials** | `/tutorials` | Learning materials |

---

*Report generated: 2026-04-06*
*Application: Digitalzango Agricultural Calendar v0.1.0*

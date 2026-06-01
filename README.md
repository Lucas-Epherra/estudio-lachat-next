# Estudio Jurídico Lachat — Next.js Landing Page

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Commercial landing page for **Estudio Jurídico Lachat**, migrated from Vite/React to **Next.js App Router** with a strong focus on technical SEO, performance, accessibility, scalable frontend architecture and contact conversion through a real contact form, WhatsApp integration and document upload support.

The website follows a **Boutique Legal Premium** visual identity: editorial, warm, elegant and professional, with a design system based on deep petroleum blue, editorial gold, cream backgrounds and serif typography for headings.

🌐 **Live website:** https://www.estudiolachat.com.ar/

---

## Table of contents

- [Overview](#overview)
- [Project status](#project-status)
- [Tech stack](#tech-stack)
- [Main features](#main-features)
- [Architecture](#architecture)
- [Design system](#design-system)
- [Environment variables](#environment-variables)
- [Local installation](#local-installation)
- [Available scripts](#available-scripts)
- [Contact form](#contact-form)
- [Supabase integration](#supabase-integration)
- [Technical SEO](#technical-seo)
- [Vercel deployment](#vercel-deployment)
- [Production checklist](#production-checklist)
- [Best practices applied](#best-practices-applied)
- [Author](#author)
- [License](#license)

---

## Overview

This project is the Next.js migration of the commercial landing page for **Estudio Jurídico Lachat**.

The main goals were to improve:

- Technical SEO.
- Performance.
- Frontend architecture.
- Code scalability.
- User experience.
- Online legal consultation conversion.

The landing page is focused on generating inquiries related to:

- Legal contracts.
- Urban rentals.
- Rural leases.
- Legal notices.
- Claims and formal demands.
- Remote legal consultations.

---

## Project status

Current status: **functional migration completed and production deployment validated on Vercel**.

Validated features:

- Functional landing page built with Next.js.
- Successful production build.
- Contact form working without attached files.
- Contact form working with attached files.
- Contact request insertion in Supabase.
- File upload to Supabase Storage.
- Transactional email automation working.
- Automatic Google Sheets registration working.
- Deployment on Vercel working.
- Base SEO configured with metadata, sitemap, robots and Open Graph image.

---

## Tech stack

- **Next.js** with App Router.
- **React**.
- **TypeScript** in strict mode.
- **Tailwind CSS v4**.
- **Supabase**:
  - Database.
  - Storage.
  - RLS policies.
- **Resend** for transactional email automation.
- **Google Sheets** through an external automation flow.
- **Vercel** for deployment.

---

## Main features

- Responsive landing page.
- Sticky navigation bar.
- Institutional footer.
- Real legal studio logo.
- Floating WhatsApp button.
- Dynamic sections powered by `src/data`.
- Real contact form.
- Attached document upload.
- Anti-spam honeypot field.
- Contact request insertion in Supabase.
- Legal document storage in Supabase Storage.
- Email and Google Sheets automation.
- Technical SEO for search engines and social media sharing.

---

## Architecture

The project follows a clear separation of responsibilities.

```txt
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── Approach.tsx
│   │   ├── CommonSituations.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx
│   │   └── Services.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Dividers.tsx
│       ├── FAQItem.tsx
│       ├── FloatingWhatsApp.tsx
│       ├── Label.tsx
│       ├── LeafSprig.tsx
│       ├── Logo.tsx
│       ├── OrganicDecor.tsx
│       └── ServiceCard.tsx
│
├── config/
│   ├── contact.ts
│   └── site.ts
│
├── constants/
│   └── contactForm.ts
│
├── data/
│   ├── approachItems.ts
│   ├── commonSituations.ts
│   ├── faqs.ts
│   ├── processSteps.ts
│   └── services.ts
│
├── lib/
│   └── supabaseClient.ts
│
└── utils/
    ├── contactFormValidation.ts
    └── fileHelpers.ts
```

---

## Design system

The visual identity is based on a **Boutique Legal Premium** aesthetic.

### Main colors

Defined as Tailwind CSS v4 tokens:

```css
--color-brand-dark: #082e3a;
--color-brand-gold: #b89b5e;
--color-brand-cream: #fff9ef;
--color-brand-surface: #fffaf0;
```

### Visual usage

- `brand-dark`: primary text, contrast backgrounds and primary buttons.
- `brand-gold`: accents, dividers, details, focus states and hover states.
- `brand-cream`: warm main background.
- `brand-surface`: cards, inputs and light surfaces.

### Typography

- Headings: editorial serif typography.
- Body text: clean sans-serif typography.
- General style: spacious layout, soft contrast, botanical ornaments and diamond dividers.

---

## Environment variables

The project uses public Supabase variables for frontend operations allowed by RLS policies.

Create a file in the project root:

```txt
.env.local
```

Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

Do not expose private keys or service role keys through `NEXT_PUBLIC_*` variables.

Incorrect:

```env
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY="..."
```

Correct:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
```

---

## Local installation

Clone the repository:

```bash
git clone https://github.com/Lucas-Epherra/estudio-lachat-next.git
```

Move into the project directory:

```bash
cd estudio-lachat-next
```

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

Run the development server:

```bash
npm run dev
```

Open the project locally:

```txt
http://localhost:3000
```

---

## Available scripts

### Development

```bash
npm run dev
```

Starts the project in development mode.

### Production build

```bash
npm run build
```

Builds the project for production.

### Local production server

```bash
npm run start
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Runs lint validations if the script is configured in `package.json`.

---

## Contact form

The contact form is located at:

```txt
src/components/sections/ContactForm.tsx
```

It is the only main block that requires `"use client"` because it handles:

- Form state.
- Submit flow.
- Selected files.
- Validation.
- Success and error feedback.
- Uploads to Supabase Storage.
- Insertions into Supabase Database.

### Fields

- Full name.
- Email.
- Phone / WhatsApp.
- Case type.
- Message.
- Attached documentation.
- Anti-spam honeypot.

### Case types

Defined in:

```txt
src/constants/contactForm.ts
```

```ts
export const CASE_TYPES = [
  "Contratos",
  "Locaciones",
  "Carta documento",
  "Arrendamientos rurales",
  "Reclamo / intimación",
  "Otra consulta",
] as const;
```

These values must match the `CHECK constraint` defined in Supabase for the `case_type` column.

---

## Supabase integration

The project uses Supabase to:

- Store contact requests in the `contact_requests` table.
- Upload legal documents to the `legal-documents` bucket.
- Store uploaded file paths in `file_paths`.

### Expected table

```txt
contact_requests
```

Columns used by the frontend:

```txt
submission_id
full_name
email
phone
case_type
message
has_files
file_paths
status
```

### Expected bucket

```txt
legal-documents
```

Files are stored under the following path:

```txt
consultas/{submissionId}/{index}-{fileName}
```

Example:

```txt
consultas/550e8400-e29b-41d4-a716-446655440000/1-contract.pdf
```

This path must match the RLS policy configured in Supabase Storage.

### Attachment restrictions

Defined in:

```txt
src/constants/contactForm.ts
```

```ts
MAX_FILES: 3
MAX_FILE_SIZE_MB: 5
ACCEPTED_EXTENSIONS: [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"]
```

---

## Technical SEO

The global SEO configuration is centralized in:

```txt
src/config/site.ts
```

And applied from:

```txt
src/app/layout.tsx
```

It includes:

- Title.
- Description.
- Keywords.
- Canonical URL.
- Open Graph metadata.
- Twitter Card metadata.
- Favicon.
- Apple icon.
- Metadata base.

### Generated SEO routes

```txt
/robots.txt
/sitemap.xml
/og-lachat.png
```

Related files:

```txt
src/app/robots.ts
src/app/sitemap.ts
public/og-lachat.png
```

---

## Vercel deployment

The project is ready to be deployed on Vercel.

### Required Vercel variables

Go to:

```txt
Project → Settings → Environment Variables
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Recommended scopes:

```txt
Production
Preview
```

### Recommended configuration

```txt
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: Default
```

### Production domain

Final production domain:

```txt
https://www.estudiolachat.com.ar
```

Before pointing the real domain, validate:

- Preview deployment.
- Contact form without files.
- Contact form with files.
- Email delivery.
- Google Sheets registration.
- Supabase Storage upload.
- SEO routes.
- Mobile layout.

---

## Production checklist

Before connecting the real domain:

```txt
[ ] npm run build passes successfully
[ ] Home page loads correctly
[ ] Logo loads correctly on desktop and mobile
[ ] Responsive navbar works correctly
[ ] Responsive footer works correctly
[ ] Floating WhatsApp button does not cover critical content
[ ] Contact form without files works
[ ] Contact form with files works
[ ] Contact request appears in Supabase
[ ] Uploaded file appears in legal-documents/consultas
[ ] Email is delivered correctly
[ ] Google Sheets registration is updated
[ ] /robots.txt works
[ ] /sitemap.xml works
[ ] /og-lachat.png works
[ ] Preview validated at 320px mobile width
[ ] Preview validated at 425px mobile width
[ ] Preview validated on desktop
```

---

## Best practices applied

- Server Components by default.
- Client Component only for the interactive contact form.
- Strict TypeScript.
- Explicit interfaces and types.
- JSDoc in relevant components and logic.
- Clear separation between data and UI.
- Centralized configuration.
- Responsive design.
- Semantic HTML.
- Accessibility with labels, `aria-labels` and visible focus states.
- Anti-spam honeypot.
- Safe environment variable handling.
- Native App Router SEO routes.
- Deployment preview before production.

---

## Author

Developed by **Lucas Epherra**.

- Portfolio: https://www.lucasepherra.com.ar/
- GitHub: https://github.com/Lucas-Epherra
- LinkedIn: https://www.linkedin.com/in/lucas-epherra

---

## License

This project was developed for commercial use by **Estudio Jurídico Lachat**.

The visual identity, commercial copy, logo and related automation flows should not be reused without authorization.

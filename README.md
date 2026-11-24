# joeysheridan.com

Personal site of Joey Sheridan, Senior Data Engineer (Data Infrastructure & Applied AI).

- **Style:** Signal Grid, dark only (Archivo + JetBrains Mono, lime accent, zero radius)
- **Site:** [Astro](https://astro.build) + Tailwind CSS, built to static HTML in `dist/`
- **Hosting:** S3 + CloudFront + ACM + Route 53, defined in Terraform under [`infra/`](infra/README.md)
- **Deploy:** GitHub Actions builds every PR and deploys `main` using short-lived AWS credentials (OIDC)

## Develop

```sh
npm install
cp .env.example .env   # optional: contact email
npm run dev            # http://localhost:4321
npm run build          # outputs dist/
```

## Layout

```
src/
  data/        site.ts: profile, nav, and the project cards (placeholders until each project ships)
  components/  breadcrumb, page header, project card
  layouts/     page shell: head, nav, footer
  pages/       one file per route (work, lab, lab/medallion, notes, about, contact)
  styles/      global.css: Signal Grid design tokens and shared components
public/      static files served as-is (resume PDF, favicon, robots.txt)
infra/       Terraform for AWS hosting
```

# Lot Holmstead Personal Website

Personal resume and portfolio website for Lot Holmstead.

The current requirements and launch status are tracked in [`BYU_PORTFOLIO_CHECKLIST.md`](./BYU_PORTFOLIO_CHECKLIST.md).
The GitHub Pages and Cloudflare walkthrough is in [`HOSTING_SETUP.md`](./HOSTING_SETUP.md).

## Local development

```sh
pnpm install
pnpm dev
```

Open the local URL shown in the terminal.

## Production checks

```sh
pnpm check
pnpm build
pnpm preview
```

## Updating content

- Profile details: `src/data/profile.ts`
- Completed and current projects: `src/data/projects.ts`
- Page copy: `src/pages/`
- Photos: `public/images/`
- Resume: `public/documents/Lot-Holmstead-Resume.pdf`

## Contact form

The form currently opens a pre-addressed email draft. Before launch, create a Formspree form owned by Lot, then replace `FORM_ENDPOINT` in `src/pages/contact.astro` with the production endpoint.

## Deployment

The included GitHub Actions workflow builds and publishes the site to GitHub Pages after changes are pushed to `main`.

## Site structure

- Home: professional introduction, experience, education, and completed projects
- About: personal story and photo gallery
- Now: current school, work, builds, learning, and internship goals
- Resume: embedded PDF and professional profiles
- Contact: contact form and direct contact details

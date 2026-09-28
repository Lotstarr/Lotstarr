# BYU Portfolio Factory Checklist

Audit date: September 28, 2026

Sources:

- [BYU Portfolio Factory Setup Guide](https://iscareers.byu.edu/portfolio-factory-setup-guide)
- [BYU Technical Portfolio Factory](https://iscareers.byu.edu/portfolio-factory)
- [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Status key:

- `[x]` complete and verified locally
- `[~]` partially complete or waiting on content/account setup
- `[ ]` not complete yet

## 1. Recruiter-facing content

- [x] Name is visible without scrolling.
- [x] Target direction is visible without scrolling.
- [x] Graduation date is visible without scrolling.
- [x] Direct email contact is visible without scrolling.
- [x] GitHub and LinkedIn are linked.
- [x] The Home page has a Projects heading.
- [x] Projects explain what they do and identify their technology stack.
- [x] Completed projects now state a concrete build result.
- [~] One completed project has a verified repository and live demo; the Wedding Financial Planner still needs a public repository or live demo.
- [~] Two completed projects are shown. BYU permits an early Project 000 site to launch with fewer, but three to five strong projects is the mature target.
- [x] A short About story and a full About page exist.
- [x] The resume PDF opens and downloads successfully.
- [x] There are no photo carousels, percentage skill bars, or autoplaying media.
- [x] In-progress work and concepts are separated from completed portfolio work on the Now page.

## 2. Site quality and accessibility

- [x] Astro production build succeeds: 6 pages, 0 errors, 0 warnings, and 0 hints.
- [x] All generated internal links and page fragments resolve.
- [x] The resume asset returns successfully and is not a dead link.
- [x] The layout has responsive phone breakpoints.
- [x] Exact 390-pixel viewport check shows no horizontal overflow.
- [x] Name, target, April 2028 graduation, and email fit within the initial 390 × 844 phone viewport.
- [x] Skip link, keyboard focus styles, semantic headings, and reduced-motion support are present.
- [x] Lighthouse Accessibility score is 100 on the Home, About, Now, Resume, and Contact pages. BYU's minimum is 95.
- [x] Muted text, project statuses, and focus indicators were adjusted for accessible contrast.
- [x] The embedded resume has an accessible title.
- [~] The source resume PDF is not tagged for screen readers. The page provides an accessible fallback and direct download, but a tagged PDF or complete HTML resume would be a future improvement.
- [~] LinkedIn and Handshake links are present; both services restrict automated verification, so check them once in a signed-in browser before launch.

## 3. GitHub repository and Pages

- [x] Use the existing public GitHub profile repository [`Lotstarr/Lotstarr`](https://github.com/Lotstarr/Lotstarr), with its root README kept as the GitHub profile introduction.
- [~] The website source is committed locally on `main` and ready for its first push to `Lotstarr/Lotstarr`.
- [x] A real Astro GitHub Pages workflow exists in `.github/workflows/deploy.yml`.
- [x] The workflow's `environment` configuration is at the correct job level.
- [ ] In GitHub: **Settings → Pages → Source → GitHub Actions**.
- [ ] Confirm the workflow completes successfully.
- [ ] Confirm the first Pages workflow succeeds before changing Cloudflare DNS.

The BYU beginner guide recommends branch deployment for a single-file site and says to use Actions only when a working workflow exists. This project is an Astro build, so the included Actions workflow is the appropriate equivalent. The deployed artifact contains its root `index.html`.

Because this is the profile repository rather than the specially named `lotstarr.github.io` repository, its temporary project URL is `https://lotstarr.github.io/Lotstarr/`. The production build uses root-relative paths for the final custom domain, so the temporary URL can confirm a deployment occurred but is not the authoritative navigation test. Verify full navigation locally and again at `lotholmstead.com`.

## 4. `lotholmstead.com` and Cloudflare

- [x] `lotholmstead.com` is a professional real-name `.com` domain.
- [x] Cloudflare nameservers are active: `daphne.ns.cloudflare.com` and `pranab.ns.cloudflare.com`.
- [x] `public/CNAME` contains exactly `lotholmstead.com`.
- [ ] Confirm automatic renewal, two-factor authentication, and WHOIS redaction in Cloudflare Registrar.
- [ ] Verify the domain in GitHub account settings and preserve GitHub's TXT verification record. This is a recommended takeover-protection step.
- [ ] In the repository's Pages settings, set the custom domain to `lotholmstead.com`.
- [ ] Only after the first Pages workflow succeeds and GitHub recognizes the deployment, create these Cloudflare DNS records:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `lotstarr.github.io` | DNS only |

- [ ] Optional: add GitHub's four current AAAA records for IPv6, while retaining all four A records.
- [ ] Keep all GitHub Pages web records **DNS only** (gray cloud) while GitHub validates DNS and issues the HTTPS certificate. BYU specifically warns against Cloudflare's orange-cloud proxy for this setup.
- [ ] Wait for DNS propagation instead of repeatedly changing records.
- [ ] Confirm GitHub's Pages DNS check passes.
- [ ] Enable **Enforce HTTPS** in GitHub Pages.
- [ ] Confirm all four production behaviors:
  - `https://lotholmstead.com` loads;
  - `http://lotholmstead.com` redirects to HTTPS;
  - `https://www.lotholmstead.com` redirects to the chosen canonical domain;
  - important subpages and the resume work on the custom domain.

Current DNS snapshot: Cloudflare is authoritative, but the apex has no public A record and `www` has no CNAME yet. That is the correct state while the first `Lotstarr/Lotstarr` Pages deployment is still pending.

GitHub's current documentation notes that a `CNAME` file is not required for a custom Actions deployment and is ignored during publishing. It remains in the project to match the BYU checklist; the **Pages → Custom domain** setting is authoritative.

## 5. Contact form

- [x] Email, phone, LinkedIn, GitHub, and Handshake contact routes are available.
- [x] The Contact page has accessible form fields, status messaging, and a spam honeypot.
- [~] The form currently prepares an email draft as a safe fallback.
- [ ] Create a Formspree form owned by Lot, delivering to `lotstarr@gmail.com`.
- [ ] Add the production endpoint to `FORM_ENDPOINT` in `src/pages/contact.astro`.
- [ ] Test validation, successful delivery, error handling, mobile use, and spam protection from the production domain.

Until the endpoint is connected and a test message is received, the form should not be described as a hosted submission form.

## 6. Assets and final recruiter polish

- [ ] Replace the Home headshot placeholder with the professional headshot.
- [ ] Replace the About hero placeholder with a licensed Mount Timpanogos or personal mountain image.
- [ ] Add the snowboarding, dirt biking, Jeep, wedding, and Philippines mission photos.
- [ ] Add descriptive alt text and explicit dimensions to every meaningful image.
- [ ] Add screenshots for the strongest completed projects.
- [ ] Publish the Wedding Financial Planner repository or demo and connect its card.
- [ ] Create a 1200 × 630 social-sharing image instead of using the favicon.
- [ ] Review every sentence and image on the production site as a recruiter.
- [ ] Add `https://lotholmstead.com` to the resume, LinkedIn, Handshake, and GitHub profile after launch.

## 7. BYU-aligned project roadmap

The current professional direction is product management and technical-business work. The strongest next sequence from BYU's catalog is:

1. **P0 — Competitive Teardown:** compare three real products, recommend one prioritized change, and state what evidence would prove the recommendation wrong.
2. **P1 — Spec and Wireframe:** turn the teardown into a buildable spec with user stories, acceptance criteria, wireframes, and explicit non-goals.
3. **P2 — Ship or Kill:** put an MVP in front of users, define the success metric before testing, and report an honest ship, iterate, or stop decision.

The IS Career Launchpad could become the P1/P2 case study if it documents the user problem, Lot's individual role, decisions, metric, user evidence, and result. A BYU Data or Development starter would then add technical range without filling the site with generic class assignments.

## Launch blockers

The site is locally strong enough to keep customizing, but it is not yet ready to put on applications. The remaining blockers are:

1. Commit and push the website source to `Lotstarr/Lotstarr`, enable Pages through GitHub Actions, and confirm a successful deployment.
2. Cloudflare DNS, GitHub custom-domain verification, and enforced HTTPS.
3. A real hosted contact-form endpoint and successful delivery test.
4. A repository or demo link for the Wedding Financial Planner.
5. Replacement of the most visible image placeholders before recruiter use.

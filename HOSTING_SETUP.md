# Hosting Setup for `lotholmstead.com`

This website uses the existing public profile repository [`Lotstarr/Lotstarr`](https://github.com/Lotstarr/Lotstarr), GitHub Pages, and the domain registered with Cloudflare.

The repository has two jobs:

1. Its root `README.md` appears on Lot's GitHub profile.
2. The Astro source is built by GitHub Actions and published at `lotholmstead.com`.

The temporary project-site address would be `https://lotstarr.github.io/Lotstarr/`. This build is intentionally configured for the final custom domain at the web root, so use the local preview and then the custom domain for final testing rather than treating that project-path URL as the finished site.

## Current status

- The local site is connected to `https://github.com/Lotstarr/Lotstarr.git` on `main`.
- The existing GitHub profile history and root profile README are preserved.
- The Astro production build passes locally.
- `.github/workflows/deploy.yml` contains the Pages deployment workflow.
- `public/CNAME` contains exactly `lotholmstead.com`.
- The domain uses Cloudflare nameservers, but its GitHub Pages web records are not configured yet.
- GitHub Pages is not enabled for this repository yet.

Do not share a GitHub password, access token, two-factor code, backup code, or Cloudflare password in chat. Complete sign-in and two-factor prompts only in the official GitHub or Cloudflare interface.

## Phase 1: Publish the website source

Codex can prepare, check, commit, and push the website files to the existing `main` branch. Before pushing, verify that:

- the root `README.md` is still the GitHub profile introduction;
- `WEBSITE_DEVELOPMENT.md` contains the developer notes;
- the accidental nested `Personal Website/` repository is ignored; and
- `node_modules`, `dist`, environment files, and logs are not included.

After the push, open [`Lotstarr/Lotstarr`](https://github.com/Lotstarr/Lotstarr) and confirm that the Astro source and `.github/workflows/deploy.yml` are present alongside the profile README.

## Phase 2: Enable GitHub Pages

1. Open [`Lotstarr/Lotstarr`](https://github.com/Lotstarr/Lotstarr).
2. Choose **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Do not choose **Deploy from a branch** and do not replace the included workflow with a suggested one.
5. Open the repository's **Actions** tab.
6. Select **Deploy website to GitHub Pages**.
7. If the first run began before Pages was enabled and failed, choose **Re-run all jobs** after saving the Pages setting.

The workflow should finish with a green check. The repository's temporary Pages path is a project URL, not the final public address; the site is configured to be checked at `lotholmstead.com` after the remaining steps.

## Phase 3: Verify ownership of the domain

This account-level verification protects the domain from being claimed by another GitHub repository.

1. In GitHub, open the profile menu and choose **Settings**. This is the account settings page, not repository settings.
2. Under **Code, planning, and automation**, open **Pages**.
3. Choose **Add a domain** and enter `lotholmstead.com`.
4. GitHub will show a TXT record name and value. Keep that page open.
5. In Cloudflare, open **Websites → lotholmstead.com → DNS → Records**.
6. Add the TXT record using GitHub's exact name and value. Leave TTL set to **Auto**.
7. Return to GitHub and choose **Verify**.
8. Keep this TXT record in Cloudflare permanently.

Do not copy a TXT record from an example or from this guide. Use the unique values GitHub generates for the `Lotstarr` account.

## Phase 4: Assign `lotholmstead.com` to the repository

1. Return to [`Lotstarr/Lotstarr`](https://github.com/Lotstarr/Lotstarr).
2. Open **Settings → Pages**.
3. In **Custom domain**, enter exactly `lotholmstead.com`.
4. Do not include `https://`, `www`, a path, or a trailing slash.
5. Choose **Save**.

A DNS warning is expected until the Cloudflare records in the next phase propagate. For this Actions deployment, the Pages custom-domain setting is authoritative. The checked-in `CNAME` file is retained as a clear record of the intended domain.

## Phase 5: Point Cloudflare to GitHub Pages

In Cloudflare, open **Websites → lotholmstead.com → DNS → Records**.

1. Remove only conflicting website records at `@` or `www`, if any exist.
2. Do not remove the GitHub verification TXT record, MX records, email records, or unrelated records.
3. Add these records:

| Type | Name | Content | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only | Auto |
| A | `@` | `185.199.109.153` | DNS only | Auto |
| A | `@` | `185.199.110.153` | DNS only | Auto |
| A | `@` | `185.199.111.153` | DNS only | Auto |
| CNAME | `www` | `lotstarr.github.io` | DNS only | Auto |

The `www` target is the GitHub Pages host for the account, so it remains `lotstarr.github.io` even though the source repository is named `Lotstarr`.

Every A and CNAME record should show Cloudflare's gray cloud labeled **DNS only** while GitHub checks the domain and issues the certificate. Do not use Cloudflare's orange-cloud proxy or Flexible SSL for the initial setup.

Optional IPv6 records can be added later:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

If Cloudflare already has CAA records, at least one must permit `letsencrypt.org` or GitHub may be unable to issue the certificate. Do not add wildcard DNS records.

## Phase 6: Finish HTTPS and verify production

1. Wait for GitHub's DNS check. DNS and certificate changes may take time; do not repeatedly delete and recreate the records.
2. In **Repository → Settings → Pages**, wait for the domain check and certificate provisioning to complete.
3. Turn on **Enforce HTTPS** when the option becomes available.
4. Re-run **Deploy website to GitHub Pages** if the site was last built before the custom domain was saved.
5. Verify:
   - `https://lotholmstead.com` loads;
   - `http://lotholmstead.com` redirects to HTTPS;
   - `https://www.lotholmstead.com` redirects to the canonical domain;
   - `/about/`, `/now/`, `/resume/`, and `/contact/` load;
   - `/documents/Lot-Holmstead-Resume.pdf` opens; and
   - navigation and the mobile menu work.
6. Ask Codex to run the final DNS, HTTPS, redirect, link, mobile, and Lighthouse checks.

## Phase 7: Connect the hosted contact form

1. Create a [Formspree](https://formspree.io/) account owned by Lot.
2. Create a form named `Lot Holmstead Website` that delivers to `lotstarr@gmail.com`.
3. Complete Formspree's email verification.
4. Copy the public endpoint, which resembles `https://formspree.io/f/xxxxxxxx`.
5. Send only that public endpoint to Codex.
6. Codex will add it to `FORM_ENDPOINT` in `src/pages/contact.astro` and help test delivery, validation, errors, and spam protection.

Until that endpoint is connected, the form safely opens a pre-addressed email draft rather than claiming to submit a hosted message.

## Phase 8: Finish recruiter-launch content

These items do not block the first deployment, but they should be completed before the site is added to job applications:

1. Replace the headshot and About-page photo placeholders.
2. Publish or provide the Wedding Financial Planner repository or demo.
3. Approve the final project descriptions and internship target.
4. Review the resume PDF one final time.
5. Add `https://lotholmstead.com` to the resume, LinkedIn, Handshake, and GitHub profile after the domain is live.

## What Lot needs to do

After Codex pushes the site source, Lot needs to complete the account-only steps:

1. Set the repository's Pages source to **GitHub Actions**.
2. Verify `lotholmstead.com` in GitHub account settings with GitHub's TXT record.
3. Save `lotholmstead.com` as the repository's custom domain.
4. Add the five GitHub Pages DNS records in Cloudflare.
5. Enable **Enforce HTTPS** when GitHub makes it available.
6. Create and send the public Formspree endpoint.
7. Send the final photos and any missing project links.

## Normal update workflow after launch

1. Edit the source locally.
2. Preview and run the production checks.
3. Commit the changes to `main`.
4. Push to `Lotstarr/Lotstarr`.
5. GitHub Actions rebuilds the site automatically.
6. `lotholmstead.com` updates without any further DNS changes.

For editing without Codex, install Node.js 22 and pnpm, then use `pnpm install`, `pnpm dev`, and `pnpm build`.

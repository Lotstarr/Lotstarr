# Personal Website — Remaining Work

Last reviewed: September 28, 2026

This is the primary working checklist for finishing and maintaining `lotholmstead.com`. The older planning and BYU audit documents remain useful references, but this file should be updated as work is completed.

Status key:

- `[x]` complete
- `[~]` in progress or waiting on an outside service
- `[ ]` not started

Ownership key:

- **Lot** — information, accounts, approvals, and personal assets
- **Codex** — implementation, optimization, testing, and deployment preparation
- **Together** — review and judgment calls

## Current position

- [x] **Codex:** Build the five-page Astro website: Home, About, Now, Resume, and Contact.
- [x] **Together:** Use the existing `Lotstarr/Lotstarr` profile repository while preserving its profile README and history.
- [x] **Codex:** Add the GitHub Actions deployment workflow.
- [x] **Lot:** Enable GitHub Pages with GitHub Actions.
- [x] **Together:** Push the first website release; deployment run 1 completed successfully.
- [x] **Lot:** Verify ownership of `lotholmstead.com` through GitHub and Cloudflare.
- [x] **Lot:** Set `lotholmstead.com` as the repository's custom domain.
- [x] **Lot:** Add the four GitHub Pages A records and the `www` CNAME in Cloudflare.
- [x] **Codex:** Confirm the authoritative DNS records, apex routing, and `www` redirect are correct.
- [~] **GitHub:** Finish issuing the TLS certificate for the custom domain.

## Phase 1 — Finish the domain launch

- [ ] **Lot:** Refresh **Repository → Settings → Pages** until **Enforce HTTPS** is available.
- [ ] **Lot:** Enable **Enforce HTTPS**.
- [ ] **Codex:** Confirm `https://lotholmstead.com` loads with a valid certificate.
- [ ] **Codex:** Confirm `http://lotholmstead.com` redirects to HTTPS.
- [ ] **Codex:** Confirm `https://www.lotholmstead.com` redirects to the apex domain.
- [ ] **Codex:** Test all pages, assets, and the resume on the production domain.
- [ ] **Codex:** Update the GitHub profile README from “will be published” to the live-site wording.

Completion test: both domain versions work, all traffic ends at `https://lotholmstead.com`, and the browser shows no certificate warning.

## Phase 2 — Lot's personal-information review

Lot should review or provide the following. Plain notes are enough; Codex can turn them into polished website copy without adding unsupported claims.

Confirmed decisions so far:

- Public location: Provo, Utah.
- GPA: resume only; do not display it elsewhere on the website.
- Academic interests: AI, technology startups, and product management.
- Awards: do not add Eagle Scout or Honor Roll to the website.
- Python: describe as foundational experience, not a current advanced skill.
- JavaScript and SQL: retain as regular skills.
- Current role: Sales Development Representative at EZsalt, March 2026 to present.
- Current academic role: Teaching Assistant for IS 581, Managing a Software Startup, September 14, 2026 to present. Responsibilities include reviewing projects, running activities, providing feedback, grading, and helping develop the Software Startup Simulation.
- Degree: Bachelor of Science in Information Systems at BYU, expected April 2028.
- Keep the public phone number, current internship target, mission details, and confirmed EZsalt metrics.
- Photography: use Lot's real personal photos for hobbies and life events; do not substitute AI-generated people or activities.
- About-page background: use a real photograph of Utah mountains, preferably one supplied or approved by Lot.

### Professional facts

- [x] **Lot:** Confirm current job title, employer, location, and employment dates.
- [x] **Lot:** Confirm BYU program, current year/core status, and expected April 2028 graduation.
- [x] **Lot:** Confirm the Summer 2027 internship target and preferred role types.
- [x] **Lot:** Review every metric used for EZsalt and confirm each is defensible.
- [x] **Lot:** Review the skills list and remove anything that feels overstated or irrelevant.
- [x] **Lot:** Decide whether the public phone number should remain visible.

### Personal story

- [x] **Lot:** Write or approve a short introduction in his own voice.
- [ ] **Lot:** Provide the main points for the About story: background, family, interests, mission, and what shaped his goals.
- [ ] **Lot:** Confirm the hobbies and interests that should remain public.
- [ ] **Lot:** Review the Now page: current classes, work, active builds, learning priorities, and internship goals.
- [ ] **Together:** Remove any sentence that sounds generic, inflated, or unlike Lot.

### Resume and profiles

- [ ] **Lot:** Update the résumé with selected completed projects and decide how to present the IS 581 teaching-assistant role.
- [ ] **Lot:** Confirm LinkedIn and Handshake show current information.
- [x] **Codex:** Replace the resume PDF with the September 2026 version reflecting current experience and projects.
- [ ] **Codex:** Keep website, resume, LinkedIn, Handshake, and GitHub facts consistent.

Completion test: Lot can read every sentence and say it is accurate, specific, and sounds like him.

## Phase 3 — Replace every visible photo placeholder

### Assets Lot will provide

- [x] Professional headshot.
- [x] Mount Timpanogos, Rocky Mountains, or another approved About-page hero image.
- [x] Snowboarding photo.
- [x] Dirt biking photo.
- [x] Jeep/outdoors photo.
- [x] Wedding photo with Lot and his wife.
- [x] Philippines mission photo.
- [x] BYU campus photo for the Now-page hero.
- [x] Natural portrait for the About story section.

### Work Codex will complete

- [x] Select the best crop and placement for each supplied image; nine images are placed and visually checked.
- [x] Create web-sized versions without overwriting Lot's originals; completed for the nine supplied images.
- [x] Use efficient formats and responsive dimensions; current images use metadata-stripped WebP copies.
- [x] Add accurate alt text for meaningful images and empty alt text for decorative images.
- [x] Prevent layout shift by setting image dimensions or aspect ratios.
- [x] Confirm that no generic image is presented as a real photo of Lot.
- [x] Remove the placeholder component and all placeholder notes from public pages.

Completion test: no photo placeholder remains, images load quickly, and the About page feels personal rather than templated.

## Phase 4 — Strengthen the project portfolio

### Existing projects

- [x] Snowboard Ride Coach has a verified repository and live demo.
- [ ] **Lot:** Provide one strong screenshot for Snowboard Ride Coach.
- [ ] **Lot:** Publish or provide the Wedding Financial Planner repository, demo, or source.
- [ ] **Lot:** Provide one strong screenshot for the Wedding Financial Planner.
- [ ] **Together:** Confirm each completed-project description explains the problem, Lot's contribution, tools, and result.

### Current and future projects

- [x] **Lot:** Provide the initial scope and working name for the in-progress Software Startup Simulation.
- [ ] **Together:** Confirm the simulation's final name, Lot's individual role, collaborators, and technology after the MVP plan is finalized.
- [x] **Lot:** Confirm IS Career Launchpad is completed.
- [x] **Codex:** Add the verified IS Career Launchpad repository and live GitHub Pages demo.
- [x] **Lot:** Confirm Starrboard is completed and has a public repository and live demo.
- [x] **Codex:** Move IS Career Launchpad and Starrboard from Now to the completed portfolio.
- [ ] **Together:** Build toward three to five strong completed projects over time rather than filling the site with weak examples.
- [x] **Codex:** Add repository and live-demo buttons for IS Career Launchpad, Starrboard, and the resume website with Snowboard Ride Coach.

Completion test: every completed project has credible evidence and no concept is presented as finished work.

## Phase 5 — Activate the contact form

- [x] **Lot:** Create a Formspree form named `Lot Holmstead Website`.
- [ ] **Lot:** Set delivery to `lotstarr@gmail.com` and complete email verification.
- [x] **Lot:** Send Codex only the public endpoint resembling `https://formspree.io/f/xxxxxxxx`.
- [x] **Codex:** Add the endpoint to `FORM_ENDPOINT` in `src/pages/contact.astro`.
- [ ] **Codex:** Preserve direct email and phone alternatives.
- [ ] **Codex:** Test required-field validation and the honeypot.
- [ ] **Together:** Submit a real production test and confirm the message arrives.
- [ ] **Codex:** Test success, provider-error, and network-error messages.
- [ ] **Lot:** Enable Formspree spam controls and production-domain restrictions where available.

Completion test: a visitor can submit the form from the production site, Lot receives it, and failures produce understandable messages.

## Phase 6 — Visual and sharing polish

- [ ] **Together:** Review the final white-and-blue design after real photography is inserted.
- [ ] **Together:** Compare the production result with the reference sites and remove anything that still feels overly templated.
- [ ] **Codex:** Add project screenshots with consistent framing.
- [ ] **Codex:** Create a dedicated 1200 × 630 social-sharing image.
- [ ] **Codex:** Add Open Graph and social-card metadata using that image.
- [ ] **Together:** Review the favicon and decide whether the current mark should remain.
- [ ] **Codex:** Check typography, spacing, crops, and empty states at phone, tablet, laptop, and wide-screen sizes.

Completion test: the site has a recognizable personal identity and previews well when shared in messages or social platforms.

## Phase 7 — Final recruiter launch audit

- [ ] Confirm every navigation link and button works in production.
- [ ] Confirm the resume opens and downloads.
- [ ] Confirm GitHub, LinkedIn, Handshake, email, and phone links use the intended destinations.
- [ ] Confirm completed and unfinished projects have accurate status labels.
- [ ] Test keyboard navigation, focus order, skip link, and mobile menu.
- [ ] Test current Chrome, Safari, and a real phone.
- [ ] Run Lighthouse on Home, About, Now, Resume, and Contact.
- [ ] Keep accessibility at 95 or higher and fix material performance or SEO issues.
- [ ] Check for broken links, missing images, horizontal overflow, and console errors.
- [ ] Confirm the 404 page works.
- [ ] Confirm `robots.txt`, sitemap files, canonical URLs, and page descriptions use the production domain.
- [ ] Ask two or three trusted people to review clarity and credibility.
- [ ] Perform one final recruiter-style review that takes no more than 60 seconds.

Completion test: the site is accurate, fast, accessible, mobile-friendly, and ready to include on applications.

## Phase 8 — Publish the URL everywhere

Complete this only after the recruiter launch audit.

- [x] Add `https://lotholmstead.com` to the resume.
- [ ] Add it to LinkedIn contact information or Featured content.
- [ ] Add it to Handshake.
- [ ] Add it as the GitHub profile website and the `Lotstarr/Lotstarr` repository homepage.
- [ ] Use it on internship and job applications.
- [ ] Consider adding it to a professional email signature.

## Phase 9 — Repository cleanup

- [ ] **Lot:** Decide whether Codex may remove or archive the accidental `Lotstarr/Personal-Website` repository.
- [ ] **Lot:** Decide whether Codex may remove the ignored nested local `Personal Website/` checkout.
- [ ] **Codex:** Perform cleanup only after explicit approval and preserve anything that might be needed.
- [ ] **Codex:** Update older planning and hosting documents so their status matches the live site.

The accidental repository and nested checkout are safely excluded from the active website repository. They are not blocking launch.

## Recommended working order

1. Finish HTTPS when GitHub enables the checkbox.
2. Lot reviews and supplies personal facts and draft notes.
3. Lot supplies the headshot and personal photos; Codex inserts and optimizes them.
4. Lot supplies missing project evidence; Codex upgrades the project cards.
5. Lot creates the Formspree form; Codex connects and tests it.
6. Together review the full production site and revise the voice and design.
7. Codex performs the final production audit.
8. Lot adds the URL to professional profiles and applications.
9. Clean up the accidental repository after Lot explicitly approves it.

## Ongoing maintenance

- [ ] Update current work, education, and internship goals whenever they change.
- [ ] Replace the resume PDF whenever the resume changes.
- [ ] Add projects only when there is enough evidence to tell a credible story.
- [ ] Check external links and the contact form every three months.
- [ ] Review the public phone number and other personal information periodically.
- [ ] Keep dependencies and the GitHub Actions workflow maintained.

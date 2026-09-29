# Lot Holmstead Personal Website - Master Plan

## 1. Purpose

Create a polished, long-term personal website that strengthens job and internship applications by showing who Lot Holmstead is, what he has accomplished, what he is learning, and what he is building.

The site should function as:

- A professional resume website
- A portfolio for projects and coding work
- A central link for LinkedIn, Handshake, GitHub, email, and resume access
- A personal introduction that includes goals, values, hobbies, and interests
- A living record that can grow throughout school and Lot's career

Primary audience:

1. Recruiters and hiring managers
2. Internship and job application reviewers
3. Professional contacts and BYU alumni
4. Potential collaborators, founders, and clients

Primary conversion goals:

1. Understand Lot's professional direction within 15 seconds
2. View relevant work and measurable results
3. Download the resume
4. Visit LinkedIn, GitHub, or Handshake
5. Contact Lot

## 2. Positioning

### Core professional story

Lot is a BYU Information Systems student working in sales development at EZsalt and building skills in product, web development, databases, and automation.

### Working headline

> Information Systems student at BYU.

### Supporting message

Lot is pursuing product management and adjacent technical-business internships. His site should plainly show what he has done, what he is doing now, and what he plans to build next.

### Tone

- Professional but conversational
- Ambitious without exaggeration
- Practical and results-oriented
- Curious, optimistic, and approachable
- Personal enough to be memorable

## 3. Visual Direction

### Overall style

- White-and-blue color system
- Natural, bright, and clean
- Modern without feeling overly futuristic
- Simple layouts with enough visual variety to avoid blandness
- Real photography as the main source of personality
- Subtle motion only where it improves the experience

### Initial palette

- White: `#FFFFFF`
- Soft page background: `#F6F9FC`
- Deep navy text: `#102A43`
- Primary blue: `#1769AA`
- Bright accent blue: `#2F80ED`
- Pale blue accent: `#DCEEFF`
- Muted slate text: `#52667A`
- Light border: `#DDE6EE`

These values are starting points and should be adjusted during visual review.

### Design principles

- Use generous whitespace and readable typography.
- Give every section one clear purpose.
- Favor strong copy and real evidence over decorative effects.
- Use rounded cards and soft shadows sparingly.
- Keep the navigation visible and straightforward.
- Ensure the mobile version feels deliberately designed.
- Meet accessible color contrast and keyboard navigation standards.

### Reference-site synthesis

Use the modern recruiter-focused structure and polished project presentation of willbennett.org, combined with the friendly tone, simplicity, and approachable personality of koleton.dev. Do not copy either site's exact layout or styling.

## 4. Recommended Site Map

### Global navigation

- Home
- About
- Now
- Resume
- Contact

LinkedIn, GitHub, and Handshake should also be accessible from the footer and prominent calls to action.

### Home

Purpose: serve as the complete professional overview without making an early-career portfolio feel artificially large.

Sections:

1. Plain introduction: name, BYU Information Systems, current work, and interests
2. Quick facts: school, work, graduation, and professional direction
3. Experience: EZsalt, BYU, and Philippines mission
4. Completed projects only
5. Short career-direction statement
6. Links to Resume, Now, GitHub, LinkedIn, Handshake, and Contact

The Home page contains the professional content that previously lived on separate Experience and Projects pages.

### About

Purpose: present the person behind the resume.

Sections:

1. Mount Timpanogos or Rocky Mountain hero background
2. Brief personal story
3. Photo gallery: snowboarding, dirt biking, Jeep/outdoors, wedding, and Philippines mission
4. Philippines mission story

Until real photos are supplied, use clearly labeled, tasteful image placeholders with recommended shot descriptions.

### Now

Purpose: honestly show momentum without presenting unfinished work as completed portfolio projects.

Sections:

1. Current BYU coursework
2. Current work at EZsalt
3. In-progress work: Athlete Recruiting Platform and Software Startup Simulation
4. Completed work: IS Career Launchpad and Starrboard
5. Skills currently being learned
6. Summer 2027 internship target
7. Long-term product and entrepreneurship goals

Only completed projects appear in the Home portfolio section. Current builds and concepts appear on Now with accurate labels.

### Resume

Purpose: make the formal application document easy to view and download.

- Embedded or linked PDF preview
- Download Resume button
- Last-updated label
- Links to LinkedIn, Handshake, GitHub, email, and phone
- Web-based experience summary for mobile visitors

### Contact

Purpose: give recruiters, hiring managers, and collaborators a low-friction way to start a conversation.

Primary message:

> Interested in working together?
>
> Whether you are hiring for a product, technology, AI, or business role—or simply want to connect—I would be glad to hear from you.

The page should include a short contact form with:

- Name
- Email
- Company or organization (optional)
- Reason for contacting Lot
- Message
- Clear Send Message button
- Accessible validation, loading, success, and error states
- Anti-spam protection

Public details:

- Email: lotstarr@gmail.com
- Phone: 435-255-2229
- LinkedIn: https://www.linkedin.com/in/lot-h/
- Handshake: https://app.joinhandshake.com/profiles/lotholmstead
- GitHub: https://github.com/Lotstarr
- Location: Provo, Utah

Use direct email and phone actions beneath the form so visitors always have an alternative. The first version should submit through a managed static-form endpoint such as Formspree because GitHub Pages cannot process server-side form code. The final provider account and endpoint must belong to Lot, deliver messages to `lotstarr@gmail.com`, restrict submissions to the production domain where supported, and include spam filtering. Never place a private API key in the public repository.

## 5. Initial Content Inventory

### Available now

- Personal Operating Context document
- Current resume PDF
- LinkedIn URL
- Handshake URL
- GitHub URL
- Email and phone number
- Reference websites
- Education, work, skills, goals, hobbies, and project background

### Needed later

- Professional headshot
- Personal activity photos
- Project screenshots
- Confirmed project repository and demo links
- Final project descriptions
- Production contact-form endpoint
- Updated resume versions over time

### Placeholder policy

- Placeholders should make the first version feel complete.
- Every placeholder must be easy to locate and replace.
- Placeholder copy should never pretend that an unfinished project is completed.
- Project status labels should be honest and visible.
- Generic stock photos should not represent Lot personally.

## 6. Technical Architecture

### Recommended foundation

Use Astro to generate a fast static website with reusable components and content files.

Reasons:

- Produces static pages suitable for GitHub Pages
- Keeps the site fast and search-engine friendly
- Allows reusable headers, footers, project cards, and layouts
- Supports structured Markdown content for projects and future updates
- Avoids the complexity of a database or server
- Can add small interactive components later without rebuilding the architecture

### Content model

Store frequently updated material separately from layout code:

- `src/data/projects.ts` - completed work, active builds, and concepts
- `src/data/profile.ts` - contact links and core profile information
- `src/pages/` - page copy and current updates
- `public/images/` - optimized headshots, project media, and personal photos
- `public/documents/` - resume PDF

### Planned page routes

- `/` - Home
- `/about/` - About Me
- `/now/` - current work, learning, builds, and goals
- `/resume/` - Resume page
- `/contact/` - Contact details

### Quality requirements

- Responsive from small phones through desktop screens
- Fast load time
- Semantic HTML
- Accessible keyboard focus and image alt text
- Respect reduced-motion preferences
- Optimized images
- No broken or placeholder links
- Social sharing metadata
- Search-engine title and description for every page
- Favicon and share image
- Custom 404 page
- Print-friendly resume view
- Working contact form with clear success and failure feedback

## 7. Domain, Hosting, and Update Workflow

### How the pieces fit together

1. The domain registrar owns and renews the address, such as `lotholmstead.com`.
2. GitHub stores the source code and change history.
3. GitHub Actions builds the Astro project after approved updates reach `main`.
4. GitHub Pages hosts the generated static files.
5. DNS records connect the purchased domain to GitHub Pages.

The domain does not need to be repurchased or reconnected whenever the site changes.

### Domain

`lotholmstead.com` has been purchased through Cloudflare. Keep automatic renewal and two-factor authentication enabled. The remaining work is to connect Cloudflare DNS to the GitHub Pages deployment after the repository is published.

### Connecting the domain

1. Publish the site to GitHub Pages first.
2. Add the custom domain in the repository's Pages settings.
3. Verify the domain with GitHub.
4. Add the exact DNS records requested by GitHub at the registrar.
5. Configure both the root domain and `www` version.
6. Enable HTTPS after DNS resolves.
7. Test the root domain, `www`, and important routes.

### Editing the live site

Normal update cycle:

1. Edit content or code locally.
2. Preview the site locally.
3. Run validation and a production build.
4. Commit the changes to Git.
5. Push or merge the changes into `main` on GitHub.
6. GitHub Actions builds and deploys the new version.
7. The same custom domain displays the updated site after deployment completes.

The previous site remains live during most of this process. Git history also makes it possible to recover an earlier version if an update causes a problem.

## 8. Implementation Phases

### Phase 1 - Foundation and design system

- Initialize the Astro project
- Add repository documentation
- Create global typography, colors, spacing, buttons, cards, and navigation
- Build responsive page shells
- Add SEO defaults and accessibility foundations

Completion test: all planned routes load with the intended white-and-blue system on desktop and mobile.

### Phase 2 - Complete content-first website

- Build every main page
- Merge professional experience and completed projects into Home
- Add a separate Now page for unfinished work and goals
- Populate content from the resume and personal context
- Add accurate project statuses
- Add photo and project placeholders
- Add resume download and profile links
- Add contact information
- Build and visually complete the contact form using a development placeholder endpoint

Completion test: the site tells a coherent story and can be used in applications even before final photography is available.

### Phase 3 - Visual assets and refinement

- Replace headshot placeholder
- Add personal activity photography
- Add project screenshots and demos
- Refine copy for clarity and confidence
- Add subtle, purposeful motion
- Test with several real visitors

Completion test: there are no visible placeholders and the site feels personal rather than templated.

### Phase 4 - GitHub and launch

- Create or connect the GitHub repository
- Add automated build and deployment
- Test the production site
- Buy and verify the domain
- Verify the existing `lotholmstead.com` domain with GitHub
- Configure DNS and HTTPS
- Connect the production contact-form endpoint, email delivery, and spam protection
- Test successful submission, validation errors, provider errors, and mobile usability
- Add the URL to resume, LinkedIn, Handshake, GitHub, and job applications

Completion test: the custom domain is secure, public, responsive, and linked from all professional profiles.

### Phase 5 - Ongoing growth

- Add projects as they become presentable
- Update current role and education details
- Replace the resume PDF when revised
- Add case studies for the strongest projects
- Review links and content every three months
- Refresh the homepage when career targets change

## 9. Recruiter-Focused Content Rules

- Lead with outcomes and evidence.
- Keep the most important information above the fold.
- Use real numbers only when they can be defended.
- Separate completed work from ideas and work in progress.
- Explain the problem, Lot's contribution, and the result for each project.
- Avoid long lists of every tool ever used.
- Show personality without burying professional qualifications.
- Keep every page skimmable.
- Provide a resume download within one click from any page.

## 10. Maintenance Checklist

### For each new project

- Add title, summary, status, date, technologies, and role
- Add a strong screenshot
- Add repository and demo links if public
- Describe the problem and result
- Confirm mobile layout and accessibility

### For each job or education update

- Update the web experience data
- Update the resume PDF if appropriate
- Review the homepage summary
- Review SEO descriptions
- Check LinkedIn and Handshake consistency

### Quarterly review

- Test every external link
- Remove stale opportunities and wording
- Confirm contact information
- Verify the resume date
- Update featured projects
- Review mobile layout and page speed

## 11. First-Version Definition of Done

The first version is ready when:

- All five main navigation destinations work
- The site is responsive and accessible
- Lot's professional direction is immediately clear
- The resume is viewable and downloadable
- LinkedIn, Handshake, GitHub, email, and phone links work
- The contact form reliably delivers a test message and displays an understandable confirmation
- Current education and work experience are accurate
- Completed projects appear on Home; unfinished work appears on Now with accurate labels
- About includes a personal narrative and image placeholders
- The white-and-blue design feels natural, polished, and distinct
- Production builds without errors
- GitHub Pages deployment is configured
- Domain setup instructions are documented

## 12. Immediate Next Steps

1. Review the simplified structure and copy.
2. Send the preferred visual template or reference.
3. Replace placeholders as photos and project materials arrive.
4. Add public GitHub repository links to completed projects.
5. Publish to GitHub Pages.
6. Connect the existing Cloudflare domain.

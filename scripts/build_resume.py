from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "documents" / "Lot-Holmstead-Resume-2026.pdf"

NAVY = HexColor("#13293A")
BLUE = HexColor("#2F6B8E")
SLATE = HexColor("#425466")
LIGHT = HexColor("#D7E1E8")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=21,
    leading=23,
    textColor=NAVY,
    alignment=TA_CENTER,
    spaceAfter=3,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.3,
    leading=10,
    textColor=SLATE,
    alignment=TA_CENTER,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.4,
    leading=11,
    textColor=BLUE,
    spaceBefore=5,
    spaceAfter=2,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.45,
    leading=10.7,
    textColor=SLATE,
)
entry_style = ParagraphStyle(
    "Entry",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=10.7,
    textColor=NAVY,
)
subentry_style = ParagraphStyle(
    "Subentry",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.25,
    leading=10,
    textColor=BLUE,
)
date_style = ParagraphStyle(
    "Date",
    parent=entry_style,
    fontSize=8.25,
    alignment=TA_RIGHT,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=1,
    spaceBefore=0.4,
    spaceAfter=0.4,
)
skills_label_style = ParagraphStyle(
    "SkillsLabel",
    parent=body_style,
    fontName="Helvetica-Bold",
    textColor=NAVY,
)


def section(title):
    return [
        Spacer(1, 1),
        Paragraph(title.upper(), section_style),
        HRFlowable(width="100%", thickness=0.7, color=LIGHT, spaceBefore=0, spaceAfter=3),
    ]


def heading(title, organization, date, location=None):
    right = date if not location else f"{date}<br/><font color='#2F6B8E'>{location}</font>"
    table = Table(
        [
            [Paragraph(title, entry_style), Paragraph(right, date_style)],
            [Paragraph(organization, subentry_style), ""],
        ],
        colWidths=[6.0 * inch, 1.3 * inch],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullets(items):
    return [Paragraph(item, bullet_style, bulletText="-") for item in items]


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.38 * inch,
        title="Lot Holmstead Resume",
        author="Lot Holmstead",
        subject="Information Systems student resume",
    )

    story = [
        Paragraph("Lot Holmstead", name_style),
        Paragraph(
            "Provo, Utah &nbsp;|&nbsp; 435-255-2229 &nbsp;|&nbsp; "
            "<link href='mailto:lotstarr@gmail.com' color='#2F6B8E'>lotstarr@gmail.com</link> &nbsp;|&nbsp; "
            "<link href='https://lotholmstead.com' color='#2F6B8E'>lotholmstead.com</link><br/>"
            "<link href='https://www.linkedin.com/in/lot-h/' color='#2F6B8E'>linkedin.com/in/lot-h</link> &nbsp;|&nbsp; "
            "<link href='https://github.com/Lotstarr' color='#2F6B8E'>github.com/Lotstarr</link>",
            contact_style,
        ),
    ]

    story += section("Summary")
    story.append(
        Paragraph(
            "Information Systems student building practical products at the intersection of AI, automation, and business. "
            "Experience improving SaaS sales operations, developing full-stack and web projects, and translating user needs into useful technology.",
            body_style,
        )
    )

    story += section("Education")
    story.append(
        heading(
            "Bachelor of Science in Information Systems",
            "Brigham Young University - Marriott School of Business",
            "Expected Apr 2028",
            "Provo, Utah",
        )
    )
    story.append(
        Paragraph(
            "GPA: 3.62 &nbsp;|&nbsp; Association for Information Systems &nbsp;|&nbsp; "
            "Electives: AI, product development, and software startups",
            body_style,
        )
    )

    story += section("Experience")
    story.append(
        KeepTogether(
            [
                heading(
                    "Teaching Assistant - IS 581: Managing a Software Startup",
                    "Brigham Young University - Marriott School of Business",
                    "Sep 2026 - Present",
                    "Provo, Utah",
                ),
                *bullets(
                    [
                        "Review student projects, help run classroom activities, provide feedback, and grade coursework focused on managing software startups.",
                        "Help develop a Software Startup Simulation that teaches validated learning through product, technical, marketing, and resource-allocation decisions.",
                    ]
                ),
            ]
        )
    )
    story.append(Spacer(1, 2))
    story.append(
        KeepTogether(
            [
                heading("Sales Development Representative", "EZsalt - SaaS startup", "Mar 2026 - Present", "Hybrid"),
                *bullets(
                    [
                        "Automated 75% of follow-up workflows in HubSpot, improving CRM consistency and reducing repetitive sales administration.",
                        "Use AI-assisted research and automation to save more than one hour daily across a three-person sales team.",
                        "Research 300+ prospect accounts weekly and generate an average of two meetings per day while sharing customer needs with the product team.",
                    ]
                ),
            ]
        )
    )

    story += section("Selected Projects")
    story.append(
        KeepTogether(
            [
                heading("Starrboard - Developer", "AI-powered academic command center", "2026"),
                *bullets(
                    [
                        "Built a full-stack dashboard that brings assignments, calendars, notes, textbooks, and course platforms into one place using AI, automation, product design, and API integrations."
                    ]
                ),
            ]
        )
    )
    story.append(
        KeepTogether(
            [
                heading("Personal Portfolio Website", "Astro website deployed at lotholmstead.com", "2026"),
                *bullets(
                    [
                        "Designed, built, and deployed a responsive personal portfolio using Astro, HTML, CSS, JavaScript, GitHub Actions, GitHub Pages, a custom domain, and a Formspree contact workflow."
                    ]
                ),
            ]
        )
    )
    story.append(
        KeepTogether(
            [
                heading("IS Career Launchpad", "Product and web development", "2026"),
                *bullets(
                    [
                        "Created a JavaScript decision-tree experience that recommends Information Systems career paths and shares relevant skills, tools, salary information, and interview preparation."
                    ]
                ),
            ]
        )
    )

    story += section("Skills")
    skills = [
        ("Technology", "JavaScript, HTML, CSS, Python, SQL, GitHub, API integrations"),
        ("AI and Automation", "Generative AI, workflow automation, AI-assisted research, prompt engineering"),
        ("Product and Business", "Product discovery, product design, business process analysis, HubSpot, sales operations"),
    ]
    skills_table = Table(
        [[Paragraph(label, skills_label_style), Paragraph(values, body_style)] for label, values in skills],
        colWidths=[1.35 * inch, 5.95 * inch],
        hAlign="LEFT",
    )
    skills_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 0.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
            ]
        )
    )
    story.append(skills_table)

    story += section("Leadership and Service")
    story.append(
        heading(
            "Full-Time Missionary",
            "The Church of Jesus Christ of Latter-day Saints",
            "Aug 2022 - Aug 2024",
            "Philippines",
        )
    )
    story.append(
        Paragraph(
            "Learned Tagalog, trained and led other missionaries, and developed cross-cultural communication, resilience, and self-direction.",
            body_style,
        )
    )

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()

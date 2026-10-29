"""Append the verified Scrum.org credential to the supplied October resume."""

from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/documents/Lot-Holmstead-Resume-2026-10-13.pdf"
OUTPUT = ROOT / "public/documents/Lot-Holmstead-Resume-2026-10-29.pdf"


def build() -> None:
    source = PdfReader(SOURCE)
    if len(source.pages) != 1:
        raise ValueError("Expected the supplied one-page resume")

    overlay_bytes = BytesIO()
    pdf = canvas.Canvas(overlay_bytes, pagesize=(612, 792))
    pdf.setFillColor(HexColor("#2F6B8E"))
    pdf.setFont("Helvetica-Bold", 9.4)
    pdf.drawString(40, 189, "CERTIFICATIONS")
    pdf.setStrokeColor(HexColor("#D7E1E8"))
    pdf.setLineWidth(0.7)
    pdf.line(40, 186, 572, 186)

    pdf.setFillColor(HexColor("#13293A"))
    pdf.setFont("Helvetica-Bold", 9.2)
    pdf.drawString(40, 172, "Professional Scrum Master I (PSM I)")
    pdf.setFont("Helvetica", 8.25)
    pdf.drawRightString(572, 172, "Oct 2026")
    pdf.setFillColor(HexColor("#2F6B8E"))
    pdf.drawString(40, 160, "Scrum.org")
    pdf.save()

    overlay_bytes.seek(0)
    page = source.pages[0]
    page.merge_page(PdfReader(overlay_bytes).pages[0])
    writer = PdfWriter()
    writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": "Lot Holmstead Resume",
            "/Author": "Lot Holmstead",
            "/Subject": "Resume with Professional Scrum Master I certification",
        }
    )
    with OUTPUT.open("wb") as stream:
        writer.write(stream)
    print(OUTPUT)


if __name__ == "__main__":
    build()

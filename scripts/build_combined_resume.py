"""Build the consolidated November 2 resume from the user-supplied edition."""

from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, DecodedStreamObject, NameObject
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/Users/lotstarr/Downloads/LH-resume11-2.pdf")
OUTPUT = ROOT / "public/documents/Lot-Holmstead-Resume-2026-11-02.pdf"


def replace_once(data: bytes, old: bytes, new: bytes, label: str) -> bytes:
    if data.count(old) != 1:
        raise ValueError(f"Could not uniquely locate {label}")
    return data.replace(old, new)


def build() -> None:
    reader = PdfReader(SOURCE)
    if len(reader.pages) != 1:
        raise ValueError("Expected the supplied one-page resume")

    page = reader.pages[0]
    contents = page[NameObject("/Contents")]
    updated_streams = ArrayObject()
    replacements_complete = False

    for reference in contents:
        data = reference.get_object().get_data()
        if b"Springville, Utah" in data:
            data = replace_once(
                data,
                b"160.12354 727 TD[(Springville, Utah | 435-255-2229 | lotstarr@gmail.com | lotholmstead.com)]TJ",
                b"169.6275 727 TD[(Orem, Utah | 435-255-2229 | lotstarr@gmail.com | lotholmstead.com)]TJ",
                "contact location",
            )
            data = replace_once(
                data,
                b"490.6895 589 TD (Mar 2026 - Present)Tj",
                b"484.8755 589 TD (Mar 2026 - Oct 2026)Tj",
                "EZsalt date",
            )
            data = replace_once(
                data,
                b"Building Athlete Websites - Founder \\(tyholmstead.com\\)",
                b"Custom Athlete Websites - Founder \\(tyholmstead.com\\)",
                "athlete project name",
            )
            replacements_complete = True

        stream = DecodedStreamObject()
        stream.set_data(data)
        updated_streams.append(stream)

    if not replacements_complete:
        raise ValueError("The supplied resume did not contain the expected update targets")
    page[NameObject("/Contents")] = updated_streams

    overlay_bytes = BytesIO()
    overlay = canvas.Canvas(overlay_bytes, pagesize=(612, 792))
    overlay.setFillColor(HexColor("#000000"))
    overlay.setFont("Helvetica-Bold", 9.5)
    overlay.drawString(40, 148, "CERTIFICATIONS")
    overlay.setStrokeColor(HexColor("#777777"))
    overlay.setLineWidth(0.6)
    overlay.line(40, 145, 572, 145)
    overlay.setFont("Helvetica-Bold", 9.2)
    overlay.drawString(40, 131, "Professional Scrum Master I (PSM I)")
    overlay.setFont("Helvetica", 8.25)
    overlay.drawRightString(572, 131, "Oct 2026")
    overlay.setFont("Helvetica", 8.25)
    overlay.drawString(40, 119, "Scrum.org")
    overlay.save()

    overlay_bytes.seek(0)
    page.merge_page(PdfReader(overlay_bytes).pages[0])

    writer = PdfWriter()
    writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": "Lot Holmstead Resume",
            "/Author": "Lot Holmstead",
            "/Subject": "Product, technology startup, and software project resume",
        }
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("wb") as stream:
        writer.write(stream)
    print(OUTPUT)


if __name__ == "__main__":
    build()

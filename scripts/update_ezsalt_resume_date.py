"""Correct the EZsalt end date in the October 29 resume without changing its layout."""

from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import DecodedStreamObject, NameObject
from reportlab.pdfbase.pdfmetrics import stringWidth


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/documents/Lot-Holmstead-Resume-2026-10-29.pdf"
OUTPUT = ROOT / "public/documents/Lot-Holmstead-Resume-2026-11-02.pdf"

OLD = b"BT 1 0 0 1 490.6895 589 Tm (Mar 2026 - Present) Tj T* ET"
NEW_TEXT = "Mar 2026 - Oct 2026"
NEW_X = 572 - stringWidth(NEW_TEXT, "Helvetica", 9.5)
NEW = f"BT 1 0 0 1 {NEW_X:.4f} 589 Tm ({NEW_TEXT}) Tj T* ET".encode("ascii")


def build() -> None:
    reader = PdfReader(SOURCE)
    if len(reader.pages) != 1:
        raise ValueError("Expected a one-page resume")
    page = reader.pages[0]
    content = page.get_contents().get_data()
    if content.count(OLD) != 1:
        raise ValueError("Could not uniquely locate the EZsalt date")

    stream = DecodedStreamObject()
    stream.set_data(content.replace(OLD, NEW))
    page[NameObject("/Contents")] = stream

    writer = PdfWriter()
    writer.add_page(page)
    writer.add_metadata({
        "/Title": "Lot Holmstead Resume",
        "/Author": "Lot Holmstead",
        "/Subject": "Resume with Professional Scrum Master I certification and EZsalt end date",
    })
    with OUTPUT.open("wb") as output:
        writer.write(output)
    print(OUTPUT)


if __name__ == "__main__":
    build()

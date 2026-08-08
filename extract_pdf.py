import pdfplumber
import sys

print("Opening PDF...", flush=True)
with pdfplumber.open("Akshaya Residency Brochure.pdf") as pdf:
    print(f"Total pages: {len(pdf.pages)}", flush=True)
    for i, page in enumerate(pdf.pages):
        print(f"\n--- PAGE {i+1} ---", flush=True)
        text = page.extract_text()
        if text:
            print(text, flush=True)
        else:
            print("[No text found on this page]", flush=True)
        imgs = page.images
        print(f"Images on page: {len(imgs)}", flush=True)
print("Done.", flush=True)

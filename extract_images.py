import pdfplumber
import os

os.makedirs("public/akshaya", exist_ok=True)

with pdfplumber.open("Akshaya Residency Brochure.pdf") as pdf:
    count = 0
    for i, page in enumerate(pdf.pages):
        for j, img in enumerate(page.images):
            print(f"Page {i+1}, Image {j+1}: x0={img['x0']:.0f}, y0={img['y0']:.0f}, width={img['width']:.0f}, height={img['height']:.0f}, name={img.get('name','')}")
            count += 1
    print(f"\nTotal images: {count}")

    # Extract page renders as images
    for i, page in enumerate(pdf.pages):
        im = page.to_image(resolution=150)
        path = f"public/akshaya/page_{i+1}.jpg"
        im.original.convert("RGB").save(path, format="JPEG", quality=85)
        print(f"Saved: {path}")

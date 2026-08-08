import sys

pkgs = ['fitz', 'pypdf', 'PyPDF2', 'pdfplumber', 'pdf2image', 'PIL', 'pypdfium2']
for pkg in pkgs:
    try:
        __import__(pkg)
        print(f'{pkg}: available')
    except ImportError:
        print(f'{pkg}: NOT available')

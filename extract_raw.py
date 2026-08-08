import re

with open("Akshaya Residency Brochure.pdf", "rb") as f:
    data = f.read()

# Find all readable strings of length > 4
strings = re.findall(rb'[\x20-\x7E]{5,}', data)
seen = set()
for s in strings:
    try:
        text = s.decode('utf-8', errors='ignore').strip()
        if text and text not in seen and not text.startswith('/') and not text.startswith('stream'):
            seen.add(text)
            print(text)
    except:
        pass

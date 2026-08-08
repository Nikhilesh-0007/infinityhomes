from PIL import Image
import os
for i in range(1, 9):
    path = f'public/akshaya/page_{i}.jpg'
    img = Image.open(path)
    size = os.path.getsize(path)
    print(f'page_{i}.jpg: {img.size[0]}x{img.size[1]}px, {size//1024}KB')

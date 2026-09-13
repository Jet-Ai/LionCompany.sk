from PIL import Image
from pathlib import Path
root=Path(r'C:/Users/Admin/Documents/ChatGPT/Lion Company')
out=root/'website/public/media'
im=Image.open(root/'WhatsApp Image 2026-09-13 at 10.10.45.jpeg'); im.crop((0,0,1080,700)).save(out/'hero.jpg',quality=90)
for name,target in [('WhatsApp Image 2026-09-13 at 10.31.29 (1).jpeg','window.jpg'),('WhatsApp Image 2026-09-13 at 10.34.25 (3).jpeg','door.jpg'),('WhatsApp Image 2026-09-13 at 10.34.25 (4).jpeg','hardware.jpg')]:
 im=Image.open(root/name);im.thumbnail((1400,1400));im.save(out/target,quality=85)

from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps
from pathlib import Path

src = Path(r"F:\项目投标\个人网站\new portfoilo\web\public\images\projects\ai-agent\_src")
out = Path(r"F:\项目投标\个人网站\new portfoilo\web\public\images\projects\ai-agent\fig-hcd-problems.png")

panels = [
    (src / "03-meeting.jpg", "亲和图依赖人力整理", "Workshop synthesis"),
    (src / "02-sticky-cork.jpg", "流程映射繁琐易错位", "Manual journey mapping"),
    (src / "12-jos.jpg", "痛点难结构化沉淀", "Fragmented pain points"),
    (src / "09-team-wall.jpg", "访谈记录难实时协作", "Live interview gaps"),
]

# Same outer size as before (~1482x1082), but edge-to-edge so page rounded-2xl clips photos
cell_w, cell_h = 736, 540
gap = 6
pad = 0
cols, rows = 2, 2
W = pad * 2 + cols * cell_w + (cols - 1) * gap
H = pad * 2 + rows * cell_h + (rows - 1) * gap
canvas = Image.new("L", (W, H), 28)

font_candidates = [
    r"C:\Windows\Fonts\msyhbd.ttc",
    r"C:\Windows\Fonts\msyh.ttc",
    r"C:\Windows\Fonts\simhei.ttf",
]
font_path = next((p for p in font_candidates if Path(p).exists()), None)
title_font = ImageFont.truetype(font_path, 28) if font_path else ImageFont.load_default()
sub_font = ImageFont.truetype(font_path, 16) if font_path else ImageFont.load_default()


def to_bw_crop(im: Image.Image, tw: int, th: int, zoom: float = 1.22) -> Image.Image:
    """Center-crop with zoom > 1 so subject fills the cell more."""
    im = ImageOps.exif_transpose(im).convert("RGB")
    sw, sh = im.size
    target_ratio = tw / th
    # First fit cover, then zoom in
    ratio = sw / sh
    if ratio > target_ratio:
        nw = int(sh * target_ratio)
        left = (sw - nw) // 2
        im = im.crop((left, 0, left + nw, sh))
    else:
        nh = int(sw / target_ratio)
        top = (sh - nh) // 2
        im = im.crop((0, top, sw, top + nh))
    # Zoom: crop center fraction
    cw, ch = im.size
    zw, zh = int(cw / zoom), int(ch / zoom)
    left = (cw - zw) // 2
    top = (ch - zh) // 2
    im = im.crop((left, top, left + zw, top + zh))
    im = im.resize((tw, th), Image.Resampling.LANCZOS)
    g = ImageOps.grayscale(im)
    g = ImageEnhance.Contrast(g).enhance(1.3)
    g = ImageEnhance.Brightness(g).enhance(0.95)
    return g


for i, (path, zh, en) in enumerate(panels):
    r, c = divmod(i, cols)
    x = pad + c * (cell_w + gap)
    y = pad + r * (cell_h + gap)
    g = to_bw_crop(Image.open(path), cell_w, cell_h, zoom=1.22)

    overlay = Image.new("L", (cell_w, cell_h), 0)
    od = ImageDraw.Draw(overlay)
    for yy in range(cell_h - 100, cell_h):
        alpha = int(200 * ((yy - (cell_h - 100)) / 100))
        od.line([(0, yy), (cell_w, yy)], fill=min(255, alpha))
    g = Image.composite(Image.new("L", g.size, 0), g, overlay)

    d = ImageDraw.Draw(g)
    d.rectangle([0, 0, 4, cell_h], fill=230)
    d.text((16, 14), f"0{i + 1}", font=sub_font, fill=220)
    d.text((16, cell_h - 68), zh, font=title_font, fill=250)
    d.text((16, cell_h - 34), en, font=sub_font, fill=190)

    canvas.paste(g, (x, y))

rgb = Image.merge("RGB", (canvas, canvas, canvas))
# Match previous display footprint closely
rgb = rgb.resize((1482, 1082), Image.Resampling.LANCZOS)
rgb.save(out, "PNG", optimize=True)
print("saved", out, rgb.size, out.stat().st_size)

# cleanup sources from public
import shutil
shutil.rmtree(src, ignore_errors=True)

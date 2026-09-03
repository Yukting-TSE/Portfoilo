import html
import json
import pathlib
import re

root = pathlib.Path(r"F:\项目投标\个人网站\new portfoilo")
html_path = root / "媒体与信息传达设计" / "森林剧场-Forest Theatre.html"
raw = html_path.read_text(encoding="utf-8", errors="ignore")

# Decode common escapes
raw2 = html.unescape(raw)

# Find Chinese / project-ish strings
cands = re.findall(r"[\u4e00-\u9fff][^\\\"<>\n]{8,400}", raw2)
seen = set()
out_lines = []
for c in cands:
    t = c.strip()
    if t in seen:
        continue
    if "必须启用" in t or "JavaScript" in t or "免费试用" in t:
        continue
    if len(t) < 10:
        continue
    seen.add(t)
    out_lines.append(t)

out = root / "web" / "scripts" / "forest-theatre-zh.txt"
out.write_text("\n\n".join(out_lines), encoding="utf-8")
print("zh candidates", len(out_lines), "->", out)
for t in out_lines[:100]:
    print("---")
    print(t[:300])

# file.notion.so media
notion_media = []
for m in re.finditer(r"https://file\.notion\.so/[^\"'\\s<>]+", raw2):
    u = m.group(0).replace("\\u0026", "&").replace("&amp;", "&")
    if u not in notion_media:
        notion_media.append(u)
print("\nnotion file urls", len(notion_media))
for u in notion_media[:40]:
    print(u[:240])

# ordered local image appearance
local = re.findall(
    r"森林剧场-Forest Theatre_files/(Forest_Theatre_[^\"'\\s<>]+|image(?:\(\d+\))?\.png|12\.png)",
    raw,
)
print("\nordered local media")
seen2 = []
for x in local:
    if x not in seen2:
        seen2.append(x)
        print(x)

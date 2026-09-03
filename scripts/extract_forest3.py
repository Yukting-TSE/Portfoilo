import html
import pathlib
import re

html_path = pathlib.Path(
    r"F:\项目投标\个人网站\new portfoilo\媒体与信息传达设计\森林剧场-Forest Theatre.html"
)
raw = html.unescape(html_path.read_text(encoding="utf-8", errors="ignore"))

# Pull nearby context around known Chinese paragraphs for structure
markers = [
    "自然空间与社会空间",
    "演出灵感",
    "跨媒体实验剧场",
    "本项目旨在",
    "借助新媒体",
    "第一阶段",
    "第二阶段",
    "第三阶段",
    "未来阶段",
    "Co-designer",
    "Keyword",
    "Time",
    "Tutor",
    "Role",
]
for m in markers:
    i = raw.find(m)
    print("\n====", m, "idx", i)
    if i >= 0:
        snip = raw[max(0, i - 120) : i + 220]
        snip = re.sub(r"<[^>]+>", " ", snip)
        snip = re.sub(r"\s+", " ", snip)
        print(snip[:400])

# full notion mp4 url
for m in re.finditer(r"https://file\.notion\.so/[^\s\"']+mp4[^\s\"']*", raw):
    print("\nMP4", m.group(0)[:300])

# Yukting Tse Portfolio (web)

React + TypeScript + Vite + Tailwind 实现的个人作品集站点。

视觉与交互参考 hellohello.is 的编辑式语言；**内容与三栏作品布局保持原有结构**。

## Run

```bash
cd web
npm install
npm run dev
```

浏览器打开终端里显示的地址，一般是：

`http://localhost:5173/`

若端口被占用，Vite 会自动换到下一个可用端口（如 5174）。

## Replace content

| What | File |
|------|------|
| Name, bio, email, hero copy, video | `src/data/profile.ts` |
| Projects (Challenge / Approach / …) | `src/data/projects.ts` |
| Image paths | `src/data/projects.ts` → `images: [...]` or `src/data/assets.ts` |

## Replace images

Put files under:

```text
public/images/projects/
```

Then update each project's `images` array in `src/data/projects.ts` to point to those paths.

## Layout (unchanged)

1. Hero — mouse-scrub video + typewriter + pills  
2. Works — sticky category nav | project text | project images  
3. Footer / contact overlay  

## TODOs

- Swap placeholder SVGs for real project images  
- Wire `submitContactForm` to a real backend  
- Optional project detail routes when needed  

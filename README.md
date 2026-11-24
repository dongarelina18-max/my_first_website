# Lina Dongare - Portfolio (Next.js + TypeScript + Tailwind + Lucide)

## Run locally
1. Install Node.js 18.17+ (nodejs.org).
2. In this folder: `npm install` then `npm run dev`
3. Open http://localhost:3000

## Edit content
Everything lives in `lib/content.ts`. Search for `PLACEHOLDER` and replace with real details
(photo, GitHub, LinkedIn, projects, experience). Put a photo in `public/` and set `photo: "/your-photo.jpg"`.
To change the resume, replace `public/Lina_Dongare_Resume.docx` (a PDF works too; update `resume` in content.ts).

## Deploy to Vercel
1. Create a GitHub account and a new repository, then upload this folder
   (`git init && git add . && git commit -m "portfolio" && git remote add origin <url> && git push -u origin main`).
2. Go to vercel.com, sign in with GitHub, click "Add New → Project", import the repo.
3. Keep the defaults (Next.js is auto-detected) and click Deploy. You get a free `.vercel.app` link.
4. Every future `git push` redeploys automatically.

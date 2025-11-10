<h1 align="center">use-hook-scratch ⚡️</h1>

<p align="center">
	<a href="https://vitejs.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white&style=for-the-badge"></a>
	<a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=000&style=for-the-badge"></a>
	<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white&style=for-the-badge"></a>
</p>
<p align="center">Tiny experimental Vite + React + TypeScript demo exploring a Suspense resource pattern.</p>

---

## 🚀 Quick start

```powershell
npm install
npm run dev
```

Open http://localhost:5173.

## 🧩 What this repo is about

- 🧪 A recreated/polyfilled `use()` hook integrating with React `<Suspense>` by throwing pending promises (`src/hooks/use.ts`).
- 🧠 Simple in-memory cache to avoid recreating pending promises (`src/App.tsx`).

🗂️ Files to peek at

- 🧵 `src/hooks/use.ts` — recreated/polyfilled `use()`
- 🧩 `src/App.tsx` — demo UI + cache
- 🏁 `src/main.tsx` — app bootstrap

## ⚠️ Quick note

React 19 ships an official `use()` API for reading promises during render (Suspense-aware). Prefer React’s built-in `use()` over this custom demo — `src/hooks/use.ts` is for learning only. If you need caching/invalidation beyond Suspense, use a library later. Note: React’s `use()` isn’t just like any hook, we can use it in loops/conditions; pair it with `<Suspense>` and an `ErrorBoundary` for the best UX. See: https://react.dev/reference/react/use

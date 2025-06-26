# bogdan-matei-website

A modern frontend project built with:

- ⚛️ React + TypeScript
- ⚡ Vite
- 💨 Tailwind CSS
- 🧩 shadcn/ui component system
- 📦 pnpm (via Devbox)
- 🐧 Devbox-managed Node.js environment

---

## 🧰 Local Development Setup

### 1. Devbox Setup (Node.js + pnpm)

Make sure you have [Devbox installed](https://www.jetpack.io/devbox/docs/install). Then run:

```bash
devbox init
devbox add nodejs@22.16.1 pnpm@10.12.3
```

To enter the shell with Node and pnpm:

```bash
devbox shell
```

---

## 🏗️ Project Initialization

### Create the app using Vite + React + TypeScript

```bash
pnpm create vite frontend --template react-ts
cd frontend
pnpm install
```

---

## 🎨 Tailwind CSS Setup

```bash
pnpm add -D tailwindcss @tailwindcss/vite postcss autoprefixer
```

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
```

Update `src/index.css`:

```css
@import "tailwindcss";
```

---

## 💅 shadcn/ui Component Setup

### 1. Initialize shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

Choose:
- App directory: `src`
- CSS framework: `Tailwind CSS`
- Variant strategy: `tailwind-variants`

### 2. Add a component (e.g. Button)

```bash
pnpm dlx shadcn-ui@latest add button
```

This creates: `src/components/ui/button.tsx`

### 3. Use the Button

In `src/App.tsx`:

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button className="text-lg">Click me</Button>
    </div>
  )
}
```

Make sure your `vite.config.ts` and `tsconfig.json` have the `@` alias:

```ts
// vite.config.ts
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## 🧩 Lucide Icons Setup

```bash
pnpm add lucide-react
```

### Example usage in a Button:

```tsx
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function IconButton() {
  return (
    <Button size="icon" className="w-12 h-12 flex items-center justify-center">
      <Menu className="size-6" />
    </Button>
  )
}
```

Use `size-*` instead of `w-* h-*` to avoid Tailwind style overrides from shadcn.

---

## 🚀 Start the Dev Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## ✅ Available Scripts

- `pnpm dev` — start dev server
- `pnpm build` — build for production
- `pnpm preview` — preview production build

---

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/ui/      # shadcn components
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── index.css
```

---

## 📌 Notes

- No PostCSS config needed — handled by `@tailwindcss/vite`
- Uses the new Tailwind v4 setup via native Vite plugin
- Component system: [shadcn/ui](https://ui.shadcn.com)

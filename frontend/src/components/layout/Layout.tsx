import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-[1980px] mx-auto px-2 md:px-4 lg:px-6 xl:px-10 py-2 bg-gray-100 gap-2 sm:gap-4 xl:gap-8">
      <header className="bg-amber-100">
        <h1 className="text-2xl font-semibold">My Website</h1>
      </header>

      <main className="flex-1 bg-emerald-200">{children}</main>

      <footer className="flex justify-end text-sm text-gray-500 bg-red-100">
        © {new Date().getFullYear()} Bogdan Matei WebArt
      </footer>
    </div>
  )
}

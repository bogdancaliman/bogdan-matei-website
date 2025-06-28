import type { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import { DoodleOverlay } from "../custom/DoodleOverlay";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-[1980px] mx-auto px-2 md:px-4 lg:px-6 xl:px-10 py-2 bg-gray-100 gap-2 sm:gap-4 xl:gap-8">
      <DoodleOverlay />
      <div className="flex-1 grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[3fr_5fr] gap-2 sm:gap-4 xl:gap-8">
        <div className="sticky top-0 self-start z-10">
          <header className="w-full bg-amber-100 sticky">
            <Navbar />
          </header>
        </div>

        <main className="h-full w-full bg-emerald-200">{children}</main>
      </div>
      <footer className="flex justify-end text-sm text-gray-500 bg-red-100">
        © {new Date().getFullYear()} Bogdan Matei WebArt
      </footer>
    </div>
  );
}

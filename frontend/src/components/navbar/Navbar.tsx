import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-row lg:flex-col items-center lg:items-baseline justify-between lg:justify-start lg:gap-8 py-4 border-b h-full">
      <div className="text-xl font-bold">MySite</div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex flex-col gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-16 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-base font-medium text-gray-800 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

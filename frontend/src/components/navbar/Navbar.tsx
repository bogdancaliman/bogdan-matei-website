import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { Link } from "react-router"

const navLinks = [
  { label: "About", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between py-4 border-b">
      <div className="text-xl font-bold">MySite</div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" >
              <Menu className="size-6"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
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
  )
}

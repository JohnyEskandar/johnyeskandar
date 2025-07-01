"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
//   { name: "Spotify", href: "/spotify" },
//   { name: "Netflix", href: "/netflix" },
//   { name: "Vlog", href: "/vlog" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-poppins font-bold text-xl text-slate-50 hover:text-indigo-400 transition-colors"
          >
            Johny Eskandar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-indigo-400 ${
                  pathname === item.href ? "text-indigo-400" : "text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-slate-50 hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md font-medium transition-colors hover:text-indigo-400 hover:bg-slate-800 ${
                    pathname === item.href ? "text-indigo-400 bg-slate-800" : "text-slate-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    // <nav className="bg-[#761180] p-4 fixed top-0 left-0 w-full shadow-md z-50 text-white">
     <nav className="bg-gradient-to-r from-[#5A0C57] via-[#7A4B7A] to-[#9A94E0] p-4 fixed top-0 left-0 w-full shadow-md z-50 text-white backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => router.push("/")}>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          {/* Branding */}
          <div className="flex flex-col" >
            <h1 className="text-xl font-bold">Semicolons & Stories</h1>
            <h3 className="text-sm italic mt-1">every line has a story to tell</h3>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/Blog" className="hover:text-[#E6DBE9]">Blog</Link>
          <Link href="/International" className="hover:text-[#E6DBE9]">Everything International</Link>
          <Link href="/Projects" className="hover:text-[#E6DBE9]">Projects</Link>
          <Link href="/Events" className="hover:text-[#E6DBE9]">Conferences/Events</Link>
          <Link href="/AboutMe" className="hover:text-[#E6DBE9]">About Me</Link>
          <Link href="/ContactMe" className="hover:text-[#E6DBE9]">Contact Me</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium bg-[#761180] pb-4">
          <Link href="/Blog" onClick={closeMenu} className="block hover:text-[#E6DBE9]">Blog</Link>
          <Link href="/International" onClick={closeMenu} className="block hover:text-[#E6DBE9]">Everything International</Link>
          <Link href="/Projects" onClick={closeMenu} className="block hover:text-[#E6DBE9]">Projects</Link>
          <Link href="/Events" onClick={closeMenu} className="block hover:text-[#E6DBE9]">Conferences/Events</Link>
          <Link href="/AboutMe" onClick={closeMenu} className="block hover:text-[#E6DBE9]">About Me</Link>
          <Link href="/ContactMe" onClick={closeMenu} className="block hover:text-[#E6DBE9]">Contact Me</Link>
        </div>
      )}
    </nav>
  );
}


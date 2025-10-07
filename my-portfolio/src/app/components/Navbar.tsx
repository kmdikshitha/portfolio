"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show navbar when at the very top of the page
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-transparent p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
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
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/Blog" className="hover:text-blue-700">Blog</Link>
          {/* <Link href="/International" className="hover:text-blue-700">Everything International</Link> */}
          <Link href="/Projects" className="hover:text-blue-700">Projects</Link>
          <Link href="/Events" className="hover:text-blue-700">Conferences/Events</Link>
          <Link href="/AboutMe" className="hover:text-blue-700">About Me</Link>
          <Link href="personalphilosophy" className="hover:text-blue-700">Values</Link>
          {/* <Link href="/ContactMe" className="hover:text-blue-700">Contact Me</Link> */}
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
        <div className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium bg-white pb-4 border-t border-blue-200">
          <Link href="/Blog" onClick={closeMenu} className="block hover:text-blue-700">Blog</Link>
          {/* <Link href="/International" onClick={closeMenu} className="block hover:text-blue-700">Everything International</Link> */}
          <Link href="/Projects" onClick={closeMenu} className="block hover:text-blue-700">Projects</Link>
          <Link href="/Events" onClick={closeMenu} className="block hover:text-blue-700">Conferences/Events</Link>
          <Link href="/AboutMe" onClick={closeMenu} className="block hover:text-blue-700">About Me</Link>
          <Link href="/personalphilosophy" onClick={closeMenu} className="block hover:text-blue-700">Values</Link>
          {/* <Link href="/ContactMe" onClick={closeMenu} className="block hover:text-blue-700">Contact Me</Link> */}
        </div>
      )}
   </nav>
  );
}


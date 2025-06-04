"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#761180] text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dikshitha</p>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/dikshitha-km/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/kmdikshitha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="/AboutMe" className="hover:underline">About</Link>
          <Link href="/Projects" className="hover:underline">Projects</Link>
          <Link href="/ContactMe" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

// components/Navbar.tsx
"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-[#761180] p-4 flex justify-between items-center text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex flex-col">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}>
          Semicolons & Stories
        </h1>
        <h3 className="text-sm italic mt-1">every line has a story to tell</h3>
      </div>

      <div className="flex space-x-6 text-white">
        <Link href="/Blog" className="hover:text-[#E6DBE9]">Blog</Link>
        <Link href="/International" className="hover:text-[#E6DBE9]">Everything International</Link>
        <Link href="/Projects" className="hover:text-[#E6DBE9]">Projects</Link>
        <Link href="/Events" className="hover:text-[#E6DBE9]">Conferences/Events</Link>
        <Link href="/AboutMe" className="hover:text-[#E6DBE9]">About Me</Link>
        <Link href="/ContactMe" className="hover:text-[#E6DBE9]">Contact Me</Link>
      </div>
    </nav>
  );
}

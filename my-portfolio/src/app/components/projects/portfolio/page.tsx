'useclient'
import React from 'react';

export default function PersonalPortfolio() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Portfolio – My Digital Space</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 mt-8">Why I Started This Project</h2>
        <p className="mb-2">This one’s the most personal project of them all. Everyone deserves their own little corner on the internet, right?</p>
        <p className="mb-2">What started out as just a simple, one-page resume site slowly turned into something bigger—my online identity, my Ikigai, built through code.</p>
        <p>This was also my opportunity to step out of my backend comfort zone and explore frontend technologies like Next.js and TypeScript, both of which were new to me.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 mt-8">Project Overview</h2>
        <p className="mb-2">The goal was clear: build a space that reflects me—my story, my skills, and my journey. It’s not flashy, but it’s honest.</p>
        <ul className="list-disc pl-6">
          <li><strong>About Me</strong> – Quick intro and story behind my journey.</li>
          <li><strong>Projects</strong> – A curated list of meaningful work I’ve done.</li>
          <li><strong>Blog</strong> – Corporate break down 101.</li>
          <li><strong>Everything International</strong> – Unique experiences one at a time.</li>
          <li><strong>Conferences/Events</strong> – Tab on all professioanl events.</li>
        </ul>
        <p className="mt-2">All of this was built from scratch, with thoughtful design using Tailwind CSS, and deployed with performance and responsiveness in mind.</p>
      </section>

        <p className="text-blue-600 mt-4 underline">
          GitHub: <a href="https://github.com/kmdikshitha/portfolio" target="_blank" rel="noopener noreferrer">Project Landing Page</a>
        </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 mt-8">Technology Stack</h2>
        <ul className="list-disc pl-6">
          <li><strong>Frontend:</strong> Next.js, TypeScript</li>
          <li><strong>Styling:</strong> Tailwind CSS</li>
          <li><strong>Deployment:</strong> Vercel</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">What I Learned</h2>
        <ul className="list-disc pl-6">
          <li>Thought like a frontend developer and enjoyed the creative process.</li>
          <li>Worked with Next.js routing, layouts, and server/client components.</li>
          <li>Practiced modular design using import/export patterns.</li>
          <li>Applied Tailwind CSS for responsive, clean UI.</li>
          <li>Learned basic SEO, accessibility, and Vercel deployment configurations.</li>
        </ul>
      </section>
    </div>
  );
}

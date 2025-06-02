// ProjectPage.jsx
import React from 'react';
import  Link  from 'next/link';

const projects = [
  {
    title: 'Tour Management System – Crimson Compass',
    techStack: 'Java,Spring Boot, Next.js, PostgreSQL, MySQL, Azure',
    repo: 'https://github.com/kmdikshitha/tms-project',
    description: 'Built a microservices-based trip-planning web app with shareable itineraries using Spring Boot (Java), Next.js, and OAuth authentication; deployed on Azure.',
    detailsRoute: '/components/projects/tms'
  },
  {
    title: 'Research Collaboration Portal – CollabHub',
    techStack: 'Python(Flask), HTML, CSS, SQLAlchemy(ORM)',
    repo: 'https://github.com/kmdikshitha/CollabHub',
    description:'Developed a Flask-based role-access portal enabling researchers to post, filter, and collaborate on projects; implemented SQLAlchemy ORM and session management.',
    detailsRoute: '/components/projects/collabhub'
  },
  {
    title: 'Hospital Appointment System - Medislot',
    techStack: 'Python(Flask), HTML, CSS, SQLAlchemy(ORM), Pandas, Render',
    repo: 'https://github.com/kmdikshitha/hospital_booking',
    description:'Engineered a modular monolith in Flask for neighborhood doctor appointment booking; integrated pandas for raw data transformation and CRUD with SQLAlchemy ORM.',
    detailsRoute: '/components/projects/medislot'
  },
  {
    title: 'Google Itinerary Page – Product Roadmap',
    techStack: 'Figma',
    repo: 'https://github.com/kmdikshitha/GoogleTravel_Itinerary_Proposal',
    description:'Created a full product spec for a Google Travel Itinerary feature including MVP, wireframes (Figma), competitor analysis, HEART metrics, and stakeholder alignment.',
    detailsRoute: '/components/projects/itinerary'
  },
    {
    title: 'Personal Website',
    techStack: 'Next.js, Vercel',
    repo: 'https://github.com/kmdikshitha/portfolio',
    description:'Designed and developed a personal portfolio in Next.js with TypeScript and Tailwind CSS; implemented reusable components, dynamic routing, and deployed via Vercel.',
    detailsRoute: '/components/projects/portfolio'
  },
];

export default function ProjectPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-[#761180]">
      <h2 className="text-3xl font-bold mb-4">Projects: Where Curiosity Meets Code</h2>
      <p className="text-lg leading-relaxed mb-6">
        Projects, for me, are where ideas turn into something real. They’re not just lines of code or checkboxes on a resume—they’re how I explore, learn, 
        and try to solve problems that actually matter. Sometimes I start a project because I notice a gap, 
        a real issue that could use a better solution. Other times, it's simply because I’m curious 
        and want to get hands-on with a new tool, framework, or concept. Either way, each one teaches 
        me something new—about tech, about users, and even about how I think as a builder. 
        These projects represent my learning journey and my effort to make something useful, thoughtful, 
        and a little bit better than before.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Because at the end of the day, the best projects aren't just about
        showcasing what you can build—they're about demonstrating why you chose to build it.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Tech Stack: {project.techStack}</p>
              <p className="text-sm text-gray-600 mb-4">Description: {project.description}</p>
            </div>
            <div className="mt-auto flex justify-between items-center">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                View Code
              </a>
              <Link href={project.detailsRoute} className="bg-[#761180] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

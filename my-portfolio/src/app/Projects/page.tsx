// ProjectPage.jsx
import React from 'react';
import  Link  from 'next/link';
// import { ProjectCard } from "../components/projectCard";
import Image from 'next/image';

const projects = [
  {
    title: 'Tour Management System – Crimson Compass',
    techStack: 'Java,Spring Boot, Next.js, PostgreSQL, MySQL, Azure',
    repo: 'https://github.com/kmdikshitha/TMS',
    thumbnail: '/thumbnail/tms.png',
    description: 'Built a microservices-based trip-planning web app with shareable itineraries using Spring Boot (Java), Next.js, and OAuth authentication; deployed on Azure.',
    detailsRoute: '/components/projects/tms'
  },
  {
    title: 'Research Collaboration Portal – CollabHub',
    techStack: 'Python(Flask), HTML, CSS, SQLAlchemy(ORM)',
    repo: 'https://github.com/kmdikshitha/CollabHub',
    thumbnail: '/thumbnail/collabhub.png',
    description:'Developed a Flask-based role-access portal enabling researchers to post, filter, and collaborate on projects; implemented SQLAlchemy ORM and session management.',
    detailsRoute: '/components/projects/collabhub'
  },
  {
    title: 'Hospital Appointment System - Medislot',
    techStack: 'Python(Flask), HTML, CSS, SQLAlchemy(ORM), Pandas, Render',
    repo: 'https://github.com/kmdikshitha/hospital_booking',
    thumbnail: '/thumbnail/medislot.png',
    description:'Engineered a modular monolith in Flask for neighborhood doctor appointment booking; integrated pandas for raw data transformation and CRUD with SQLAlchemy ORM.',
    detailsRoute: '/components/projects/medislot'
  },
  {
    title: 'Google Itinerary Page – Product Roadmap',
    techStack: 'Figma',
    repo: 'https://github.com/kmdikshitha/GoogleTravel_Itinerary_Proposal',
    thumbnail: '/thumbnail/google.png',
    description:'Created a full product spec for a Google Travel Itinerary feature including MVP, wireframes (Figma), competitor analysis, HEART metrics, and stakeholder alignment.',
    detailsRoute: '/components/projects/itinerary'
  },
    {
    title: 'Personal Website - Semicolon & Stories' ,
    techStack: 'Next.js, Vercel',
    repo: 'https://github.com/kmdikshitha/portfolio',
    thumbnail: '/thumbnail/portfolio.png',
    description:'Designed and developed a personal portfolio in Next.js with TypeScript and Tailwind CSS; implemented reusable components, dynamic routing, and deployed via Vercel.',
    detailsRoute: '/components/projects/portfolio'
  },
];

export default function ProjectPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">Projects</h1>
      {/* <p className="text-lg leading-relaxed mb-6">
        Projects, for me, are where ideas turn into something real. They&apos;re not just lines of code or checkboxes on a resume—they&apos;re how I explore, learn,
        and try to solve problems that actually matter. These projects represent my learning journey and my effort to make something useful, thoughtful,
        and a little bit better than before.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Because at the end of the day, the best projects aren&apos;t just about
        showcasing what you can build—they&apos;re about demonstrating why you chose to build it.
      </p> */}


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-blue-200">
            <div>
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover"
                />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-4">Tech Stack: {project.techStack}</p>
              <p className="text-sm text-gray-700 mb-4">Description: {project.description}</p>
            </div>
            <div className="mt-auto flex justify-between items-center">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                View Code
              </a>
              <Link href={project.detailsRoute} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <span className="text-white">Details →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    // <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
    //   {projects.map((p, i) => (
    //     <ProjectCard key={i} {...p} />
    //   ))}
    // </div>
  );
}

'useclient'
import React from 'react'
export default function MediSlot() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">MediSlot – A Neighborhood-Friendly Hospital Booking System</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-8">Why I Started This Project</h2>
        <p className="text-gray-700 mt-4">
          Unlike my other projects that started with a real-world problem, MediSlot was born from curiosity—specifically, the desire to learn how to convert raw data into a structured database model using ORM. It was part of my Advanced Database Technology course, and I wanted to go beyond theoretical assignments and build something real.
        </p>
        <p className="text-gray-700 mt-2">
          But along the way, the concept evolved. Ever moved to a new city and needed a doctor? Most of us just rely on Google ratings or random suggestions from neighbors. What if there was a simple way to discover doctors and book appointments based on your location? That’s how MediSlot shaped up—a user-friendly hospital and appointment management system, designed with the neighborhood in mind.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">Project Overview</h2>
        <p className="text-gray-700 mt-4">MediSlot is a modular monolith built with Flask that supports two user roles—Admin and User:</p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
          <li><strong>Admin Portal:</strong> Add/Edit/Delete: Hospitals, doctors, locations; Manage appointments including cancellations</li>
          <li><strong>User Portal:</strong> View nearby hospitals and doctors; Book and manage appointments by area</li>
          <li><strong>Data Ingestion:</strong> Used pandas to load CSV-based raw data and convert it into structured ORM models using SQLAlchemy</li>
        </ul>
        <p className="text-blue-600 mt-4 underline">
          GitHub: <a href="https://github.com/kmdikshitha/hospital_booking" target="_blank" rel="noopener noreferrer">Project Landing Page</a>
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">Technology Stack</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
          <li><strong>Backend:</strong> Python (Flask)</li>
          <li><strong>Frontend:</strong> HTML, CSS</li>
          <li><strong>Database:</strong> SQLAlchemy (ORM)</li>
          <li><strong>Deployment:</strong> Render (free tier)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">What I Learned</h2>
        <ol className="list-decimal pl-6 mt-2 text-gray-700 space-y-4">
          <li>
            <strong>Raw Data to ORM Mapping:</strong> This was my first deep dive into taking unstructured .csv data and transforming it into normalized relational tables. I created a custom <code>loader.py</code> script using Pandas to clean and load the data into SQLAlchemy models, managing foreign key relationships and constraints manually.
          </li>
          <li>
            <strong>Database-First Thinking:</strong> Rather than coding routes first, I designed the database schema upfront, focusing on relationships between hospitals, doctors, locations, and appointments. This really helped me think in terms of entities and relationships, the foundation of scalable system design.
          </li>
          <li>
            <strong>CRUD Operations with Flask + SQLAlchemy:</strong> MediSlot became a sandbox for me to practice CRUD—creating, reading, updating, and deleting records. I wrote clean and reusable logic for both admin and user flows, improving how I work with forms, POST/GET methods, and Flask route management.
          </li>
          <li>
            <strong>Role-Based Access Control:</strong> Even with a monolithic structure, I ensured separation of flows for admin and user using decorators and session logic to restrict access and protect endpoints.
          </li>
        </ol>
      </div>
    </div>
  );
}

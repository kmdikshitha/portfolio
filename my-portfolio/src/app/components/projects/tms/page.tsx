'useclient'
import React from 'react'

const CrimsonCompassBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-t border-gray-300 pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Crimson Compass – Tour Management System
        </h1>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Why I Started This Project</h2>

        <p className="text-gray-800 mb-6">
          How many times have you planned a trip with friends or family and ended up with 10+ tabs open, juggling flight options, hotel bookings, places to visit, and food spots? Once you finally built that perfect itinerary, sharing it was a mess—Google Docs, endless screenshots, or sending PDFs that no one looked at. And if someone made a change? Yep, back to square one.
        </p>

        <p className="text-gray-800 mb-6">
          That’s the gap I wanted to fix. While there are plenty of trip planning apps, none made itinerary sharing simple or collaborative. Crimson Compass focuses on solving that: a shareable, editable itinerary for group travel that just works.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Project Overview</h3>
        <p className="text-gray-800 mb-4">
          Crimson Compass is built using a microservices architecture with three main components:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li><strong>Frontend (Next.js):</strong> For user interface, exploration, and itinerary visualization</li>
          <li><strong>Backend (Spring Boot):</strong> Handles authentication, session management, and itinerary logic</li>
          <li><strong>OAuth Auth Service:</strong> A dedicated service that manages third-party logins securely</li>
        </ul>

        <p className="text-gray-800 mb-4">Core features include:</p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Secure user authentication (OAuth & JWT)</li>
          <li>Explore and search destinations</li>
          <li>Custom itinerary builder with collaboration support</li>
        </ul>

        <p className="text-gray-800 mb-6">
          We used JDBC and Spring Data JPA for DB interactions and followed a modular architecture to enable clean API communication across services.
        </p>

        <p className="text-gray-800 mb-6">
          <strong>GitHub:</strong> <a href="https://github.com/kmdikshitha/tms-project" className="text-blue-600 underline">Project Landing Page</a>
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Technology Stack</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li><strong>Backend:</strong> Java, Spring Boot</li>
          <li><strong>Frontend:</strong> Next.js</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Deployment:</strong> Azure (App Services + DB)</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What I Learned</h3>

        <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. OAuth Token Exchange in Microservices</h4>
        <p className="text-gray-800 mb-4">
          Before this, I knew what OAuth was (we all use "Login with Google"), but this was my first time actually implementing it. In our architecture, the token exchange worked like this:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Frontend triggers login → redirects to the OAuth provider (e.g., Google)</li>
          <li>After consent, the OAuth service gets an authorization code</li>
          <li>This code is exchanged for an access token</li>
          <li>Our backend verifies this token and generates a custom JWT for session use</li>
        </ul>
        <p className="text-gray-800 mb-6">
          This separation helped me understand both trust boundaries and identity flows in a distributed system.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. JWT-Based Session Handling</h4>
        <p className="text-gray-800 mb-4">
          We used stateless session management using JWTs. After login, the backend issues a token that the frontend stores (typically in HTTP-only cookies). Every request includes the token, which the backend decodes to validate identity and permissions—no session storage on server side.
        </p>
        <p className="text-gray-800 mb-6">
          This made the app more scalable and also helped me grasp real-world token lifecycles and expiration management.
        </p>
      </div>
    </div>
  )
}

export default CrimsonCompassBlog

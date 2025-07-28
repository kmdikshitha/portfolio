<<<<<<< HEAD
'useclient'
import React from 'react'
export default function CollabHubBlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">CollabHub – Research Collaboration Portal</h1>

      <h2 className="text-2xl font-semibold mb-2 mt-8">Why I Started This Project</h2>
      <p className="mb-4">
        If you're a student trying to get into research, you know the hustle. For many of us—especially international students—getting a TA or RA position isn't just a bonus, it's a lifeline for experience and credibility.
      </p>
      <p className="mb-4">
        But let’s be honest, the cold email game is exhausting. You’re either spamming every professor you find on the faculty page or waiting endlessly for a reply.
      </p>
      <p className="mb-4">
        At one point, even our Dean had to send a mass email asking students to stop flooding professors’ inboxes. That’s when it hit me: Why not create a centralized portal to connect students and faculty for research?
      </p>
      <p className="mb-4">
        That’s how CollabHub was born—a streamlined, minimal prototype to show what a better system could look like.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-8">Project Overview</h2>
      <p className="mb-4">
        CollabHub is a lightweight portal built to validate and pitch the core idea to stakeholders. The MVP focused on backend logic and basic user flow with role-based access.
      </p>

      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>User Authentication & Session Management</strong>
          <ul className="list-disc pl-6">
            <li>Sign Up, Login, Logout</li>
            <li>Role-based access (Student/Professor)</li>
            <li>Prevents unauthorized page access after logout using Flask-Login</li>
          </ul>
        </li>
        <li>
          <strong>Forum Page</strong>
          <ul className="list-disc pl-6">
            <li>Share research ideas</li>
            <li>Add comments and engage in discussions</li>
          </ul>
        </li>
        <li>
          <strong>Profile Management</strong>
          <ul className="list-disc pl-6">
            <li>View researcher profiles</li>
            <li>Filter by domain, interests, or role</li>
          </ul>
        </li>
        <li>
          <strong>Search & Discover</strong>
          <ul className="list-disc pl-6">
            <li>Smart filters to find collaborators</li>
            <li>Easy navigation for both faculty and students</li>
          </ul>
        </li>
      </ul>

    <p className="text-blue-600 mt-4 underline">
          GitHub: <a href="https://github.com/kmdikshitha/CollabHub" target="_blank" rel="noopener noreferrer">Project Landing Page</a>
    </p>
      

      <h2 className="text-2xl font-semibold mb-2 mt-8">Technology Stack</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li><strong>Backend:</strong> Python (Flask)</li>
        <li><strong>Frontend:</strong> HTML, CSS</li>
        <li><strong>Database:</strong> SQLAlchemy (ORM)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-8">What I Learned</h2>

      <h3 className="text-xl font-semibold mt-4">1. Flask-Login & Session Management</h3>
      <p className="mb-4">
        This was my first real project using Flask, and implementing secure login/logout and managing session flows was a core challenge. I worked with Flask-Login to create decorators like <code className="bg-gray-100 px-1 py-0.5 rounded">@login_required</code>, ensuring protected routes and proper session cleanup after logout.
      </p>

      <h3 className="text-xl font-semibold mt-4">2. Role-Based Access Control</h3>
      <p className="mb-4">
        I built role-based authentication so users could have different experiences based on whether they were a student or a professor. This gave me a solid foundation in handling conditional routing and permissions within a Flask app.
      </p>

      <h3 className="text-xl font-semibold mt-4">3. SQLAlchemy ORM</h3>
      <p className="mb-4">
        I transitioned from raw SQL to using SQLAlchemy, which made querying and model relationships much cleaner. I learned how to build one-to-many and many-to-many relationships to support ideas, comments, and user profiles.
      </p>

      <h3 className="text-xl font-semibold mt-4">4. Routing & Blueprinting in Flask</h3>
      <p className="mb-4">
        Understanding how Flask routes requests and how to structure modular code using Blueprints helped me keep the codebase maintainable, even in a simple MVP.
      </p>
    </div>
  );
}
=======
'useclient'
import React from 'react'
export default function CollabHubBlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">CollabHub – Research Collaboration Portal</h1>

      <h2 className="text-2xl font-semibold mb-2 mt-8">Why I Started This Project</h2>
      <p className="mb-4">
        If you're a student trying to get into research, you know the hustle. For many of us—especially international students—getting a TA or RA position isn't just a bonus, it's a lifeline for experience and credibility.
      </p>
      <p className="mb-4">
        But let’s be honest, the cold email game is exhausting. You’re either spamming every professor you find on the faculty page or waiting endlessly for a reply.
      </p>
      <p className="mb-4">
        At one point, even our Dean had to send a mass email asking students to stop flooding professors’ inboxes. That’s when it hit me: Why not create a centralized portal to connect students and faculty for research?
      </p>
      <p className="mb-4">
        That’s how CollabHub was born—a streamlined, minimal prototype to show what a better system could look like.
      </p>

      <h2 className="text-2xl font-semibold mb-2 mt-8">Project Overview</h2>
      <p className="mb-4">
        CollabHub is a lightweight portal built to validate and pitch the core idea to stakeholders. The MVP focused on backend logic and basic user flow with role-based access.
      </p>

      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>User Authentication & Session Management</strong>
          <ul className="list-disc pl-6">
            <li>Sign Up, Login, Logout</li>
            <li>Role-based access (Student/Professor)</li>
            <li>Prevents unauthorized page access after logout using Flask-Login</li>
          </ul>
        </li>
        <li>
          <strong>Forum Page</strong>
          <ul className="list-disc pl-6">
            <li>Share research ideas</li>
            <li>Add comments and engage in discussions</li>
          </ul>
        </li>
        <li>
          <strong>Profile Management</strong>
          <ul className="list-disc pl-6">
            <li>View researcher profiles</li>
            <li>Filter by domain, interests, or role</li>
          </ul>
        </li>
        <li>
          <strong>Search & Discover</strong>
          <ul className="list-disc pl-6">
            <li>Smart filters to find collaborators</li>
            <li>Easy navigation for both faculty and students</li>
          </ul>
        </li>
      </ul>

    <p className="text-blue-600 mt-4 underline">
          GitHub: <a href="https://github.com/kmdikshitha/CollabHub" target="_blank" rel="noopener noreferrer">Project Landing Page</a>
    </p>
      

      <h2 className="text-2xl font-semibold mb-2 mt-8">Technology Stack</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li><strong>Backend:</strong> Python (Flask)</li>
        <li><strong>Frontend:</strong> HTML, CSS</li>
        <li><strong>Database:</strong> SQLAlchemy (ORM)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-8">What I Learned</h2>

      <h3 className="text-xl font-semibold mt-4">1. Flask-Login & Session Management</h3>
      <p className="mb-4">
        This was my first real project using Flask, and implementing secure login/logout and managing session flows was a core challenge. I worked with Flask-Login to create decorators like <code className="bg-gray-100 px-1 py-0.5 rounded">@login_required</code>, ensuring protected routes and proper session cleanup after logout.
      </p>

      <h3 className="text-xl font-semibold mt-4">2. Role-Based Access Control</h3>
      <p className="mb-4">
        I built role-based authentication so users could have different experiences based on whether they were a student or a professor. This gave me a solid foundation in handling conditional routing and permissions within a Flask app.
      </p>

      <h3 className="text-xl font-semibold mt-4">3. SQLAlchemy ORM</h3>
      <p className="mb-4">
        I transitioned from raw SQL to using SQLAlchemy, which made querying and model relationships much cleaner. I learned how to build one-to-many and many-to-many relationships to support ideas, comments, and user profiles.
      </p>

      <h3 className="text-xl font-semibold mt-4">4. Routing & Blueprinting in Flask</h3>
      <p className="mb-4">
        Understanding how Flask routes requests and how to structure modular code using Blueprints helped me keep the codebase maintainable, even in a simple MVP.
      </p>
    </div>
  );
}
>>>>>>> 5254f26 (changes in new lap)

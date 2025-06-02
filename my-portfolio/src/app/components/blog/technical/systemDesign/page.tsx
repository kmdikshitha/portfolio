'use client';

import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import ZoomableImage from '../../ZoomableImage';

const SystemArchitectureBlog = () => {
  return (
    <>
      {/* section 1 */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

        {/* <!-- Title --> */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Understanding System Design Through Codebase Evolution
        </h1>

        {/* <!-- Introduction Paragraph --> */}
        <p className="text-lg leading-relaxed mb-4">
          Before we dive in, I highly recommend reading up on system design concepts like scalability, caching, and fault tolerance to build a strong foundation. But in this blog, I’m not going to explain the theory behind system design. Instead, I’ll focus on what most developers care about: how companies structure their systems, and how codebases evolve with architecture.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          This blog is for early-career developers who often hear terms like “microservices,” “legacy systems,” and “monoliths” being tossed around at work, but aren’t quite sure what they mean in practice. We’ll demystify those and more.
        </p>

        {/* <!-- Section Heading --> */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What is System Design?
        </h2>

        {/* <!-- Section Paragraph --> */}
        <p className="text-lg leading-relaxed mb-4">
          System Design is a buzzword, especially in interviews for software engineering roles. But here’s the secret — if you’ve ever built a personal project or a course assignment from scratch, you’ve already done some form of system design. It's just that you didn’t call it that.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Let’s take a quick detour to understand the textbook definition.
        </p>

        {/* <!-- White Box Definition --> */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 mb-6 text-center">
          <blockquote className="text-xl font-medium text-gray-700 italic">
            "System Design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements."
          </blockquote>
        </div>

        {/* <!-- Simplified Explanation --> */}
        <p className="text-lg leading-relaxed">
          In simpler terms: It’s planning how your app works — what talks to what, what lives where, and how data flows between all the parts.
        </p>
      </div>

      {/* section 2 */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

        {/* <!-- Intro Paragraph --> */}
        <p className="text-lg leading-relaxed mb-6">
          Before we go deeper into the actual implementation, here's a quick look at the SDLC (Software Development Life Cycle).
        </p>
        {/* <!-- Section Heading --> */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What’s Included in SDLC?
        </h2>

        {/* <!-- Bullet Points --> */}
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><strong>Planning</strong> – Define the problem and scope.</li>
          <li><strong>Feasibility Study</strong> – Evaluate the practicality and cost.</li>
          <li><strong>System Design</strong> – Architect the solution.</li>
          <li><strong>Implementation</strong> – Start coding.</li>
          <li><strong>Testing</strong> – Validate functionality and performance.</li>
          <li><strong>Deployment</strong> – Ship to production.</li>
          <li><strong>Maintenance</strong> – Monitor, patch, and scale.</li>
        </ul>

        {/* <!-- Closing Paragraph --> */}
        <p className="text-lg leading-relaxed">
          For now, we’ll skip the deep dive into the 'Design' stage and focus on how developers implement various architectures.
        </p>

      </div>

      {/* section 3 */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

        {/* <!-- Section Heading --> */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Different Types of System Architectures
        </h2>

        {/* <!-- Intro Paragraph --> */}
        <p className="text-lg leading-relaxed mb-6">
          System architectures can be broadly categorized into centralized and distributed paradigms. Centralized models prioritize simplicity and tight coupling, while distributed architectures emphasize scalability, fault-tolerance, and asynchronous communication, accommodating the dynamic demands of modern cloud-native ecosystems.
        </p>

        <ZoomableImage src="/blog/systemArchitecture/systemDesign.jpg" alt="systemDesign" />


        {/* <!-- Transition Paragraph --> */}
        <p className="text-lg leading-relaxed mb-6">
          While there's a lot more to unpack within each architecture shown above, this blog focuses on the evolution — the transitions companies go through as their systems grow in complexity and scale. We'll break down the "why" behind those shifts and how they play out in real-world codebases.
        </p>

        {/* <!-- Evolution Path Intro --> */}
        <p className="text-lg leading-relaxed mb-4">
          Here’s the common evolution path most companies follow:
        </p>

        <ZoomableImage src="/blog/systemArchitecture/evolution.jpg" alt="Serverless Architecture" />
      </div>


      {/* section 4 */}
      {/* Transition Section */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
        <p className="mt-10 text-lg text-gray-800">
          Let’s break these down using a simple <strong>e-commerce platform</strong> as our running example. We'll talk about how services like user authentication, product catalog, cart, and payment are handled in each architecture.
        </p>

        <ul className="list-disc pl-6 mt-4 text-base text-gray-700">
          <li><strong>UI (User Interface)</strong></li>
          <li><strong>Business Logic</strong></li>
          <li><strong>Data Access</strong></li>
        </ul>

        <p className="mt-4 text-gray-800">We'll walk through these components in each architecture. Ready? Let’s go.</p>
      </div>

      {/* <Section> */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
        {/* Monolithic Architecture Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Monolithic Architecture
        </h2>

        {/* White Transparent Box Definition */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 mt-6 mx-auto max-w-2xl shadow-md text-center text-gray-800">
          <p className="text-md font-medium">
            A monolithic application is built as a single, unified unit where all components are tightly integrated.
          </p>
        </div>

        <p className="mt-6 text-gray-700 text-base leading-relaxed">
          Everything is in one giant codebase – UI, logic, and database access live together and are deployed together.
        </p>

        {/* System Component Breakdown */}
        <ul className="list-disc pl-6 mt-4 text-base text-gray-700">
          <li><strong>UI:</strong> Integrated within the same codebase.</li>
          <li><strong>Business Logic:</strong> Centralized and shared across the application.</li>
          <li><strong>Data Access:</strong> Single shared database accessed by all components.</li>
        </ul>

        <p className="mt-6 text-gray-700 text-base">
          All components live in one codebase, deployed as one artifact. These are what are called <strong>Legacy Systems</strong> in the companies—systems that are outdated and usually need architectural revamps to meet modern scalability and maintainability standards.
        </p>

        <ZoomableImage src="/blog/systemArchitecture/monolith.jpg" alt="Serverless Architecture" />

        {/* E-commerce Use Case */}
        <p className="mt-8 text-base text-gray-800 leading-relaxed">
          <strong>E-commerce Scenario:</strong> Let’s say you want to add a new feature to filter products based on price and rating. In a monolithic system, you’ll write your code in the same file or module where other unrelated features like user login or cart management are written. Once done, you redeploy the whole application.
        </p>

        {/* Cons List */}
        <p className="mt-4 text-gray-800 font-semibold">Cons:</p>
        <ul className="list-disc pl-6 mt-2 text-base text-gray-700">
          <li>Even a small change requires redeploying the entire system.</li>
          <li>One bug in a single module could crash the entire platform.</li>
          <li>Tight coupling makes it harder to scale specific features.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-10 mb-4 text-gray-900">
          Example Modular Monolith Codebase Structure
        </h3>

        <pre className="bg-gray-900 text-green-300 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre font-mono shadow-md">
          <code>
            {`ecommerce-app/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
│
├── database/
│   ├── migrations/
│   └── seeders/
│
├── shared/              # utils, constants, validation
├── tests/
└── package.json`}
          </code>
        </pre>

        <p className="mt-4 text-gray-700">
          As you can see Monolith has Single repository, all layers in one codebase.Business logic for all modules is inside <code className="bg-gray-200 px-1 rounded text-sm">services/</code>, APIs are exposed via <code className="bg-gray-200 px-1 rounded text-sm">routes/</code>, and there's a single shared database. While the code is modular, all features are interdependent and deployed together.
        </p>
      </div>

      {/* section 5: Modular monolith */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
        <h2 className="text-2xl font-bold mt-16 mb-6 text-gray-900">
          Modular Monolith
        </h2>

        <div className="bg-white/50 border border-gray-200 backdrop-blur-sm p-4 rounded-lg shadow-md mb-6">
          A modular monolith organizes code into separate modules with defined boundaries but still deploys as a single application.
        </div>

        <p className="text-lg leading-relaxed mb-4">
          In simpler terms: It’s like having separate folders for each feature in your project, but you're still pushing them to production all at once.
        </p>

        <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
          <li><strong>UI:</strong> May be organized per module or shared across modules.</li>
          <li><strong>Business Logic:</strong> Divided into modules with well-defined boundaries.</li>
          <li><strong>Data Access:</strong> Typically a shared database, with modules managing their own data access layers.<br />
            <span className="ml-4 text-sm text-gray-600">E.g., Order module doesn’t directly query Booking tables.</span>
          </li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          Still one deployable, but with internal boundaries and clear contracts.
        </p>

        <ZoomableImage src="/blog/systemArchitecture/modularMonolith.jpg" alt="Serverless Architecture" />

        <p className="mb-4 text-gray-700">
          <strong>E-commerce Scenario:</strong> You’ve modularized your code into folders like <code className="bg-gray-200 px-1 rounded text-sm">/user</code>, <code className="bg-gray-200 px-1 rounded text-sm">/cart</code>, <code className="bg-gray-200 px-1 rounded text-sm">/order</code>, etc.
          Now if you want to change how filters work in the catalog, you only touch the <code className="bg-gray-200 px-1 rounded text-sm">/items</code> module. However, you still need to deploy the whole app.
        </p>

        <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
          <li>Still requires full deployment for any change.</li>
          <li>Shared database can lead to accidental coupling.</li>
          <li>Scalability is better than a monolith but still limited.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-10 mb-4 text-gray-900">
          Example Modular Monolith Codebase Structure
        </h3>

        <pre className="bg-gray-900 text-green-300 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre font-mono shadow-md">
          <code>
            {`ecommerce-app/
│
├── frontend/
│   ├── components/
│   └── pages/
│
├── modules/
│   ├── user/
│   │   ├── user.controller.js
│   │   ├── user.model.js
│   │   ├── user.routes.js
│   │   └── user.service.js
│   │
│   ├── items/
│   ├── orders/
│   ├── payments/
│   └── bookings/
│
├── shared/
├── database/
├── tests/
└── package.json`}
          </code>
        </pre>

        <p className="mt-4 text-gray-700">
          As you can see, its still a single repository, but now logically split by domain modules. Each module encapsulates its own controller, model, routes, and service logic. Internal boundaries are respected, reducing accidental coupling. Teams may be assigned to own specific modules. Despite this modularity, the entire system is deployed as a single artifact.
        </p>
      </div>

      {/* section 6:  SOA section */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Oriented Architecture</h2>

        <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-md mb-10 max-w-4xl mx-auto text-gray-800">
          <p className="text-lg leading-relaxed mb-4">
            SOA structures the application as a collection of services that communicate via a common communication protocol, typically over a service bus.
          </p>
        </div>

          <p className="mb-4">
            <strong>In simpler terms:</strong> Each major business function (like Order, User, Payment) becomes a service that talks to others using APIs.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>UI:</strong> Interacts with multiple services through a service bus or API gateway.</li>
            <li><strong>Business Logic:</strong> Encapsulated within individual services.</li>
            <li><strong>Data Access:</strong> Each service may manage its own data access, often with a shared database.</li>
          </ul>

          <p className="mt-4 text-gray-600 italic">
            Promotes enterprise reuse but may involve tight data coupling.
          </p>

        <ZoomableImage src="/blog/systemArchitecture/SOA.jpg" alt="Serverless Architecture" />


        <div className="text-lg max-w-4xl mx-auto text-gray-700 space-y-4">
          <p><strong>E-commerce Scenario:</strong> Now the product filter feature lives inside the Product Catalog service. You deploy only that service. Other services like Booking or Notification aren't touched.</p>

          <p className="font-semibold">Cons:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Often uses a shared database, leading to data coupling.</li>
            <li>Service communication is typically synchronous — if one service fails, others might break.</li>
            <li>Adding new features across services requires coordination.</li>
          </ul>

          {/* Code block */}
          <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-xl p-4 overflow-x-auto max-w-4xl mx-auto mb-6">
            <pre>
              {`ecommerce-soa/
│
├── services/
│   ├── user-service/
│   │   ├── src/
│   │   ├── routes/
│   │   └── database/
│   │
│   ├── payment-service/
│   ├── order-service/
│   └── search-service/
│
├── shared/
│   └── common-utils/
│
├── frontend/
└── api-gateway/`}
            </pre>
          </div>

          <p>
            As you can see, structure is split into domain-level services but often in a single repo or a monorepo. Each domain has its own folder. Shared DB is possible, usually with an enterprise service bus or API Gateway.
          </p>
        </div>
      </div>

      {/* section 7: Microservices section */}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
       <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Microservices
        </h2>

        {/* Transparent White Box */}
        <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-md mb-8 text-gray-800 max-w-4xl mx-auto">
          <p className="text-lg">
            Microservices break down an application into small, independently deployable services
            that run in their own process and communicate via lightweight protocols.
          </p>
        </div>

        {/* Simplified Explanation */}
        <div className="text-gray-800 max-w-4xl mx-auto mb-8">
          <p className="text-lg leading-relaxed mb-4">
            <strong>In simpler terms:</strong> Each feature or domain (like Cart, Orders, Payments)
            is its own mini-app with its own database and deployment pipeline.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>UI:</strong> Often a separate layer that communicates with various microservices.</li>
            <li><strong>Business Logic:</strong> Distributed across independent services.</li>
            <li><strong>Data Access:</strong> Each microservice manages its own database, promoting data encapsulation.</li>
          </ul>
        </div>


        <ZoomableImage src="/blog/systemArchitecture/microservices.jpg" alt="Serverless Architecture" />


        {/* E-commerce Scenario */}
        <div className="text-gray-800 max-w-4xl mx-auto mb-6">
          <p className="mb-4">
            <strong>E-commerce Scenario:</strong> The product filtering logic is a part of the Search Service.
            You can deploy changes to it without touching Booking, Order, or Payment services. Each service owns
            its own data, reducing dependencies.
          </p>

          <p className="font-semibold">Cons:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>High complexity in debugging across services.</li>
            <li>Needs solid CI/CD, observability, and orchestration.</li>
            <li>Risk of too many tiny services (service sprawl).</li>
          </ul>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-xl p-4 overflow-x-auto max-w-4xl mx-auto mb-6">
          <pre>
            {`repos/
├── user-service/
│   ├── src/
│   ├── Dockerfile
│   ├── database/
│   └── README.md
├── order-service/
├── booking-service/
├── payment-service/
├── items-service/
├── search-service/
├── notification-service/
├── frontend-app/
│   ├── React/Next.js or Vue/
│   └── uses REST/GraphQL for each service
└── api-gateway/`}
          </pre>
        </div>

        {/* Deployment Summary */}
        <div className="text-gray-800 max-w-4xl mx-auto">
          <p>
            Every service lives in its own independent repo (or mono-repo with hard boundaries).
            Fully isolated. Each service is independently deployed, has its own DB, own CI/CD pipeline,
            and versioning.
          </p>
        </div>
      </div>

      {/* section 8: Event-driven section*/}
      <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Serverless / Event-Driven Architecture
        </h2>

        {/* Transparent White Box */}
        <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-md mb-8 text-gray-800 max-w-4xl mx-auto">
          <p className="text-lg">
            Serverless architecture runs backend code as individual functions triggered by events.
            Event-driven systems react to messages or state changes asynchronously.
          </p>
        </div>

        {/* Simplified Explanation */}
        <div className="text-gray-800 max-w-4xl mx-auto mb-8">
          <p className="text-lg leading-relaxed mb-4">
            You write functions that run only when needed, like when a user checks out or searches for items.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>UI:</strong> Typically a separate frontend that triggers backend functions via APIs.</li>
            <li><strong>Business Logic:</strong> Implemented as discrete functions responding to specific events.</li>
            <li><strong>Data Access:</strong> Functions interact with databases or other services as needed, often using managed services.</li>
          </ul>
        </div>
 
        <ZoomableImage src="/blog/systemArchitecture/serverless.jpg" alt="Serverless Architecture" />


        {/* E-commerce Scenario */}
        <div className="text-gray-800 max-w-4xl mx-auto mb-6">
          <p className="mb-4">
            <strong>E-commerce Scenario:</strong> The filter logic becomes a function triggered when a search is made. It queries
            a managed database or cache, returns results, and scales automatically.
          </p>

          <p className="font-semibold">Cons:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Harder to debug — logs and traces are scattered.</li>
            <li>Cold starts can delay execution.</li>
            <li>Stateless nature may complicate workflows.</li>
          </ul>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-xl p-4 overflow-x-auto max-w-4xl mx-auto mb-6">
          <pre>
            {`ecommerce-serverless/
├── frontend/
├── functions/
│   ├── user/
│   │   ├── signup.js
│   │   └── login.js
│   ├── items/
│   │   ├── addItem.js
│   │   └── getItems.js
│   ├── orders/
│   │   ├── placeOrder.js
│   │   └── getOrderStatus.js
│   ├── payments/
│   │   ├── processPayment.js
│   │   └── refundPayment.js
│   └── notifications/
│       ├── sendEmail.js
│       └── sendSMS.js
├── eventBus/           # SNS/SQS/Kafka/Cloud Events
├── database/           # DynamoDB, Firebase, etc.
└── serverless.yml`}
          </pre>
        </div>

        {/* Summary */}
        <div className="text-gray-800 max-w-4xl mx-auto">
          <p>
            Code is broken down into functions triggered by events (like an item added to cart, payment confirmed).
            Each function is a unit of execution — stateless, triggered by events (HTTP, queue, cron). Lightweight,
            scalable, but requires orchestration.
          </p>
        </div>
      </div>
      {/* section 9: Final takeaways */}
      <section className="bg-white py-6 px-6 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Final Takeaways
        </h2>

        {/* Key Concepts */}
        <div className="max-w-4xl mx-auto text-gray-800 mb-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm mb-4">
            <p className="text-lg"><strong>Repository Structure</strong> = How the code is organized in GitHub/GitLab/Bitbucket</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <p className="text-lg"><strong>System Architecture</strong> = How the application runs at runtime (what talks to what, what’s independent, what’s dependent)</p>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="max-w-4xl mx-auto text-gray-800 text-lg space-y-6">
          <p>
            Understanding system design isn't just about whiteboard diagrams and interview rounds. It’s about how your application evolves as it grows, and how you structure your codebase to match the real-world needs of deployment, scale, and agility.
          </p>
          <p>
            If you’ve ever looked at a massive code repo and wondered “why is this structured this way?”, hopefully now you have a better idea.
          </p>
          <p>
            Next time someone casually drops “our legacy monolith needs to be broken into microservices” — you’ll not only understand what they mean, you’ll know how to implement it.
          </p>
        </div>
      </section>

    </>
  )
};

export default SystemArchitectureBlog;

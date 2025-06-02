'use client';

import React from 'react';
import ZoomableImage from '../../ZoomableImage';

const ReactBlog = () => {
    return (
        <>
            {/* Section 1 */}
            <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

                {/* <!-- Title --> */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    REST in Pieces: Breaking Down the API That Talks for You
                </h1>

                {/* <!-- Introduction Paragraph --> */}
                <p className="text-lg leading-relaxed mb-4">
                    Before jumping into the technical jargon, for all the students out there — think about your college project where you had a frontend built in React and a backend in Java Spring Boot. That <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-700">/api/students/42</code> endpoint you called to fetch student details? That’s REST in action.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    In my previous post, <span className="italic">How codebases evolve with Architecture</span>, I broke down a modern application into three core layers: UI, Business Logic, and Data Layer. This modular decomposition helps us reason about how responsibilities are distributed in any scalable system.
                </p>

                {/* <!-- Guiding Questions --> */}
                <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 mb-6">
                    <p className="text-lg leading-relaxed mb-2">
                        But here’s a question I didn’t unpack then:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                        <li>How exactly does the UI communicate with the Business Logic layer?</li>
                        <li>What does it mean when we say a "request is made" or "data is fetched"?</li>
                    </ul>
                </div>

                {/* <!-- Explanatory Paragraph --> */}
                <p className="text-lg leading-relaxed mb-4">
                    That’s where REST architecture comes in. REST — or <span className="font-medium">Representational State Transfer</span>. It’s the invisible handshake happening every time your frontend talks to a backend service, whether it’s retrieving user data, submitting a booking request, or syncing a payment.
                </p>

                <p className="text-lg leading-relaxed mb-10">
                    In this post, we’ll zoom in on how REST operationalizes system design by acting as the communication protocol between layers — even in a monolith — and how understanding REST is crucial to bridging theory with real-world implementation. Now, I’m not going to bore you with academic definitions, REST layers, or a breakdown of the client-server paradigm. Instead, let’s walk through how REST plays out in the day-to-day life of a developer.
                </p>
            </div>

            {/* Section 2 */}
            <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

                {/* <!-- Section Heading --> */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Now Let’s Talk REST (Representational State Transfer)
                </h2>

                {/* <!-- Intro Paragraph --> */}
                <p className="text-lg leading-relaxed mb-6">
                    You’ve heard the buzzword. But what does REST actually mean?
                    Let’s break it down using our e-commerce example.
                </p>

                {/* <!-- Subheading: Representational --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Representational
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    This is all about format — how the data is represented when exchanged.
                    In REST, we typically use JSON (JavaScript Object Notation). So when your frontend says "add item 101 to my cart", it sends it like this:
                </p>

                {/* <!-- Code Block --> */}
                <div className="bg-gray-100 text-sm font-mono rounded-md p-4 mb-4 overflow-x-auto">
                    <pre>
                        {`{
  "itemId": 101,
  "quantity": 2
}`}
                    </pre>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                    It’s like writing a note to the backend: “Please add 2 sneakers to this user’s cart.” REST APIs understand that note format.
                </p>

                {/* <!-- Subheading: State --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    State
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    “State” refers to the status of something at a particular moment.
                </p>

                <ul className="list-disc list-inside text-lg text-gray-800 mb-4 space-y-2">
                    <li>When the user’s cart is empty — that’s one state.</li>
                    <li>After adding 2 sneakers — that’s a new state.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                    REST lets the client (frontend) manipulate and observe the state of resources like carts, products, and orders.
                </p>

                {/* <!-- Subheading: Transfer --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Transfer
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    This is the actual movement of that data. The frontend sends a request ("please add this item") and the backend transfers back a response ("item added, here’s the updated cart").
                </p>

                {/* <!-- Summary Bullets --> */}
                <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 mb-10">
                    <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                        <li><span className="font-medium">Representational</span> → the JSON format of the item</li>
                        <li><span className="font-medium">State</span> → what’s currently in the cart</li>
                        <li><span className="font-medium">Transfer</span> → moving that info between frontend ↔ backend</li>
                    </ul>
                </div>

            </div>
            {/* Section 3 */}
            <div className="max-w-3xl mx-auto px-3 py-3 text-gray-800">

                {/* <!-- Section Heading --> */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Through Dev’s Lens: Everyone has done online shopping at least once, right?
                </h2>

                <p className="text-lg leading-relaxed mb-4">
                    Let’s pull back the curtain on what really happens in the background.
                </p>

                {/* <!-- What Users See --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What users see:</h3>
                <ul className="list-disc list-inside text-lg text-gray-800 mb-6 space-y-2">
                    <li>You browse an item.</li>
                    <li>Add it to the cart.</li>
                    <li>Proceed to checkout.</li>
                </ul>

                <ZoomableImage src="/blog/rest/rest.jpg" alt="rest" />

                {/* <!-- What Developers See --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What developers see:</h3>

                <div className="bg-gray-100 text-sm font-mono rounded-md p-4 mb-4 overflow-x-auto">
                    <pre>{`fetch('https://myecom.com/api/cart', {
  method: 'POST',
  body: JSON.stringify({ itemId: 101, quantity: 2 }),
  headers: { 'Content-Type': 'application/json' }
})`}</pre>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                    This action triggers a backend controller in Java/Spring Boot, maybe something like this:
                </p>

                <div className="bg-gray-100 text-sm font-mono rounded-md p-4 mb-6 overflow-x-auto">
                    <pre>{`@PostMapping("/cart")
public ResponseEntity<Cart> addToCart(@RequestBody Item item) {
    Cart updatedCart = cartService.addItem(item);
    return new ResponseEntity<>(updatedCart, HttpStatus.CREATED);
}`}</pre>
                </div>

                <p className="text-lg leading-relaxed mb-8">
                    This is REST in motion. Let’s break it down further:
                </p>

                {/* <!-- Subheading: 1. HTTP Part --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. HTTP Part: Making a call from the frontend
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    REST API = REST + HTTP. HTTP (HyperText Transfer Protocol) is the rulebook that allows a browser (or client) to talk to a server over the web.
                </p>

                <p className="text-lg leading-relaxed mb-2 font-medium">Common HTTP methods:</p>
                <ul className="list-disc list-inside text-lg text-gray-800 mb-4 space-y-2">
                    <li><strong>GET</strong> – Retrieve a resource</li>
                    <li><strong>POST</strong> – Create a new resource</li>
                    <li><strong>PUT</strong> – Update an existing resource</li>
                    <li><strong>DELETE</strong> – Remove a resource</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                    For developers, your React app is the client, your Spring Boot app is the server.
                    When you click "Add to Cart," the frontend makes a <strong>POST</strong> request using <code>fetch()</code> or <code>axios()</code> to send data to the server.
                </p>

                {/* <!-- Subheading: 2. REST Part --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. REST Part: Defining structured access
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    REST tells you how to build the backend so that the HTTP calls are meaningful and consistent.
                    URLs are structured around resources, not actions. Example:
                </p>

                <ul className="list-disc list-inside text-lg text-gray-800 mb-4 space-y-2">
                    <li><code>/items</code> → represents products</li>
                    <li><code>/cart</code> → represents the user’s shopping cart</li>
                    <li><code>/orders</code> → represents purchase records</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                    This design makes it intuitive for frontend developers to understand what’s available on the backend.
                </p>

                {/* <!-- Subheading: 3. Response Part --> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Response Part: Getting confirmation from the server
                </h3>

                <p className="text-lg leading-relaxed mb-4">
                    Now, let’s talk about what happens after the server processes your request.
                    In our example, the server returns:
                </p>

                <div className="bg-gray-100 text-sm font-mono rounded-md p-4 mb-4 overflow-x-auto">
                    <pre>{`HTTP/1.1 201 Created
{
  "cartId": "abc123",
  "items": [
    { "itemId": 101, "quantity": 2 }
  ]
}`}</pre>
                </div>

                <p className="text-lg leading-relaxed mb-2">
                    What’s this <strong>201</strong>? It’s an HTTP status code indicating that a new resource was successfully created.
                </p>

                <p className="text-lg leading-relaxed mb-2 font-medium">Other common status codes include:</p>
                <ul className="list-disc list-inside text-lg text-gray-800 mb-6 space-y-2">
                    <li><strong>200 OK</strong> – Request successful</li>
                    <li><strong>400 Bad Request</strong> – Invalid input</li>
                    <li><strong>401 Unauthorized</strong> – Authentication needed</li>
                    <li><strong>404 Not Found</strong> – Resource doesn’t exist</li>
                    <li><strong>500 Internal Server Error</strong> – Something broke in backend</li>
                </ul>

                <p className="text-lg leading-relaxed mb-10">
                    All of this comes under the umbrella of <strong>API</strong> — Application Programming Interface,
                    which I’ll be discussing in another blog post.
                </p>

            </div>

            {/* Conclusion Section */}
            <div className="max-w-3xl mx-auto px-3 py-6 text-gray-800">

                {/* Smooth transition paragraph */}
                <p className="text-lg leading-relaxed mb-6">
                    So next time you see a <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-700">/api/</code> call in your code, remember — it’s not just plumbing. It’s a well-defined conversation between your client and server, governed by REST principles and powered by HTTP.
                </p>

                {/* Developer as translator */}
                <p className="text-lg leading-relaxed mb-6">
                    You, the developer, are the translator, ensuring both sides speak the same language.
                </p>

                {/* Real-world impact */}
                <p className="text-lg leading-relaxed mb-6">
                    This is where backend architecture meets real-world usability. Every HTTP method, every endpoint, every response code is part of a system that ensures seamless digital experiences — from a button click to a cart update, and eventually to a successful purchase.
                </p>

                {/* Call-to-action for future learning */}
                <p className="text-lg leading-relaxed">
                    Understanding this flow isn’t just useful — it’s foundational. REST may be invisible to users, but for us devs, it’s the scaffolding holding modern web apps together. So, go ahead — add that item to the cart, and smile knowing you now truly understand what’s going on under the hood.
                    <br />
                    <br />
                    In future posts, I’ll dive deeper into the API ecosystem — including authentication, error handling, and how all this fits into scalable, real-world systems. Stay tuned.
                </p>
            </div>

        </>
    )
};

export default ReactBlog;

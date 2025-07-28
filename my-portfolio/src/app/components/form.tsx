<<<<<<< HEAD
'use client';

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[#761180]">Get in Touch</h1>
      {submitted ? (
        <p className="text-green-600">Thanks! I'll get back to you soon.</p>
      ) : (
        <form
          action="https://formspree.io/f/movwqqej"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#761180] text-white px-6 py-2 rounded-lg hover:bg-[#5d0d65]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
=======
'use client';

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[#761180]">Get in Touch</h1>
      {submitted ? (
        <p className="text-green-600">Thanks! I'll get back to you soon.</p>
      ) : (
        <form
          action="https://formspree.io/f/movwqqej"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#761180] text-white px-6 py-2 rounded-lg hover:bg-[#5d0d65]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
>>>>>>> 5254f26 (changes in new lap)

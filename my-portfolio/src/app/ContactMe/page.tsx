<<<<<<< HEAD
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import  ContactForm  from "../components/form";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-[#761180] mb-6 text-center">
          Let’s Connect
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Whether you have a suggestion, feedback, or just want to say hi — feel free to reach out.
        </p>

        <ContactForm/>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-2">Or reach me directly:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:dikshithausa@gmail.com"
              className="text-[#761180] hover:text-[#5a0d60]"
              aria-label="Email">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dikshitha-km/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#761180] hover:text-[#5a0d60]"
              aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import  ContactForm  from "../components/form";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-[#761180] mb-6 text-center">
          Let’s Connect
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Whether you have a suggestion, feedback, or just want to say hi — feel free to reach out.
        </p>

        <ContactForm/>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-2">Or reach me directly:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:dikshithausa@gmail.com"
              className="text-[#761180] hover:text-[#5a0d60]"
              aria-label="Email">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dikshitha-km/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#761180] hover:text-[#5a0d60]"
              aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 5254f26 (changes in new lap)

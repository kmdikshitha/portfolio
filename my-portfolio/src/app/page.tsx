"use client";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  // const router = useRouter();
  return (
    <>
      {/* Navbar
      <nav className="bg-[#761180] p-4 flex justify-between items-center text-white fixed top-0 left-0 w-full shadow-md z-50">
        <div className="flex flex-col">
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={() => router.push("/")}>
            Semicolons & Stories
          </h1>
          <h3 className="text-sm italic mt-1">every line has a story to tell</h3>
        </div>

        <div className="flex space-x-6 text-white">
          <Link href="/Blog" className="hover:text-[#E6DBE9]">Blog</Link>
          <Link href="/International" className="hover:text-[#E6DBE9]">Everything International</Link>
          <Link href="/Projects" className="hover:text-[#E6DBE9]">Projects</Link>
          <Link href="/Events" className="hover:text-[#E6DBE9]">Conferences/Events</Link>
          <Link href="/AboutMe" className="hover:text-[#E6DBE9]">About Me</Link>
          <Link href="/ContactMe" className="hover:text-[#E6DBE9]">Contact Me</Link>
        </div>
      </nav> */}

      {/* Main Section */}
      <section className="w-full px-4">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-24">
    {/* Left: Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <Image
        src="/Dikshitha.jpg"
        alt="Dikshitha Karanam"
        width={400}
        height={400}
        className="rounded-lg object-cover"
      />
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">Dikshitha Karanam Madhusudhanprasad</h1>
      <h2 className="text-2xl font-semibold text-[#761180]">
        <Typewriter
          words={[
            "Software Engineer",
            "Technical Product Manager",
            "Full Stack Developer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </div>
  </div>
</section>

<section className="w-full px-4 py-20 bg-[#fdfbfe] text-[#333]">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#761180] mb-6">
          Ikigai — My Purpose in Motion
        </h2>

        {/* Intro Text */}
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        
            <span className="font-semibull">Ikigai</span> (生き甲斐) whispers to us from Japanese wisdom—<em>"a reason for being"</em> that transcends the ordinary pursuit of success. 
            While traditionally rooted in finding joy in life's simple moments, the Western world has beautifully 
            woven this concept into a compass for professional fulfillment, creating that magical intersection where
            what you love, what you're good at, what you can be paid for, and what the world needs converge.
          </p>
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
            But here's the thing—who decided that careers should solely be about paychecks and climbing ladders? 
            The most profound professional journeys happen when we dare to seek that elusive joy in our work. Because as time unfolds, those who find genuine happiness 
            in what they do don't just succeed—they thrive, they innovate, they inspire. 
            The Western adaptation of ikigai reminds us that purpose-driven work isn't just a luxury; 
            it's a necessity for a life well-lived.
          </p>

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Venn Diagram */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/Ikigai.jpg" 
              alt="Ikigai Diagram"
              width={800}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Summary */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#761180] mb-4">My Ikigai</h3>
            <p className="text-lg leading-relaxed">
              Driving the development of meaningful, scalable tech products by blending backend and
              full-stack engineering expertise with a product mindset—focused on solving real-world
              challenges, empowering teams, and building solutions that are ethically grounded and globally
              relevant.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

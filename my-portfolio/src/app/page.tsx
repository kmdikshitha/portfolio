"use client";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import About from "./AboutMe/page";
import ProjectPage from "./Projects/page";

export default function Home() {
  // const router = useRouter();
  return (
    <>
<section className="relative w-full min-h-[550px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden px-5 py-6">
<div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="flex-1 z-10 max-w-xl text-center md:text-left">
            {/* Optional badge */}
            <div className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mb-4 shadow-sm">
              Available for opportunities
            </div>

            {/* Headings */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I’m <span className="text-blue-600">Dikshitha Karanam</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
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

            {/* Introduction */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              I build scalable, secure, and impactful systems that bridge engineering precision
              with strategic product thinking. Passionate about designing clean architectures,
              leading technical initiatives, and transforming ideas into reliable, user-driven solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/AboutMe"
                className="bg-blue-600 hover:bg-blue-700 text-white !text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                More about Me
              </Link>
              <Link
                href="/Projects"
                className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 font-semibold px-6 py-3 rounded-lg transition"
              >
                View my work
              </Link>
              <Link
                href="/personalphilosophy"
                className="bg-blue-600 hover:bg-blue-700 text-white !text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                Beyond Work
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8 text-center md:text-left">
              {[
                { value: "4", label: "Companies" },
                { value: "7", label: "Leadership Roles" },
                { value: "5", label: "Projects" },
                { value: "14", label: "Blogs" },
                { value: "6", label: "Awards" },
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-800">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* Gradient glow behind image */}
            <div
              className="absolute rounded-full blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(59,130,246,0.3) 50%, transparent 100%)",
                width: "400px",
                height: "400px",
                top: "40%",
                right: "10%",
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            ></div>

            <div className="relative z-10">
              <Image
                src="/DikshithaBg.png"
                alt="Dikshitha Karanam"
                width={280}
                height={280}
                className="rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded About Me section */}
      <section className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      <div className="w-32 h-1 bg-gradient-to-r from-[#761180] to-blue-400 mx-auto rounded-full" />


      {/* Embedded Projects section */}
      <section className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <ProjectPage />
        </div>
      </section>


      {/* <section className="w-full px-4 py-6 text-[#333]">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-4xl font-bold text-center text-black mb-6">
            Ikigai — My Purpose in Motion
          </h2>

          
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">

            <span className="font-semibull">Ikigai</span> (生き甲斐) whispers to us from Japanese wisdom—<em>"a reason for being"</em> that transcends the ordinary pursuit of success.
            gently reminds us that life’s deepest fulfillment comes from purpose. As the West embraced this
            timeless idea, it evolved into a modern guide—where passion, skill, demand, and livelihood meet.
            In this quiet intersection, work becomes more than a career—it becomes a calling.
          </p>

         
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/Ikigai.jpg"
                alt="Ikigai Diagram"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>

           
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black mb-4">My Ikigai</h3>
              <p className="text-lg leading-relaxed">
                Driving the development of meaningful, scalable tech products by blending backend and
                full-stack engineering expertise with a product mindset—focused on solving real-world
                challenges, empowering teams, and building solutions that are ethically grounded and globally
                relevant.
              </p>
            </div>
          </div>
        </div>
      </section> */}


    </>
  );
}

"use client";
// import { useRouter } from "next/navigation";
import Link from "next/link";
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
      {/* <section className="relative w-full h-[500px] flex flex-col items-center justify-center text-white text-center">
  <div
    className="absolute inset-5 w-full h-full opacity-50"
    style={{
      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664304160128-ca5a08ac46ce?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  ></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-24">
        
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/Dikshitha.jpg"
              alt="Dikshitha Karanam"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

     
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
      </section> */}
      <section className="relative w-full h-[300px] flex flex-col items-center justify-center text-white text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1664304160128-ca5a08ac46ce?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 gap-10 max-w-6xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/DikshithaBg.jpg"
              alt="Dikshitha Karanam"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#761180] mb-4">Dikshitha Karanam</h1>
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


      <section className="px-6 py-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">👋 Hi, I’m Dikshitha</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">A problem solver at heart with a passion for building scalable products and human-centered solutions.</p>
        <Link href="/AboutMe" className="text-[#761180] font-medium underline hover:text-gray-800">
          Learn more about me →
        </Link>
      </section>

      <section className="py-6 px-6">
        <h2 className="text-center text-2xl font-semibold mb-10">In a Nutshell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: "fa-code", label: "Projects", value: "5" },
            { icon: "fa-pen-nib", label: "Blogs", value: "3" },
            { icon: "fa-building", label: "Companies", value: "3" },
            { icon: "fa-award", label: "Awards", value: "6" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f4e1f8] mx-auto mb-2">
              <i className={`fas ${item.icon} text-3xl text-[#761180] mb-2`}></i>
            </div>
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            
            </div>
          ))}
        </div>
      </section>


      <section className="w-full px-4 py-6 text-[#333]">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-[#761180] mb-6">
            Ikigai — My Purpose in Motion
          </h2>

          {/* Intro Text */}
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">

            <span className="font-semibull">Ikigai</span> (生き甲斐) whispers to us from Japanese wisdom—<em>"a reason for being"</em> that transcends the ordinary pursuit of success.
            gently reminds us that life’s deepest fulfillment comes from purpose. As the West embraced this 
            timeless idea, it evolved into a modern guide—where passion, skill, demand, and livelihood meet. 
            In this quiet intersection, work becomes more than a career—it becomes a calling.
          </p>
          {/* <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
            But here's the thing—who decided that careers should solely be about paychecks and climbing ladders?
            The most profound professional journeys happen when we dare to seek that elusive joy in our work. Because as time unfolds, those who find genuine happiness
            in what they do don't just succeed—they thrive, they innovate, they inspire.
            The Western adaptation of ikigai reminds us that purpose-driven work isn't just a luxury;
            it's a necessity for a life well-lived.
          </p> */}

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

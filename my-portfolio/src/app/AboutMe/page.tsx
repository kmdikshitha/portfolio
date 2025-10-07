import React, { useState } from "react";
import Image from "next/image";
import AboutTimeline from '../components/timeline';
const skillBoxClasses = "bg-white text-blue-600 border border-blue-200 shadow-md rounded-2xl px-4 py-2 text-sm font-medium";

const About = () => {
  const [showAllTechnical, setShowAllTechnical] = useState(false);
  const [showAllProduct, setShowAllProduct] = useState(false);
  const [showAllCore, setShowAllCore] = useState(false);

  const skillBoxClasses = "px-4 py-2 bg-white border-2 border-blue-500 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors";

  const technicalSkills = [
    "Java", "Spring Framework", "Python", "Flask", "SQL",
    , "MySQL", "PostgreSQL", "MongoDB", "SQLAlchemy", 
    "CI/CD (Jenkins)", "Docker", "Kubernetes", "Kafka", 
    "Monitoring: Grafana", "Logging: Splunk", "Logstash", 
    "Unit Testing", "JUnit", "SonarQube", "Prisma Cloud", 
    "Git Depandabot", "IntelliJ", "Eclipse", "STS", 
    "VS Code", "Postman", "Swagger", "SQL Developer", 
    "PgAdmin", "WinSCP", "Git", "GitHub","Maven"
  ];

  const productSkills = [
    "MVP Development", "GTM Strategy", "Risk Analysis", 
    "KPI Analysis", "Roadmap Prioritization", "Customer Development", 
    "User Interviews", "User Journey Mapping", "Usability Testing", 
    "JTBD Framework", "Wireframing (Figma, Balsamiq)", 
    "Brand Storytelling", "JIRA", "Rally", "Agile (Scrum, Kanban)"
  ];

  const coreSkills = [
    "System Design", "OOPs concepts", "Product Development", 
    "DBMS", "Software Engineering"
  ];

  const displayedTechnical = showAllTechnical ? technicalSkills : technicalSkills.slice(0, 8);
  const displayedProduct = showAllProduct ? productSkills : productSkills.slice(0, 6);
  const displayedCore = showAllCore ? coreSkills : coreSkills.slice(0, 5);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">About Me</h1>
      {/* <p className="text-lg max-w-4xl mx-auto text-center mb-10">
        A passionate and driven professional aspiring to excel in the field of
        technical Product Management, blending technical expertise and strategic
        thinking to deliver impactful solutions. With a strong foundation in
        backend technologies, including SQL, Java (Spring Framework), and
        Python, I bring a unique perspective to solving business challenges and
        aligning product roadmaps with organizational goals.
      </p> */}

      <h2 className="text-2xl font-bold text-black mb-4">Skills & Core Strengths</h2>
      {/* Technical Skills
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-black mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Java", "Spring Framework", "Python", "Flask", "SQL",
            "Maven", "MySQL", "PostgreSQL", "MongoDB", "SQLAlchemy", "CI/CD (Jenkins)", "Docker",
            "Kubernetes", "Kafka", "Monitoring: Grafana", "Logging: Splunk", "Logstash", "Unit Testing",
            "JUnit", "SonarQube", "Prisma Cloud", "Git Depandabot",
            "IntelliJ", "Eclipse", "STS", "VS Code", "Postman", "Swagger", "SQL Developer", "PgAdmin", "WinSCP",
            "Git", "GitHub",
          ].map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold text-black mb-4">Product & Process Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "MVP Development", "GTM Strategy",
            "Risk Analysis", "KPI Analysis",
            "Roadmap Prioritization",
            "Customer Development", "User Interviews", "User Journey Mapping", "Usability Testing", "JTBD Framework",
            "Wireframing (Figma, Balsamiq)", "Brand Storytelling",
            "JIRA", "Rally", "Agile (Scrum, Kanban)",
          ].map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-black mb-4">Core Concepts</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "System Design", "OOPs concepts", "Product Developemet", "DBMS", "Software Engineering"
          ].map((concept) => (
            <div key={concept} className={skillBoxClasses}>{concept}</div>
          ))}
        </div>
      </section> */}
      
  
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Core Strengths</h2>

      {/* Technical Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-black mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4 mb-3">
          {displayedTechnical.map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
        {technicalSkills.length > 8 && (
          <button
            onClick={() => setShowAllTechnical(!showAllTechnical)}
            className="!bg-blue-600 hover:bg-blue-700 text-white !text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            {showAllTechnical ? '− Show Less' : `+ Show ${technicalSkills.length - 8} More`}
          </button>
        )}
      </section>

      {/* Product & Process Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-black mb-4">Product & Process Skills</h3>
        <div className="flex flex-wrap gap-4 mb-3">
          {displayedProduct.map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
        {productSkills.length > 6 && (
          <button
            onClick={() => setShowAllProduct(!showAllProduct)}
            className="!bg-blue-600 hover:bg-blue-700 text-white !text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            {showAllProduct ? '− Show Less' : `+ Show ${productSkills.length - 6} More`}
          </button>
        )}
      </section>

      {/* Core Concepts */}
      <section>
        <h3 className="text-xl font-semibold text-black mb-4">Core Concepts</h3>
        <div className="flex flex-wrap gap-4">
          {displayedCore.map((concept) => (
            <div key={concept} className={skillBoxClasses}>{concept}</div>
          ))}
        </div>
      </section>
    </div>

      <AboutTimeline />

      <h2 className="text-2xl font-bold text-black mb-4">Awards and Nominations</h2>

      <div className="mb-5">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {[
            {
              img: "/Awards/Innoquest.jpg",
              alt: "Innoquest Award",
              title: "Second Runner-Up",
              subtitle: "2025 Innoquest",
              org: "Shoemaker Innovation Center",
            },
            {
              img: "/Awards/VernonClapp.jpeg",
              alt: "Vernon Clapp Award",
              title: "Semifinalist",
              subtitle: "2025 Vernon Clapp Idea Competition",
              org: "Kelley School of Business",
            },
            {
              img: "/Awards/Crossroads.webp",
              alt: "Crossroads Award",
              title: "Semifinalist",
              subtitle: "2025 Crossroads Idea Competition",
              org: "The Mill",
            },
            {
              img: "/Awards/optum.png",
              alt: "Optum Award",
              title: "Team Spot Award",
              subtitle: "Optum, Team Gamma",
              org: "UnitedHealth Group",
            },
            {
              img: "/Awards/IEEE.png",
              alt: "IEEE Award",
              title: "Certificate of Achievement",
              subtitle: "IEEE Secretary Role",
              org: "Student Chapter",
            },
            {
              img: "/Awards/Distinction.png",
              alt: "University Distinction",
              title: "University Distinction",
              subtitle: "B.Tech Thesis published",
              org: "Network-on-Chip (NoC) Systems",
            },
          ].map((award, idx) => (
            <div
        key={idx}
        className="flex-shrink-0 w-64 bg-white border border-blue-200 rounded-lg shadow-md snap-start flex flex-col"
      >
        {/* Image section - fixed height, centered image */}
        <div className="h-48 flex items-center justify-center bg-gray-50 border-b border-blue-100">
          <Image
            src={award.img}
            alt={award.alt}
            width={200}
            height={200}
            className="object-contain max-h-full max-w-full p-2"
          />
        </div>

        {/* Text section - sticks to bottom */}
        <div className="flex flex-col flex-grow justify-end items-center text-center p-4">
          <h3 className="text-base font-semibold text-blue-600 mb-1">{award.title}</h3>
          <p className="text-sm text-gray-600 mb-0">{award.subtitle}</p>
          <p className="text-xs text-gray-500">{award.org}</p>
        </div>
      </div>

          ))}
        </div>
      </div>

    </div>
  );
};

export default About;

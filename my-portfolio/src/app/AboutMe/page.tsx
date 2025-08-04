import React from "react";
import AboutTimeline from '../components/timeline';
const skillBoxClasses = "bg-white text-[#761180] shadow-md rounded-2xl px-4 py-2 text-sm font-medium";

const About = () => {
  return (
    <div className="px-8 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <p className="text-lg max-w-4xl mx-auto text-center mb-10">
        A passionate and driven professional aspiring to excel in the field of
        technical Product Management, blending technical expertise and strategic
        thinking to deliver impactful solutions. With a strong foundation in
        backend technologies, including SQL, Java (Spring Framework), and
        Python, I bring a unique perspective to solving business challenges and
        aligning product roadmaps with organizational goals.
      </p>

      <h1 className="text-4xl font-bold text-gray-600 mb-4">Skills & Core Strengths</h1>
      {/* Technical Skills */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-[#761180] mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "SQL", "Java", "Spring Framework", "Python", "Flask",
            "RESTful API", "Jenkins", "Docker", "Git", "GitHub",
            "Postman"
          ].map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
      </section>

      {/* Product & Process Skills */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-[#761180] mb-4">Product & Process Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "MVP Development", "Customer Development",
            "Wireframing (Balsamiq, Figma)",
            "Risk Analysis", "KPI Analysis","JIRA", "Rally", "Agile"
          ].map((skill) => (
            <div key={skill} className={skillBoxClasses}>{skill}</div>
          ))}
        </div>
      </section>

      {/* Core CS Concepts */}
      <section>
        <h3 className="text-2xl font-semibold text-[#761180] mb-4">Core Concepts</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "DSA", "DBMS", "System Design",
            "Product Development", "Software Engineering"
          ].map((concept) => (
            <div key={concept} className={skillBoxClasses}>{concept}</div>
          ))}
        </div>
      </section>

      <AboutTimeline />

      <h1 className="text-4xl font-bold text-gray-600 mb-4" >Awards and Nominations</h1>
      <div className="mb-10 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 bg-white">
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><strong>Second Runner-Up</strong> – 2025 Innoquest, Shoemaker Innovation Center</li>
          <li><strong>Semifinalist</strong> – 2025 Vernon Clapp Idea Competition, Kelley School of Business</li>
          <li><strong>Semifinalist</strong> – 2025 Crossroads Idea Competition, The Mill</li>
          <li><strong>Team Spot Award</strong> – Optum, Team Gamma</li>
          <li><strong>Certificate of Achievement</strong> – IEEE Secretary Role</li>
          <li><strong>University Distinction</strong> – B.Tech Thesis published on Network-on-Chip (NoC) Systems</li>
        </ul>

      </div>
    </div>
  );
};

export default About;

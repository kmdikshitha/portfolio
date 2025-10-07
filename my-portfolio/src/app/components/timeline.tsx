// 'use client';

// import React from 'react';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { Briefcase, GraduationCap, Award } from 'lucide-react';

// const AboutTimeline = () => {
//   return (
//     <>
//     <h1 className="text-4xl font-bold text-gray-600 mt-6 mb-4">Education</h1>
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="2024 – 2026"
//         icon={<GraduationCap />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">Indiana University Bloomington</h3>
//         <p>Master’s in Computer Science</p>
//         <p>
//           CGPA: 4.00. 
//         </p>
//         <p>
//         Courses: Software Engineering I & II, Applied Algorithms, Advanced DB Systems.
//         </p>

//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="2018 – 2022"
//         icon={<GraduationCap />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">B.Tech ECE – Amrita School of Engineering</h3>
//         <p>Bachelors in Electronics and Communication Engineering</p>
//         <p>
//           CGPA: 8.91 - University Distinction Holder
//         </p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>

//     <h1 className="text-4xl font-bold text-gray-600 mb-4">Experience</h1>
//     <VerticalTimeline className='mb-8'>

//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="Aug 2025 – Present"
//         icon={<Briefcase />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">Teaching Assistant</h3>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Guiding students in software engineering concepts including configuration management, CI/CD, containerization, virtualization, application security, and data networking.</li>
//           <li>Supporting course delivery through project-based learning, grading, and feedback.</li>
//           <li>Assisting students in software design, testing, documentation, and distributed deployment.</li>
//         </ul>
//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="Aug 2025 – Present"
//         icon={<Briefcase />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">Shoemaker Innovation Center - Technical Specialist</h3>
//         <p className='mb-2'>Student-focused source for creative & effective approaches to supporting technology innovation & entrepreneurship.</p>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Serving as a key liaison between startup founders and technical resources, delivering tailored software solutions to evolving project needs.</li>
//           <li>Evaluating system requirements and recommending optimal frameworks, programming stacks, and deployment architectures.</li>
//           <li>Advising on scalability, security, and integration strategies to enable robust, production-ready applications.</li>
//         </ul>
//       </VerticalTimelineElement>


//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="Aug 2025 – Present"
//         icon={<Briefcase />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">Learn2Switch — Full Stack Product Manager</h3>
//         <p className='mb-2'>An EdTech platform delivering a serious game to teach employability and emotional regulation to high schoolers (grades 9–12).</p>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Collaborating with school districts to understand requirements and enable secure, role-based access for students, teachers, parents, and advisors using Clever API.</li>
//           <li>Designing and implementing full-stack dashboards from scratch, including backend APIs, database integration, and frontend architecture using React and Next.js.</li>
//           <li>Driving product decisions by analyzing data visibility, prioritizing features, and ensuring actionable insights for end-users.</li>
//         </ul>
//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="June 2025- Aug 2025"
//         icon={<Briefcase />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">The Mill - Startup Founder cohort</h3>
//         <p>
//           Bloomington's hub for coworking and startups.
//         </p>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Designed and implemented the initial backend architecture using Spring Boot, building scalable, stateless RESTful APIs for identity verification (employment, address, identity).</li>
//           <li>Set up and structured the Git repository, establishing modular organization, coding standards, and version control best practices.</li>
//           <li>Contributed to the development of Credify, a blockchain-based credibility verification platform, leading backend execution while collaborating on product strategy and user flows.</li>
//           <li>Conducted customer discovery and defined the Ideal Customer Profile (ICP) to validate problem-solution fit.</li>
//           <li>Supported MVP prototyping using tools like Lovable and Cursor, testing workflows and validating front-end interactions.</li>
//           <li>Co-presented at Demo Day, showcasing backend implementation, product vision, and business potential to mentors, VCs, and ecosystem stakeholders.</li>
//         </ul>
//       </VerticalTimelineElement>


//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="2022 – 2024"
//         icon={<Briefcase />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">Optum – UnitedHealth Group — Software Engineer</h3>
//         <p>
//           A leading health services and innovation company.
//         </p>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Built scalable RESTful APIs using Spring Boot to deliver healthcare data to UHC and Anthem, increasing accessibility by 25%.</li>
//           <li>Wrote optimized Spring JPA and batch queries via JDBC, reducing DB latency by 20%.</li>
//           <li>Automated CI/CD pipelines with Jenkins, boosting development speed and team agility.</li>
//           <li>Drove high test coverage (95%) using JUnit for backend services.</li>
//           <li>Proactively fixed vulnerabilities via SonarQube, GitHub Dependabot, and Prisma Cloud.</li>
//           <li>Collaborated in Agile ceremonies, mentored junior developers, and ensured high delivery velocity.</li>
//         </ul>
//       </VerticalTimelineElement>

//       <VerticalTimelineElement
//         contentStyle={{ background: '#761180', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  #761180' }}
//         date="2018 – 2021"
//         icon={<Award />}
//         iconStyle={{ background: '#761180', color: '#fff' }}
//       >
//         <h3 className="text-xl font-semibold">IEEE Student Chapter – Secretary & Executive Member</h3>
//         <p>
//          A professional student chapter fostering technical growth and collaboration.
//         </p>
//         <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
//           <li>Organized IEEE YESIST12, 5G Summit, and IEEE CONNECT, facilitating student-industry engagement.</li>
//           <li>Led initiatives such as Python Bootcamps, Embedded Systems Talks, and IEEE XTREME programming contests.</li>
//           <li>Launched the IEEE SIGHT (Special Interest Group on Humanitarian Technology) student branch.</li>
//           <li>Partnered with Region 10 IEEE chapters to run large-scale conferences and innovation challenges.</li>
//         </ul>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//     </>
//   );
// };

// export default AboutTimeline;
'use client';

import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const TimelineSection = () => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-black mt-8 mb-6">Education</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 border border-blue-200 flex justify-between">
        <div className="w-2/4 flex-shrink-0">
          <Image
            src="/Education/IndianaUniversity.jpg"
            alt="Indiana University"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/4 p-8">
          <h3 className="text-xl font-bold mb-4">Master of Science in Computer Science</h3>
          <div className="flex items-center gap-6 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <span>Indiana University Bloomington</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Bloomington, IN</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <span>2024 - 2026</span>
            </div>
            <div className="bg-gray-100 px-4 py-1 rounded-full">
              <span className="font-semibold">GPA: 4.0/4.0</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Software Engineering I & II</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Applied Algorithms</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Advanced DB Systems</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Product Development</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">System Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200 flex justify-between">
      <div className="w-2/4 flex-shrink-0">
          <Image
            src="/Education/grad.jpg"
            alt="Amrita School of Engineering"
            width={400}
            height={400}
            className="w-full h-full object-cover"            />
        </div>
        <div className="w-2/4 p-8 mb-4">
          <h3 className="text-xl font-semibold mb-2">Bachelors in Electronics and Communication Engineering</h3>
          <div className="flex items-center gap-6 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <span>Amrita School of Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Banglore, KA</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <span>2018 - 2022</span>
            </div>
            <div className="bg-gray-100 px-4 py-1 rounded-full">
              <span className="font-semibold">GPA: 8.91/10.0</span>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-black mt-8 mb-6">Experience</h2>
      <VerticalTimeline layout="1-column-left">
        {/* Teaching Assistant */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Briefcase />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Technical Assistant</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">Luddy School of Informatics Computing and Engineering</p>
              <p className="text-sm text-gray-500">Aug 2025 – Present</p>
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Guiding students in CSCI-P 465/565: Software Engineering, covering core topics such as configuration
            management, CI/CD pipelines, containerization, virtualization, application security,
            data networking, software design, testing, documentation, and distributed deployment.
            Supported course delivery through project-based learning, grading, and personalized feedback to
            enhance students’ practical understanding of modern software engineering practices.
          </p>
          {/* Metrics */}
          <div className="flex items-center gap-2">
            {[
              { value: "90+", label: "Students" },
              { value: "3", label: "Student Teams" },
              { value: "1", label: "Final Project" },
              { value: "15", label: "Exercises" },
              { value: "14", label: "Assignments" },
              { value: "6", label: "Quizzes" },
              { value: "14", label: "Standups" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-wrap gap-6 mt-4 text-gray-700">
                  <div>
                    <div className="text-lg font-bold text-blue-600">{item.value}</div>
                    <div className="text-xs text-gray-600">{item.label}</div>
                  </div>
                </div>
            ))}
          </div>
        </VerticalTimelineElement>

        {/* Shoemaker Innovation Center */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Briefcase />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Technical Specialist</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">Shoemaker Innovation Center</p>
              <p className="text-sm text-gray-500">Aug 2025 – Present</p>
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Guiding students in a startup incubator competition to define MVPs, validate product-market fit, and
            develop go-to-market strategies. Leading the ChengWu Build Clinic to transform early-stage ideas
            into structured product requirements aligning design, engineering, and business goals.
          </p>
          <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">60+</div>
                <div className="text-xs text-gray-600">Students Guided</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">3+</div>
                <div className="text-xs text-gray-600">Early/mid-stage startups consulatation</div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Learn2Switch */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Briefcase />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Full stack Product Manager</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">Learn2Switch</p>
              <p className="text-sm text-gray-500">Aug 2025 – Present</p>
            </div>
          </div>          
          <p className="mb-4 text-gray-700">
            Spearheading product strategy for an EdTech gaming platform
            enhancing high school student engagement beyond traditional learning.
            Designing an analytics ecosystem with role-based dashboards to track and improve soft skills development.          </p>
            <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">35%</div>
                <div className="text-xs text-gray-600">Higher Engagement</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">5</div>
                <div className="text-xs text-gray-600">Dashboards Built</div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Startup Founder Cohort */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Briefcase />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">StartUp Summer Founder Cohort</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">The Mill</p>
              <p className="text-sm text-gray-500">Jun 2025 – Aug 2025</p>
            </div>
          </div> 
          <p className="mb-4 text-gray-700">
            Founding team member of Credify, a blockchain-based platform,
            driving the product from concept to functional prototype through structured discovery.
            Led user research, defined MVP features, validated technical feasibility, and designed core user journeys while shaping the go-to-market strategy and product vision.          </p>
            <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">50+</div>
                <div className="text-xs text-gray-600">Survey Results</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">10+</div>
                <div className="text-xs text-gray-600">User Interviews</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">15+</div>
                <div className="text-xs text-gray-600">Investors Reached</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">5+</div>
                <div className="text-xs text-gray-600">Blockchain experts</div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Optum */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Briefcase />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">Optum UHG</p>
              <p className="text-sm text-gray-500">2022 – 2024</p>
            </div>
          </div>          <p className="mb-4 text-gray-700">
            Designed and implemented a scalable back-end platform using RESTful web services and Spring to deliver healthcare data to major providers.
            Integrated Java services with databases, automated CI/CD pipelines, and containerized microservices for efficient deployment. Developed comprehensive tests, enhanced security across repositories, and collaborated in Agile teams while mentoring junior engineers to improve overall team performance.
          </p>
          {/* Metrics row like screenshot */}
          <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">25%</div>
                <div className="text-xs text-gray-600">Data Accessibility</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">20%</div>
                <div className="text-xs text-gray-600">DB Latency</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">95%</div>
                <div className="text-xs text-gray-600">Test Coverage</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">100+</div>
                <div className="text-xs text-gray-600">Vulnerabilities Fixed</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">15</div>
                <div className="text-xs text-gray-600">Repos</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-bold text-blue-600">2</div>
                <div className="text-xs text-gray-600">Juniors Mentored</div>
              </div>
            </div>
          </div>

        </VerticalTimelineElement>

        {/* IEEE */}
        <VerticalTimelineElement
          contentStyle={{ background: '#ffffff', color: '#000', border: '2px solid #1D4ED8' }}
          contentArrowStyle={{ borderRight: '7px solid #1D4ED8' }}
          icon={<Award />}
          iconStyle={{ background: '#1D4ED8', color: '#fff' }}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Secretary/Executive</h3>
            <div className="text-right  leading-tight space-y-0">
              <p className="font-medium">IEEE Student Branch</p>
              <p className="text-sm text-gray-500">2018 – 2021</p>
            </div>
          </div> 
            <p className="mb-4 text-gray-700">
            Organized global conferences and bootcamps, launched IEEE SIGHT, and fostered industry–student engagement.
          </p>
          <div className="flex items-center gap-2">
            {[
              { value: "10+", label: "Events" },
              { value: "3", label: "Conferences" },
              { value: "1", label: "Chapter Launch" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-wrap gap-6 mt-4 text-gray-700">
                <div>
                <div className="text-lg font-bold text-blue-600">{item.value}</div>
                <div className="text-xs text-gray-600">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>

  );
};

export default TimelineSection;

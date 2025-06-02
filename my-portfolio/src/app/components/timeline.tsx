'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutTimeline = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-gray-600 mt-6 mb-4">Education</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: '#761180', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #761180' }}
        date="2024 – 2026"
        icon={<GraduationCap />}
        iconStyle={{ background: '#761180', color: '#fff' }}
      >
        <h3 className="text-xl font-semibold">Indiana University Bloomington</h3>
        <p>Master’s in Computer Science</p>
        <p>
          CGPA: 4.00. 
        </p>
        <p>
        Courses: Software Engineering I & II, Applied Algorithms, Advanced DB Systems.
        </p>

      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#761180', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #761180' }}
        date="2018 – 2022"
        icon={<GraduationCap />}
        iconStyle={{ background: '#761180', color: '#fff' }}
      >
        <h3 className="text-xl font-semibold">B.Tech ECE – Amrita School of Engineering</h3>
        <p>Bachelors in Electronics and Communication Engineering</p>
        <p>
          CGPA: 8.91 - University Distinction Holder
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>

    <h1 className="text-4xl font-bold text-gray-600 mb-4">Experience</h1>
    <VerticalTimeline className='mb-8'>
      <VerticalTimelineElement
        contentStyle={{ background: '#761180', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #761180' }}
        date="2025 – Present"
        icon={<Briefcase />}
        iconStyle={{ background: '#761180', color: '#fff' }}
      >
        <h3 className="text-xl font-semibold">Learn2Switch — Backend Developer / TPM</h3>
        <p className='mb-2'>An EdTech platform delivering a serious game to teach employability and emotional regulation to high schoolers (grades 9–12).</p>
        <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
          <li>Designed architectural diagrams, authored sprint specifications, and facilitated system integration between Unity 3D and BigQuery.</li>
          <li>Enabled secure school-based sessions through Clever, a single sign-on platform adopted by K–12 institutions across the U.S.</li>
          <li>Acted as a bridge between product and engineering teams, ensuring on-time delivery of core infrastructure.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#761180', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #761180' }}
        date="2022 – 2024"
        icon={<Briefcase />}
        iconStyle={{ background: '#761180', color: '#fff' }}
      >
        <h3 className="text-xl font-semibold">Optum – UnitedHealth Group — Software Engineer</h3>
        <p>
          A leading health services and innovation company.
        </p>
        <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
          <li>Built scalable RESTful APIs using Spring Boot to deliver healthcare data to UHC and Anthem, increasing accessibility by 25%.</li>
          <li>Wrote optimized Spring JPA and batch queries via JDBC, reducing DB latency by 20%.</li>
          <li>Automated CI/CD pipelines with Jenkins, boosting development speed and team agility.</li>
          <li>Drove high test coverage (95%) using JUnit for backend services.</li>
          <li>Proactively fixed vulnerabilities via SonarQube, GitHub Dependabot, and Prisma Cloud.</li>
          <li>Collaborated in Agile ceremonies, mentored junior developers, and ensured high delivery velocity.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#761180', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #761180' }}
        date="2018 – 2021"
        icon={<Award />}
        iconStyle={{ background: '#1f2937', color: '#fff' }}
      >
        <h3 className="text-xl font-semibold">IEEE Student Chapter – Secretary & Executive Member</h3>
        <p>
         A professional student chapter fostering technical growth and collaboration.
        </p>
        <ul className="list-disc list-inside text-lg #fff mb-6 space-y-2">
          <li>Organized IEEE YESIST12, 5G Summit, and IEEE CONNECT, facilitating student-industry engagement.</li>
          <li>Led initiatives such as Python Bootcamps, Embedded Systems Talks, and IEEE XTREME programming contests.</li>
          <li>Launched the IEEE SIGHT (Special Interest Group on Humanitarian Technology) student branch.</li>
          <li>Partnered with Region 10 IEEE chapters to run large-scale conferences and innovation challenges.</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </>
  );
};

export default AboutTimeline;

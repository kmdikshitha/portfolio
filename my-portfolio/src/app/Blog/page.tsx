import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    title: 'How Codebases Evolve with Architecture',
    slug: 'systemDesign',
    thumbnail: '/blog/thumbnail/systemDesign.jpg',
    excerpt: `System design is more than a buzzword — it reflects how your codebase scales, modularizes, and adapts. Learn how companies transition from monoliths to microservices and serverless.`,
    category: 'technical'
  },
  {
    title: 'REST in Pieces: Breaking Down the API That Talks for You',
    slug: 'rest',
    thumbnail: '/blog/thumbnail/rest.jpg',
    excerpt: `Before jumping into the technical jargon, for all the students out there — think about your college project where you had a frontend built in React and a backend in Java Spring Boot.`,
    category: 'technical'
  },
    {
    title: 'The Leadership Journey: From Ancient Wisdom to Modern Innovation',
    slug: 'leadership',
    thumbnail: '/blog/thumbnail/leadership.jpeg',
    excerpt: `Picture this: You're in a high-stakes product meeting. Deadlines are looming, stakeholders are pressuring for features, and your team is showing signs of burnout. At that moment, do you`,
    category: 'softskills'
  },
    {
    title: 'Introduction to Spring Framework',
    slug: 'springIntro',
    thumbnail: '/blog/thumbnail/springIntro.png',
    excerpt: `Spring was the first backend framework I used at my first company.And like many developers, I was confused by annotations like @RestController, @Autowired, or @Entity`,
    category: 'technical'
  },
    {
    title: 'Bonus: Must know Spring Annotations',
    slug: 'springAnnotation',
    thumbnail: '/blog/thumbnail/springannotation.png',
    excerpt: `Before diving into different modules of Spring. Let us first understand some important spring annotations and why are they used.`,
    category: 'technical'
  },
    {
    title: 'Spring Core: The Heart of Spring',
    slug: 'springCore',
    thumbnail: '/blog/thumbnail/BeanLifecycle.png',
    excerpt: `When we talk about Spring, we often mention annotations like @Autowired, @Component, and @Service. But behind these lies the true power of the Spring ecosystem: Spring Core`,
    category: 'technical'
  },
      {
    title: 'Spring MVC: Your Gateway to Web Development',
    slug: 'springMvc',
    thumbnail: '/blog/thumbnail/SpringMVC.png',
    excerpt: `Remember when we talked about Spring Core and how it manages your application's components like a smart container?`,
    category: 'technical'
  },       {
    title: 'Spring Boot: The Engine Behind Modern Spring Apps',
    slug: 'springboot',
    thumbnail: '/blog/thumbnail/springboot.png',
    excerpt: `Imagine you're setting up a new kitchen. In the old days (traditional Spring MVC), you had to`,
    category: 'technical'
  },  {
    title: 'Spring JDBC: Hands-On with JdbcTemplate and SQL Integration',
    slug: 'springjdbc',
    thumbnail: '/blog/thumbnail/springjdbc.png',
    excerpt: `Remember in our previous Spring Boot adventure where we built that awesome REST API? Well, we stored data in memory, which was great for learning but... what happens when your server restarts? Poof! All your data vanishes like morning dew. Not exactly what your boss wants to hear on Monday morning, right?`,
    category: 'technical'
  },{
    title: 'Spring Data JPA Explained: Mastering Repositories and Entity Mapping',
    slug: 'springjpa',
    thumbnail: '/blog/thumbnail/springjpa.png',
    excerpt: `In our previous exploration, we dove deep into JDBC and learned how to connect directly with databases using raw SQL queries. You experienced the power of having complete control over your database operations, but you also felt the weight of writing repetitive boilerplate code for every single database interaction.`,
    category: 'technical'
  },
  {
    title: 'Spring Security: Your First Corporate Security Adventure',
    slug: 'springsecurity',
    thumbnail: '/blog/thumbnail/springsecurity.png',
    excerpt: `Picture this: You've just landed your first job at a tech company, and your manager asks you to "add some security to the user login feature." You might be thinking, "Security? Isn't that just checking if the password is correct?" Well, buckle up! We're about to embark on a journey through Spring Security that`,
    category: 'technical'
  },
  {
    title: 'AOP & Transactions – Cross-Cutting Concerns',
    slug: 'springAspect',
    thumbnail: '/blog/thumbnail/springaspect.png',
    excerpt: `In our previous exploration of Spring Security, MVP patterns, and Spring Boot fundamentals, we built a solid foundation for enterprise application development. Now, as you step into the corporate world, you'll quickly discover that real-world applications have needs that go beyond simple request-response cycles.`,
    category: 'technical'
  },
    {
    title: 'Messaging & Scheduling – Kafka, RabbitMQ, Cron Jobs',
    slug: 'springKafka',
    thumbnail: '/blog/thumbnail/springkafka.png',
    excerpt: `In our previous discussions, we explored how Spring AOP helps us handle cross-cutting concerns like logging and security, how Spring Security protects our applications, and how Spring Boot simplifies our development with its opinionated defaults and MVP approach. Now, let's dive into a crucial aspect of enterpr`,
    category: 'technical'
  },{
    title: 'Testing in Spring – Unit & Integration Testing with Mocks',
    slug: 'springTest',
    thumbnail: '/blog/thumbnail/springtest.png',
    excerpt: `The Final Chapter of Your Spring Journey

Welcome back to our Spring exploration! We've traveled through the foundational concepts of Spring AOP (learning how to weave cross-cutting concerns), dived into Kafka for event-driven architectures, secured our applications with robust authentication mechanisms, implemented MVP patterns for clean architecture, and leveraged`,
    category: 'technical'
  }

  // Add more blogs here as needed
];
export default function BlogListPage() {
  return (
    <div className="relative p-10 min-h-screen">
      {/* Purplish-blue radial gradient background */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 69, 255, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%)'
        }}
      ></div>
      
      <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#761180]">
        Breaking Corporate Lingo — One Thought at a Time
      </h1>
      {/* <p className="text-center text-lg max-w-3xl mx-auto text-[#761180] mb-12">
        When I first stepped into the world of software development, I came from a completely different background. I didn&apos;t own a GitHub repo. I hadn&apos;t contributed to a project. All I had was a basic understanding of DSA (as expected in interviews) and a deep curiosity for technology. What I wasn&apos;t prepared for was how much of the tech industry runs on context, not just code — system design conversations that felt like Greek, product meetings full of acronyms, and unspoken expectations that no one explained.
        <br /><br />
        This blog is for anyone who&apos;s been in those shoes — transitioning into tech, navigating the jargon, or trying to connect the dots between code, systems, and strategy. Through a mix of dev topics, product thinking, and soft skills, I break down how things actually work in corporate: how systems are designed, why decisions are made, and what&apos;s really expected from each hat you wear in a team.
        <br /><br />
        If you&apos;ve ever felt like you were learning the language <em>and</em> the job at the same time — you&apos;re not alone. This space is for simplifying the complex and giving real-world clarity to the ones building tomorrow.
      </p> */}

      <p className="text-center text-sm italic text-gray-600 mt-6 mb-6">
        P.S. — I consider myself a forever student. If you ever spot something I’ve misunderstood or have suggestions to improve the way I explain things, I’d genuinely appreciate your thoughts. You can find my contact details on the Contact Me page — I’m always open to learning, unlearning, and growing through conversations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link href={`/components/blog/${blog.category}/${blog.slug}`} key={blog.slug}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[#761180]">
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-sm">
                  {blog.excerpt} <span className="text-blue-600">Read more...</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

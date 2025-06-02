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
  }
  // Add more blogs here as needed
];

export default function BlogListPage() {
  return (
    <div className="p-10 bg-[#E6DBE9] min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#761180]">
        Breaking Corporate Lingo — One Thought at a Time
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto text-[#761180] mb-12">
        When I first stepped into the world of software development, I came from a completely different background. I didn&apos;t own a GitHub repo. I hadn&apos;t contributed to a project. All I had was a basic understanding of DSA (as expected in interviews) and a deep curiosity for technology. What I wasn&apos;t prepared for was how much of the tech industry runs on context, not just code — system design conversations that felt like Greek, product meetings full of acronyms, and unspoken expectations that no one explained.
        <br /><br />
        This blog is for anyone who&apos;s been in those shoes — transitioning into tech, navigating the jargon, or trying to connect the dots between code, systems, and strategy. Through a mix of dev topics, product thinking, and soft skills, I break down how things actually work in corporate: how systems are designed, why decisions are made, and what&apos;s really expected from each hat you wear in a team.
        <br /><br />
        If you&apos;ve ever felt like you were learning the language <em>and</em> the job at the same time — you&apos;re not alone. This space is for simplifying the complex and giving real-world clarity to the ones building tomorrow.
      </p>

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
  );
}

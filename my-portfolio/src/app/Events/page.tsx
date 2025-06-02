// pages/events.tsx

import Link from "next/link";

const events = [
  {
    title: "Women & Technology Summit",
    host: "IU Center of Excellence for Women & Technology",
    link: "https://www.linkedin.com/posts/dikshitha-km_womensday-ethicaltech-womenintech-activity-7304471028913643521-vjhZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzfu5YBkJUWkOSWv0N1ZBAtPvdBFbDToK0",
  },
  {
    title: "Product-Market Fit Session",
    host: "Stephanie Ragozzino, CPO at OneCause",
    link: "https://www.linkedin.com/posts/dikshitha-km_innovation-entrepreneurship-chengwu-activity-7307732538100264961-mi3r?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzfu5YBkJUWkOSWv0N1ZBAtPvdBFbDToK0",
  },
  {
    title: "2025 Vernon Clapp Competition",
    host: "Kelley School of Business",
    link: "https://www.linkedin.com/posts/dikshitha-km_ideacompetition-vernonclapp2025-kelleyschoolofbusiness-activity-7314484410790096896-KgJ9?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzfu5YBkJUWkOSWv0N1ZBAtPvdBFbDToK0",
  },
  {
    title: "InnoQuest",
    host: "Shoemaker Innovation Center",
    link: "https://www.linkedin.com/posts/dikshitha-km_innoquest-highlights-luddy-students-technological-activity-7321324571054256128-zSsu?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzfu5YBkJUWkOSWv0N1ZBAtPvdBFbDToK0",
  },
  {
    title: "IU Ventures Summit 2025",
    host: "IU Ventures",
    link: "https://www.linkedin.com/posts/dikshitha-km_iuventures-productleadership-vcinsights-activity-7330354858601971712-N4D7?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzfu5YBkJUWkOSWv0N1ZBAtPvdBFbDToK0",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  mb-8">Conferences & Events</h1>
        <p className=" mb-12">
          I actively engage with the innovation and product community through thought-provoking events and summits. Here are some highlights. Full reflections are shared on LinkedIn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-600 mb-4">Hosted by {event.host}</p>
              <Link
                href={event.link}
                target="_blank"
                className="text-indigo-600 hover:underline font-medium"
              >
                Read on LinkedIn →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

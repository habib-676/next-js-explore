export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date
  time?: string; // friendly time string
  location?: string;
  image: string; // path under /images in public
  slug?: string;
  description?: string;
  url?: string;
}

export const events: EventItem[] = [
  {
    id: "nextjs-conf-2026",
    title: "Next.js Conf",
    date: "2026-03-15",
    time: "09:00 AM",
    location: "San Francisco, CA, USA",
    image: "/images/event-full.png",
    slug: "nextjs-conf-2026",
    description:
      "The official Next.js conference with talks, workshops and networking for frontend and full-stack engineers building with Next.js and React.",
    url: "https://nextjs.org/conf",
  },

  {
    id: "react-summit-2026",
    title: "React Summit",
    date: "2026-04-22",
    time: "10:00 AM",
    location: "Amsterdam, Netherlands",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    description:
      "Large international conference focused on React, ecosystem libraries, performance and design systems.",
    url: "https://reactsummit.com",
  },

  {
    id: "jsconf-eu-2026",
    title: "JSConf EU",
    date: "2026-05-12",
    time: "09:30 AM",
    location: "Berlin, Germany",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    description:
      "Community-run JavaScript conference featuring deep technical talks and workshops across the JS ecosystem.",
    url: "https://jsconf.eu",
  },

  {
    id: "nodeconf-2026",
    title: "NodeConf",
    date: "2026-06-20",
    time: "11:00 AM",
    location: "London, UK",
    image: "/images/event3.png",
    slug: "nodeconf-2026",
    description:
      "Conference for Node.js developers covering server-side JavaScript, performance, and tooling.",
    url: "https://nodeconf.com",
  },

  {
    id: "mlh-hackathon-summer-2026",
    title: "MLH Hackathon — Summer",
    date: "2026-07-10",
    time: "05:00 PM",
    location: "Hybrid (Online + Various Campuses)",
    image: "/images/event4.png",
    slug: "mlh-hack-summer-2026",
    description:
      "Multi-location hackathon powered by Major League Hacking: teams build projects, win prizes, and get mentoring.",
    url: "https://mlh.io",
  },

  {
    id: "devtools-meetup-nyc",
    title: "DevTools Meetup — City Chapter",
    date: "2025-12-12",
    time: "06:30 PM",
    location: "Remote / New York, NY",
    image: "/images/event5.png",
    slug: "devtools-meetup-nyc",
    description:
      "Monthly meetup for developer tooling, CI/CD, and observability — lightning talks and networking.",
    url: "https://www.meetup.com/",
  },

  {
    id: "design-systems-summit-2026",
    title: "Design Systems Summit",
    date: "2026-09-03",
    time: "09:00 AM",
    location: "Online",
    image: "/images/event6.png",
    slug: "design-systems-summit-2026",
    description:
      "A focused summit about building, scaling, and maintaining design systems for large teams.",
    url: "https://designsystemssummit.com",
  },
];

export default events;

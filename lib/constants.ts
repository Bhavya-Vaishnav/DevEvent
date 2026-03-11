export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description?: string;
  category?: string;
  mode?: string;
  tags?: string[];
};

export const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Conference", value: "conference" },
  { label: "Hackathon", value: "hackathon" },
  { label: "Meetup", value: "meetup" },
  { label: "Workshop", value: "workshop" },
  { label: "Webinar", value: "webinar" },
] as const;

export const MODES = [
  { label: "All Modes", value: "all" },
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Hybrid", value: "hybrid" },
] as const;

export const SORT_OPTIONS = [
  { label: "Date (Upcoming)", value: "date-asc" },
  { label: "Date (Latest First)", value: "date-desc" },
  { label: "Recently Added", value: "newest" },
  { label: "Category (A-Z)", value: "category" },
] as const;

export const events: Event[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-03-12",
    time: "09:00",
    description: "A major React community conference with talks, workshops, and networking focused on React and the surrounding ecosystem.",
    category: "conference",
    mode: "offline",
    tags: ["react", "javascript", "frontend"],
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-04-21",
    time: "09:30",
    description: "European JavaScript conference covering language features, frameworks, tooling, and large-scale JS architectures.",
    category: "conference",
    mode: "offline",
    tags: ["javascript", "web", "frontend"],
  },
  {
    title: "KubeCon + CloudNativeCon NA 2026",
    image: "/images/event3.png",
    slug: "kubecon-cloudnative-2026",
    location: "San Diego, CA, USA",
    date: "2026-05-05",
    time: "08:30",
    description: "The flagship conference for Kubernetes and cloud native technologies with case studies, training, and community events.",
    category: "conference",
    mode: "hybrid",
    tags: ["kubernetes", "cloud", "devops"],
  },
  {
    title: "PyCon US 2026",
    image: "/images/event4.png",
    slug: "pycon-us-2026",
    location: "Salt Lake City, UT, USA",
    date: "2026-04-15",
    time: "10:00",
    description: "Annual gathering of the Python community: talks, sprints, and workshops for developers and scientists.",
    category: "conference",
    mode: "offline",
    tags: ["python", "data-science", "backend"],
  },
  {
    title: "ETHGlobal Hackathon - Spring 2026",
    image: "/images/event5.png",
    slug: "ethglobal-hack-spring-2026",
    location: "Online / Hybrid",
    date: "2026-06-01",
    time: "12:00",
    description: "A global hackathon for builders in the Web3 / Ethereum ecosystem — workshops, prizes, and mentorship.",
    category: "hackathon",
    mode: "hybrid",
    tags: ["web3", "ethereum", "blockchain"],
  },
  {
    title: "HackMIT 2026",
    image: "/images/event6.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA, USA",
    date: "2026-01-17",
    time: "18:00",
    description: "One of the largest student-run hackathons featuring hardware and software tracks, mentorship, and sponsor challenges.",
    category: "hackathon",
    mode: "offline",
    tags: ["hackathon", "students", "innovation"],
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event-full.png",
    slug: "nextjs-conf-2026",
    location: "London, UK",
    date: "2026-02-10",
    time: "09:00",
    description: "Official Next.js conference for framework updates, performance talks, and real-world use cases.",
    category: "conference",
    mode: "offline",
    tags: ["nextjs", "react", "fullstack"],
  },
];
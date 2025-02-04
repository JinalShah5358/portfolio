import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jinal Shah",
  initials: "JS",
  url: "https://github.com/JinalShah5358", // url
  location: "Gujarat ,India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer Passionate about building custom ERP and CRM solutions that optimize business processes.",
  summary:
    "I am a Senior Software Developer with three years of experience specializing in the MERN stack. I have a strong background in designing and developing custom software solutions, including ERP and CRM systems, tailored to meet business needs. In addition to development, I actively engage with clients to gather requirements, ensuring that the software aligns with their specific needs. With a deep understanding of full-stack development, I focus on building scalable, efficient, and user-friendly applications that optimize business processes.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Next.js",
    "Typescript",
    "MYSQL",
    "Postgres",
    "Git",
    "Github",
    "PHP",
    "Wordpress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jinalshah5358@gmail.com",
    tel: "+91 9409126055",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JinalShah5358",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jinal-shah-23612a218",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/JinalShah5358",
        icon: Icons.x,

        navbar: true,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wa.me/919409126055?text=Hello%20there!",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "jinalshah5358@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ZenDevX Solutions Pvt. Ltd.",
      href: "https://www.zendevx.com/",
      badges: [],
      location: "Remote",
      title: "Sr. Software Developer",
      logoUrl: "/atomic.png",
      start: "May 2022",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/",
      degree: "Master's of Computer Applications (MCA)",
      logoUrl: "https://ignou.samarth.ac.in/uploads/uims/logo.png",
      start: "2024",
      end: "Pursuing",
    },
    {
      school: "Calorx teachers university",
      href: "https://wlu.ca",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/clg.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Hiramani Schools",
      href: "https://www.hiramanischools.org/",
      degree: "GSEB",
      logoUrl: "/buildspace.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Classy Quarters",
      href: "https://chatcollect.com",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A Booking Management System automates scheduling and managing bookings, helping businesses track availability, manage resources, and send reminders. It improves efficiency with real-time booking, payment processing, and customer notifications.",
      technologies: [
        "React.js",
        "Supabase",
        "TailwindCSS",
        "styled Components",
        "React Query",
        "Context API",
      ],
      links: [
        {
          type: "Website",
          href: "https://classy-quarters.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JinalShah5358/classy-quarters ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p1.png",
      video: "",
    },
    {
      title: "Eat n Split",
      href: "https://jinalshah5358.github.io/eat-n-split/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "The Eat and Sleep app helps users track who owes whom, recording debts, amounts, and reasons. It features payment reminders and transaction history to keep debts organized and easily manageable.",
      technologies: ["React.js"],
      links: [
        {
          type: "Website",
          href: "https://jinalshah5358.github.io/eat-n-split/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JinalShah5358/eat-n-split",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p2.png",
      video: "",
    },
    {
      title: "Pizza App",
      href: "https://pizza-app-wheat-delta.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React.js",
        "React-Redux",
        "React-Router-DOM",
        "Vite",
        "TailwindCSS",
        "Context API",
      ],
      links: [
        {
          type: "Website",
          href: "https://pizza-app-wheat-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JinalShah5358/pizza-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p3.png",
      video: "",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [],
} as const;

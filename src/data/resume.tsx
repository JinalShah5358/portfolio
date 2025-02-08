import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jinal Shah",
  initials: "JS",
  url: "https://github.com/JinalShah5358", // url
  location: "Gujarat ,India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-Stack Developer crafting elegant solutions that inspire and deliver value.",
  summary:
    "Senior Software Developer with three years of experience specializing in the MERN stack. I have a strong background in designing and developing custom ERP and CRM solutions tailored to business needs. In addition to full-stack development, I actively collaborate with clients to gather requirements, ensuring the software aligns with their goals. My expertise lies in building scalable, efficient, and user-friendly applications that enhance business processes and drive operational efficiency.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    // "Next.js",
    "TailwindCSS",
    "MUI",
    "Typescript",
    "MYSQL",
    "Postgres",
    "Git",
    "Github",
    "Postman",
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
        url: "mailto:jinalshah5358@gmail.com",
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
      logoUrl: "/zendevx.png",
      start: "May 2022",
      end: "Present",
      description:
        "I’m working as a Senior Software Developer at ZenDevX , Specializing in designing and implementing enterprise solutions tailored to customer needs. My role included close collaboration with clients to deliver customized software that enhanced their business operations",
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
      logoUrl: "/school.png",
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
        "Developed a comprehensive Pizza ordering and tracking application, allowing users to place orders effortlessly and track their delivery status in real-time. The application enhances user experience with a seamless interface, ensuring efficient order management and timely updates.",
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
      title: "World Wise",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "WorldWise is a sophisticated tracking application that maps and records visited places throughout the year, providing a seamless and interactive travel log.",
      technologies: [
        "React.js",
        "React-Router-DOM",
        "react-leaflet",
        "leaflet",
        "vite",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/JinalShah5358/worldwise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/p4.png",
      video: "",
    },
  ],
  projects_Company: [
    {
      title: "Trakerly",
      href: "",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Trackerly, an application designed for tracking employee tasks and providing detailed statistics on project estimations. The tool efficiently monitors task progress, enhances project management, and offers insightful data to optimize project timelines and resource allocation.",
      technologies: [],
      links: [],
      image: "/cp3.png",
      video: "",
    },
    {
      title: "ERP for Valve",
      href: "",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "an ERP system for a valve production company, designed to streamline and optimize the entire process from inquiry management to dispatch. This integrated solution enables efficient tracking, enhances operational workflows, and ensures seamless coordination across various stages of production and delivery.",
      technologies: [],
      links: [],
      image: "/cp2.png",
      video: "",
    },
    {
      title: "CRM for Electrical",
      href: "https://pizza-app-wheat-delta.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        " a CRM system for an electrical contractor to track inquiries, quotations, purchase orders (POs), and dispatches. This solution streamlined workflows and improved efficiency in managing customer interactions and project tasks.",
      technologies: [],
      links: [],
      image: "/cp1.png",
      video: "",
    },
    {
      title: "ERP for Brass Manufacture",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        " an ERP system for a brass manufacturing company to track production processes, maintain stock, and generate statistical reports on store inventory. This system enhanced operational efficiency and inventory management.",
      technologies: [],
      links: [],
      image: "/cp4.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;

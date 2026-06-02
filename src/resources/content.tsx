import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Timotius",
  lastName: "Kelvin",
  name: `Timotius Kelvin`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "timotiusk9@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/timotiuskw",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/timotiuskw/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into a reliable software</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">STI Website</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Open to Work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Timotius, a Fresh Graduate Software Engineer focused on building scalable applications and solving real-world problems through technology.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello, my name is Timotius Kelvin Winarto. I recently graduated with a Bachelor's degree in Informatics Engineering from Dian Nuswantoro University. <br></br><br></br>I am passionate about building modern applications, with experience across frontend, backend, mobile, and full-stack development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Resin Plating Technology",
        timeframe: "Sep 2025 - Feb 2026",
        role: "IT Intern",
        achievements: [
          <>
            Engineered a Realtime Stock System with live inventory tracking and automated early warning alerts to reduce material shortages and improve stock control accuracy.
          </>,
          <>
            Developed a General Affairs Mobile App integrated with Google OCR to auto-fill license plate numbers from captured images for vehicle logging.
          </>,
          <>
            Built the ThreeD System, a secure enterprise data repository with email-based authentication and system-generated dynamic PIN verification to safeguard sensitive corporate information.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/rpt/gambar-2.png",
            alt: "Realtime Stock System",
            width: 20,
            height: 20,
          },
          {
            src: "/images/projects/rpt/gambar-1.jpeg",
            alt: "GA Mobile App",
            width: 6,
            height: 15,
          },
          {
            src: "/images/projects/rpt/gambar-3.jpeg",
            alt: "Realtime Stock System",
            width: 6,
            height: 15,
          },
          {
            src: "/images/projects/rpt/gambar-4.jpeg",
            alt: "GA Mobile App",
            width: 6,
            height: 15,
          },
          {
            src: "/images/projects/rpt/gambar-5.jpeg",
            alt: "Realtime Stock System",
            width: 6,
            height: 15,
          },
          {
            src: "/images/projects/rpt/gambar-6.jpeg",
            alt: "Realtime Stock System",
            width: 6,
            height: 15,
          },
        ],
      },
      {
        company: "Bengkel Koding - Dian Nuswantoro University",
        timeframe: "Sep 2024 - Dec 2025",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed and re-designed Kerja Praktek module for STI (Sarjana Teknik Informatika) website using Next.js.
          </>,
          <>
            Migrated system from Laravel (Monolith) to Next.js to enhance performance and maintainability.
          </>,
        ],
        images: [
          {
            src: "/images/projects/sti/gambar-1.png",
            alt: "STI Koordinator Dashboard",
            width: 20,
            height: 13,
          },
          {
            src: "/images/projects/sti/gambar-2.png",
            alt: "STI Dosen Dashboard",
            width: 15,
            height: 16,
          },
          {
            src: "/images/projects/sti/gambar-3.png",
            alt: "STI Dashboard",
            width: 15,
            height: 16,
          },
        ],
      },
      {
        company: "Assistant - Dian Nuswantoro University",
        timeframe: "Sep 2024 - Dec 2025",
        role: "Teaching Assistant",
        achievements: [
          <>
            Mentored 20+ students in the “Bengkel Koding” course focusing on Flutter development.
          </>,
          <>
            Guided students in building mobile applications and improving problem-solving skills.
          </>,
          <>
            Ensured high course completion rate and strong academic performance.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Dian Nuswantoro University - Semarang",
        description: <>Bachelor's Degree in Informatics Engineering, GPA : 3.82/4.00 (145 credits)</>,
      },
      {
        name: "SMA Theresiana 1 - Semarang",
        description: <>Science Major, Average Grade : 85.86 / 100</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Project Experiences",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

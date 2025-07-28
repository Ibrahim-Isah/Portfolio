import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'isahibn08@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Isah, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Ibrahim-Isah' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/isah-ibrahim' },
    { name: 'hashnode', url: 'https://isahibrahim.hashnode.dev/' },
];

// Education & Certifications Data
export const EDUCATION = {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'University of Jos, Jos',
    grade: 'Second Class Upper (4.03/5.00 CGPA)',
    coursework: [
        'Web Design',
        'Software Engineering',
        'Computer Networking',
        'Operating Systems',
        'Human-Computer Interaction',
    ],
};

export const CERTIFICATIONS = [
    {
        title: 'Certified Fullstack Developer',
        issuer: 'University of Helsinki',
        year: '2024',
    },
    {
        title: 'React with TypeScript',
        issuer: 'TotalTypeScript.com',
        year: '2024',
    },
    {
        title: 'JavaScript Data Structures and Algorithms',
        issuer: 'freeCodeCamp.org',
        year: '2023',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
        {
            name: 'Expo App',
            icon: '/logo/expo.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Material-UI',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'NextJs',
            icon: '/logo/next.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'AWS S3',
            icon: '/logo/aws.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'AgentZane - AI Interview Platform',
        slug: 'ai-interview-platform',
        liveUrl: 'https://agentzane.ai',
        year: 2024,
        description: `
      An innovative AI-powered interview software enabling automated candidate assessments through video and audio calls, AI-driven scoring, and CV analysis for Snaphunt Pte. Ltd. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎥 Real-time Video/Audio Calls: Implemented using LiveKit for seamless interview experiences</li>
        <li>🤖 AI-driven Evaluations: Integrated OpenAI API and Eleven Labs for automated scoring</li>
        <li>� CV Analysis: Python-powered backend for automated resume rating and analysis</li>
        <li>� Structured Feedback: Comprehensive evaluation reports for recruiters</li>
        <li>⚡ Scalable Architecture: Built with React, Next.js, and TypeScript</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Engineered low-latency real-time communication features</li>
        <li>Optimized frontend performance for enterprise-grade scaling</li>
        <li>Implemented modern UI with TailwindCSS for responsive design</li>
        <li>Developed backend integrations for AI processing workflows</li>
      </ul>
      `,
        role: `
      Senior Frontend Developer <br/>
      Key responsibilities:
      <ul>
        <li>🎯 Architecture: Designed scalable frontend architecture with React and TypeScript</li>
        <li>🔗 Integration: Built seamless LiveKit integration for video/audio functionality</li>
        <li>🤖 AI Features: Implemented OpenAI and Eleven Labs API integrations</li>
        <li>🎨 UI/UX: Created intuitive interfaces for both candidates and recruiters</li>
        <li>⚡ Performance: Optimized application for high-performance user experiences</li>
        <li>🔄 Backend: Collaborated on Python backend for AI-driven features</li>
      </ul>
      `,
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'LiveKit',
            'OpenAI API',
            'Eleven Labs',
            'TailwindCSS',
            'Python',
        ],
        thumbnail: '/projects/thumbnail/ai-interview.png',
        longThumbnail: '/projects/thumbnail/ai-interview.png',
        images: [
            '/projects/images/ai-interview-1.PNG',
            '/projects/images/ai-interview-2.PNG',
            '/projects/images/ai-interview-3.PNG',
        ],
    },
    {
        title: 'NEXT BASKET - Multi-Country E-commerce',
        slug: 'next-basket',
        liveUrl: 'https://nextbasket.com',
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'Jest',
            'React Testing Library',
            'TailwindCSS',
            'Microservices',
        ],
        thumbnail: '/projects/thumbnail/next-basket.PNG',
        longThumbnail: '/projects/thumbnail/next-basket.PNG',
        images: [
            '/projects/images/next-basket.PNG',
            '/projects/images/next-basket-1.PNG',
            '/projects/images/next-basket-3.PNG',
        ],
        year: 2024,
        description: `Led the successful expansion of NEXT BASKET e-commerce platform to three new countries (South Africa, Indonesia, and Pakistan), contributing to rapid growth across three continents and reaching millions of users.`,
        role: `Senior Frontend Engineer <br/>
        Key achievements: <br/>
        - 🌍 Spearheaded multi-country platform launch across 3 continents<br/>
        - 📈 Increased test coverage from 70% to 90%+ using Jest and React Testing Library<br/>
        - 🔧 Developed and maintained internal packages for improved code reuse<br/>
        - 👥 Led code review sessions and mentored team members<br/>
        - 🚀 Collaborated with cross-functional teams for timely feature delivery`,
    },
    {
        title: 'Tech Arewa - Community Platform',
        slug: 'tech-arewa',
        liveUrl: 'https://techarewa.vercel.app',
        techStack: [
            'React',
            'Redux',
            'NextJs',
            'JavaScript',
            'Typescript',
            'TailwindCSS',
        ],
        thumbnail: '/projects/thumbnail/techarewa.png',
        longThumbnail: '/projects/long/techarewa.png',
        images: [
            '/projects/images/techarewa-1.PNG',
            '/projects/images/techarewa-2.PNG',
            '/projects/images/techarewa-3.PNG',
        ],
        year: 2023,
        role: `Lead Full‑Stack Engineer & Platform Strategist <br/>
- 🏛 Spearheaded end-to-end architecture and design of a scalable community platform serving Tech Arewa’s regional ecosystem<br/>
- 🔧 Built modular React/Redux UI components using Material‑UI to support dynamic forums, mentorship programs, and analytics dashboards<br/>
- ⚡ Integrated Firebase for real‑time updates, user notifications, login/authentication, and seamless data sync across modules<br/>
- 📈 Engineered for high concurrency—platform designed to support 10K+ users, community discussions, project showcases, and events<br/>
- 📊 Developed admin dashboards and reporting tools to monitor user engagement, content activity, and platform health<br/>
- 🌍 Collaborated closely with Tech Arewa leadership to align product features with goals in digital inclusion, skill‑building, and community networking across Northern Nigeria :contentReference[oaicite:1]{index=1}<br/>
- 🤝 Facilitated integration of events modules to support hackathons, mentorship callouts, and regional tech festivals like Arewa Tech Fest and Ladies4Tech initiatives :contentReference[oaicite:2]{index=2}<br/>
- 🧩 Implemented reusable design system enabling rapid future expansion—ideal for bootcamps, workshops, and scholarship programming like Arewa Rising and Tech Makers :contentReference[oaicite:3]{index=3}`,
        description: `Crafted a high-impact social tech platform designed to elevate Northern Nigeria’s innovation ecosystem. Tech Arewa became a digital backbone powering community learning, mentorship, events, and inclusive growth initiatives. From ideation to deployment, the product scaled to serve tens of thousands—from bootcamp participants to regional startup cohorts—while aligning with broader efforts in scholarship, inclusion, and capacity‑building across Hausa‑speaking youth.`,
    },
    {
        title: 'Realty Central - Property Platform',
        slug: 'realtycentral',
        liveUrl: 'https://realty-central.vercel.app',
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'TailwindCSS',
            'Prisma',
            'MySQL',
            'SEO Optimization',
            'Accessibility',
            'Performance',
        ],
        thumbnail: '/projects/thumbnail/realty-central.png',
        longThumbnail: '/projects/long/realty-central.png',
        images: [
            '/projects/images/realty-central-1.PNG',
            '/projects/images/realty-central-2.PNG',
            '/projects/images/realty-central-3.PNG',
            '/projects/images/realty-central-4.PNG',
        ],
        year: 2022,
        description: `Transformed Realty Central’s digital platform by drastically improving site performance, accessibility, and SEO—elevating the Google Lighthouse score from 45 to 90+, leading to better user experience, search visibility, and engagement.`,
        role: `Lead Frontend Engineer & Product Optimizer <br/>
- 🧠 Led frontend architecture and UI/UX design for an all-in-one real estate platform<br/>
- 🚀 Improved Google Lighthouse scores from 45 to 90+ by optimizing performance, accessibility, and Core Web Vitals<br/>
- 🧩 Built modular, scalable components using React for listing management, CRM, and marketing tools<br/>
- ♿ Ensured full WCAG 2.1 accessibility compliance, making the platform inclusive and legally sound<br/>
- 🔍 Integrated advanced SEO strategies to boost visibility and attract real estate traffic<br/>
- 📈 Collaborated with product stakeholders to align technical solutions with real estate workflows<br/>
- 📱 Delivered a seamless, responsive experience across devices for agents, clients, and admins alike<br/>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Frontend Developer',
        company: 'Snaphunt Pte. Ltd',
        duration: 'Nov 2024 - Present',
        location: 'Singapore (Remote)',
        description:
            'Developing AI-powered interview software with real-time video/audio calls using LiveKit and OpenAI API integration.',
    },
    {
        title: 'Senior Frontend Engineer',
        company: 'NEXT BASKET',
        duration: 'Feb 2024 - Mar 2025',
        location: 'Sofia, Bulgaria (Remote)',
        description:
            'Key role in launching NEXT BASKET in 3 new countries, contributing to millions of users growth.',
    },
    {
        title: 'Software Engineer',
        company: 'ESSL',
        duration: 'Jan 2021 - Feb 2024',
        location: 'Texas, USA (Remote)',
        description:
            'Developed complex web and mobile applications, led JavaScript to TypeScript migration, built chat features for 10K+ daily users.',
    },
    {
        title: 'Frontend Developer',
        company: 'Hubuk Technologies',
        duration: 'Jan 2021 - June 2022',
        location: 'Kano, Nigeria',
        description:
            'Built loan management platform handling 10K+ users, optimized company website improving Lighthouse scores from 45 to 90+.',
    },
];

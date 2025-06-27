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
        title: 'AI-Powered Interview Platform',
        slug: 'ai-interview-platform',
        liveUrl: '#',
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
      Lead Frontend Developer <br/>
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
        thumbnail: '/projects/thumbnail/ai-interview.jpg',
        longThumbnail: '/projects/long/ai-interview.jpg',
        images: [
            '/projects/images/ai-interview-1.png',
            '/projects/images/ai-interview-2.png',
        ],
    },
    {
        title: 'NEXT BASKET - Multi-Country E-commerce',
        slug: 'next-basket',
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'Jest',
            'React Testing Library',
            'TailwindCSS',
            'Microservices',
        ],
        thumbnail: '/projects/thumbnail/next-basket.jpg',
        longThumbnail: '/projects/long/next-basket.jpg',
        images: [
            '/projects/images/next-basket-1.png',
            '/projects/images/next-basket-2.png',
            '/projects/images/next-basket-3.png',
        ],
        liveUrl: '#',
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
        title: 'Enterprise Chat Application',
        slug: 'enterprise-chat',
        techStack: [
            'React Native',
            'WebSocket',
            'TypeScript',
            'Redux',
            'Real-time Communication',
        ],
        thumbnail: '/projects/thumbnail/enterprise-chat.jpg',
        longThumbnail: '/projects/long/enterprise-chat.jpg',
        images: [
            '/projects/images/enterprise-chat-1.png',
            '/projects/images/enterprise-chat-2.png',
            '/projects/images/enterprise-chat-3.png',
        ],
        year: 2023,
        description: `Built a robust chat feature for mobile application handling 50,000+ daily active users with real-time communication capabilities and optimized performance.`,
        role: `Lead Mobile Developer <br/>
        - 💬 Developed chat system serving 10K+ daily active users<br/>
        - ⚡ Reduced message latency by 200ms through WebSocket optimization<br/>
        - 📱 Built with React Native for cross-platform compatibility<br/>
        - 🔄 Implemented efficient state management with Redux<br/>
        - 🛠️ Ensured high availability and real-time message delivery`,
    },
    {
        title: 'Loan Management Platform',
        slug: 'loan-management',
        techStack: ['React', 'Redux', 'Material-UI', 'Firebase', 'JavaScript'],
        thumbnail: '/projects/thumbnail/loan-management.jpg',
        longThumbnail: '/projects/long/loan-management.jpg',
        images: [
            '/projects/images/loan-management-1.png',
            '/projects/images/loan-management-2.png',
            '/projects/images/loan-management-3.png',
        ],
        year: 2022,
        description: `Developed a comprehensive loan management platform from ideation to launch, handling 50,000+ users with scalable architecture and modern UI components.`,
        role: `Full-Stack Developer <br/>
        - 🏦 Built complete loan management system from scratch<br/>
        - 👥 Designed for 10K+ user capacity with scalable architecture<br/>
        - 🎨 Created reusable UI components with Material-UI<br/>
        - 🔥 Integrated Firebase for real-time data management<br/>
        - 📊 Implemented comprehensive user analytics and reporting`,
    },
    {
        title: 'Company Website Optimization',
        slug: 'website-optimization',
        techStack: [
            'React',
            'SEO Optimization',
            'Accessibility',
            'Performance',
        ],
        thumbnail: '/projects/thumbnail/website-optimization.jpg',
        longThumbnail: '/projects/long/website-optimization.jpg',
        images: [
            '/projects/images/website-optimization-1.png',
            '/projects/images/website-optimization-2.png',
        ],
        year: 2022,
        description: `Dramatically improved company website performance and accessibility, achieving Google Lighthouse scores improvement from 45 to 90+ through comprehensive optimization strategies.`,
        role: `Frontend Performance Specialist <br/>
        - 🚀 Improved Lighthouse scores from 45 to 90+<br/>
        - ♿ Enhanced accessibility compliance and user experience<br/>
        - 🔍 Implemented advanced SEO best practices<br/>
        - ⚡ Optimized loading performance and Core Web Vitals<br/>
        - 📱 Ensured responsive design across all device sizes`,
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

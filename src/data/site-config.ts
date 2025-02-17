export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export interface Project {
	name: string;
	link: string;
	description: string;
	techStack: string[];
	accomplishments: string[];
}

export interface Job {
	dateRange: string;
	company: string;
	link: string;
	logo: string;
	logoHeight: number;
	logoWidth: number;
	title: string;
	projects: Project[];
}

export type Link = {
	text: string;
	href: string;
};

export type Hero = {
	title?: string;
	text?: string;
	image?: Image;
	actions?: Link[];
};

export type SiteConfig = {
	logo?: Image;
	title: string;
	subtitle?: string;
	description: string;
	image?: Image;
	headerNavLinks?: Link[];
	footerNavLinks?: Link[];
	socialLinks?: Link[];
	hero?: Hero;
	postsPerPage?: number;
	projectsPerPage?: number;
	jobs?: Job[];
};

const siteConfig: SiteConfig = {
	title: 'Kevin Van Cott',
	subtitle: 'Senior Software Engineer and Open Source Maintainer',
	description: '',
	image: {
		src: '/dante-preview.jpg',
		alt: 'Kevin - Astro.js and Tailwind CSS theme',
	},
	headerNavLinks: [
		{
			text: 'Home',
			href: '/',
		},
		{
			text: 'Timeline',
			href: '/timeline',
		},
		{
			text: 'Projects',
			href: '/projects',
		},
		{
			text: 'Blog',
			href: '/blog',
		},
		{
			text: 'Tags',
			href: '/tags',
		},
	],
	footerNavLinks: [
		{
			text: 'About',
			href: '/about',
		},
		{
			text: 'Contact',
			href: '/contact',
		},
		{
			text: 'Terms',
			href: '/terms',
		},
		{
			text: 'Download theme',
			href: 'https://github.com/JustGoodUI/dante-astro-theme',
		},
	],
	socialLinks: [
		{
			text: 'GitHub',
			href: 'https://github.com/KevinVandy',
		},
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kevinthomasvancott/',
		},
		{
			text: 'BlueSky',
			href: 'https://bsky.app/profile/kevinvancott.dev',
		},
		{
			text: 'X/Twitter',
			href: 'https://twitter.com/KevinVanCott',
		},
		{
			text: 'Instagram',
			href: 'https://instagram.com/kevin.vancott',
		},
	],
	hero: {
		title: 'I care about writing easy to use, and easy to maintain software!',
		text: "I'm **Kevin Van Cott**, a software engineer at <a href='https://www.rentvision.com' target='_blank'>Rent Vision</a> and an open source maintainer for <a href='https://tanstack.com' target='_blank'>TanStack</a>. ",
		image: {
			src: '/profile.jpeg',
			alt: 'Kevin Van Cott',
		},
		actions: [
			{
				text: 'Get in Touch',
				href: '/contact',
			},
		],
	},
	postsPerPage: 8,
	projectsPerPage: 8,
	jobs: [
		{
			dateRange: 'May 2024 - Present',
			company: 'RentVision',
			link: 'https://rentvision.com/',
			logo: '/logos/rentvision.png',
			logoHeight: 100,
			logoWidth: 150,
			title: 'Senior Software Engineer',
			projects: [
				{
					name: 'RentVision Platform',
					link: 'https://www.rentvision.com/solutions/apartment-revenue-management',
					description: 'React Dashboard',
					techStack: ['Java', 'SQL', 'React', 'TypeScript', 'Next.js', 'Material UI', 'Less'],
					accomplishments: [
						'Improving Performance and Scalability of the platform with intelligent caching strategies.',
						'Creating new dashboard data grids and charts.',
					],
				},
				{
					name: 'Apartment Community Sites',
					link: 'https://www.brooksidelincoln.com/',
					description: 'Websites for thousands of apartment communities',
					techStack: ['Java', 'jQuery'],
					accomplishments: [
						'Improving SEO and Core Web Vitals in order to improve user engagement and retention.',
						'Focussing on accessibility improvements to make the websites more inclusive.',
					],
				},
			],
		},
		{
			dateRange: 'May 2022 - Present',
			company: 'TanStack',
			link: 'https://tanstack.com/',
			logo: '/logos/tanstack.png',
			logoHeight: 60,
			logoWidth: 60,
			title: 'Maintainer',
			projects: [
				{
					name: 'TanStack Table',
					link: 'https://tanstack.com/table',
					description: 'React Table',
					techStack: ['React', 'Svelte', 'Vue', 'Angular', 'Solid', 'TypeScript'],
					accomplishments: ['Contributed to the development of the library since 2022', 'Maintainer since 2023'],
				},
			],
		},
		{
			dateRange: 'Feb 2023 - Sept 2023',
			company: 'Manifest Cyber',
			link: 'https://manifestcyber.com/',
			logo: '/logos/manifestcyber.jpg',
			logoHeight: 100,
			logoWidth: 100,
			title: 'Senior Software Engineer',
			projects: [
				{
					name: 'Manifest Cyber App',
					link: 'https://app.manifestcyber.com/',
					description: 'React Dashboard',
					techStack: ['AWS', 'TypeScript', 'React'],
					accomplishments: [],
				},
			],
		},
		{
			dateRange: 'Jan 2022 - Feb 2023',
			company: 'Fusion Medical Staffing',
			link: 'https://fusionmedstaff.com/',
			logo: '/logos/fusion.svg',
			logoHeight: 70,
			logoWidth: 135,
			title: 'Senior Frontend Developer',
			projects: [
				{
					name: 'Fusion Marketplace',
					link: 'https://fusionmarketplace.com/',
					description: 'React Next.js Application with C#.NET Core backends',
					techStack: ['Azure', 'TypeScript', 'React', 'Next.js', 'C#.NET'],
					accomplishments: [
						'Improved SEO by strategically adding structured data for Google rich results for FAQs, job postings, estimated salaries, etc. to improve site search ranking and engagement.',
						'Collaborated with team to move towards full CI/CD by simplifying the git branching strategy, implementing feature flags, and better automating deployment pipelines.',
					],
				},
			],
		},
		{
			dateRange: 'Dec 2020 - March 2022',
			company: 'ALLO Communications',
			link: 'https://allocommunications.com/',
			logo: '/logos/allo.webp',
			logoHeight: 70,
			logoWidth: 135,
			title: 'Software Engineer',
			projects: [
				{
					name: 'ALLO Portals',
					link: 'https://customer.allofiber.org/get-allo',
					description: 'React Applications with AWS AppSync (GraphQL) APIs',
					techStack: ['AWS', 'TypeScript', 'React', 'GraphQL', 'Python'],
					accomplishments: [
						'Architected and re-organized all frontend code into a monorepo structure with Nx to improve code reusability and compatibility across multiple react applications',
						'Designed and developed a new customer portal to sell services to customers.',
						'Built a new admin portal for internal use to manage orders and provide admin tools.',
						'Established unit and end-to-end testing systems with Jest, Cypress, and Postman.',
						'Automated AWS S3 deployment, testing, and security audits with Gitlab Pipelines.',
						'Mentored and pair programmed with other developers to teach best practices, clean code patters, accessibility, and Test-Driven Development (TDD) mindsets.',
					],
				},
			],
		},
		{
			dateRange: 'March 2021 - Dec 2021',
			company: 'Nucamp Coding Bootcamp',
			link: 'https://nucamp.co/community/ne/lincoln',
			logo: '/logos/nucamp.svg',
			logoHeight: 30,
			logoWidth: 135,
			title: 'Coding Instructor',
			projects: [
				{
					name: '',
					description: '',
					link: '',
					techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
					accomplishments: [
						'Teaching weekend online workshops for HTML, CSS, JavaScript, Bootstrap, and React.',
						'Helping students create their first portfolio websites with React and Bootstrap.',
						'Mentoring and advising students as they apply to their first software jobs.',
					],
				},
			],
		},
		{
			dateRange: 'June 2019 - Dec 2020',
			company: 'Talent Plus, Inc',
			link: 'https://talentplus.com/',
			logo: '/logos/talentplus.png',
			logoHeight: 40,
			logoWidth: 180,
			title: 'Software Developer',
			projects: [
				{
					name: 'TalentMine',
					description: 'React App with AWS Node.js Lambdas and Grails Microservices',
					link: 'https://talentmine.com',
					techStack: ['JavaScript', 'React', 'Material UI', 'NodeJS', 'Grails', 'Groovy', 'Elasticsearch'],
					accomplishments: [
						'Created a new heavy lifting back-end processing service to automate integrating up to 100,000 new users at once within a minute to ease new client integrations.',
						'Used Multi-Threading (Thread Pooling) to run computationally expensive groovy backend tasks in parallel that resulted in up to 90% latency improvements.',
						'Used Elasticsearch to index large user datasets and improve data access times.',
						'Developed AWS Lambda Node.js APIs to interact with DynamoDB NoSQL databases.',
						'Continuously developed new front-end features following Material Design Principles.',
					],
				},
				{
					name: 'TalentBank',
					description: 'Grails (Groovy) Web Application with Bootstrap and jQuery',
					link: 'https://core.talentbankonline.com',
					techStack: ['Grails', 'Groovy', 'jQuery', 'Bootstrap', 'MySQL'],
					accomplishments: [
						'Created and maintained Restful APIs in the Grails framework, using GORM and SQL.',
						'Added new front-end features using Groovy Server Pages, Bootstrap, and jQuery.',
					],
				},
				{
					name: 'Formation-UI',
					description: 'React Component Library with Storybook',
					link: 'https://test-formation-ui.netlify.app',
					techStack: ['JavaScript', 'React', 'Material UI', 'Storybook'],
					accomplishments: [
						'Led a new initiative to revamp the front-end development process to focus on code reusability, consistency, accessibility, and to implement an official design system to unify UI/UX between all React applications.',
						'Set up TypeScript, Rollup, Webpack, Babel, and other JS package configurations.',
						"Created reusable React components following React's Composition and Common Abstraction principles and generated thorough documentation with Storybook.",
					],
				},
				{
					name: 'Deepgram Transcription Client',
					link: '',
					description: 'React App with AWS Lambda Node.js APIs',
					techStack: ['TypeScript', 'React', 'Material UI'],
					accomplishments: [
						'Created a new app that integrated with Deepgram automated AI voice recognition to automate recording and transcribing job interviews to enable transcriptionists to quickly correct any inaccuracies before evaluating and grading interviews.',
					],
				},
			],
		},
		{
			dateRange: 'January - June 2019',
			company: 'State of Nebraska',
			link: 'https://dhhs.ne.gov/',
			logo: '/logos/nebraskadhhs.png',
			logoHeight: 50,
			logoWidth: 150,
			title: 'IT Applications Developer',
			projects: [
				{
					name: 'ICHARTS',
					description: 'Java Web Application',
					link: 'https://dhhs-icharts1.ne.gov/iCharts/',
					techStack: ['Java', 'jQuery', 'Tomahawk', 'COBOL', 'DB2'],
					accomplishments: [
						'Upgraded web application from Java 5 to Java 8 and the front-end PrimeFaces libraries.',
						'Refactored the back-end code structure to follow a modern MVC pattern.',
					],
				},
				{
					name: 'RMNPA',
					description: 'Java Web Application',
					link: 'https://dhhs-rmnpa.ne.gov/RMNPAApp/',
					techStack: ['Java', 'jQuery', 'PrimeFaces', 'COBOL', 'DB2'],
					accomplishments: ['Upgraded PDF Generation with Jasper Reports and added new data fields.'],
				},
			],
		},
		{
			dateRange: '2017 - 2019',
			company: 'Southeast Community College',
			link: 'https://www.southeast.edu/computerinformation/',
			logo: '',
			logoHeight: 0,
			logoWidth: 0,
			title: "Associate's, Computer Information Technology",
			projects: [
				{
					name: 'Computer Information Technology Degree',
					link: 'https://www.southeast.edu/computerinformation/',
					description: 'with a focus on PC and Web Development',
					techStack: ['Java', 'C#.NET', 'JavaScript', 'PHP', 'SQL', 'Visual Basic', 'COBOL', 'Matlab'],
					accomplishments: [
						'Object-Oriented Programming skills for building desktop, web and mainframe applications using Java, C#.NET, Visual Basic.NET, PHP, JavaScript, SQL, HTML, CSS, and core Object-Oriented concepts for Agile Development in PC and Web Applications.',
					],
				},
			],
		},
		{
			dateRange: '2015 - 2017',
			company: 'University of Nebraska - Lincoln',
			link: 'https://www.unl.edu/',
			logo: '',
			logoHeight: 0,
			logoWidth: 0,
			title: 'Undecided Engineering Student',
			projects: [],
		},
	],
};

export default siteConfig;

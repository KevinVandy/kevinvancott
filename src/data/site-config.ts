export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

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

export type Subscribe = {
	title?: string;
	text?: string;
	formUrl: string;
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
	subscribe?: Subscribe;
	postsPerPage?: number;
	projectsPerPage?: number;
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
	subscribe: {
		title: 'Subscribe to Kevin Newsletter',
		text: 'One update per week. All the latest posts directly in your inbox.',
		formUrl: '#',
	},
	postsPerPage: 8,
	projectsPerPage: 8,
};

export default siteConfig;

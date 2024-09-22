import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	site: 'https://kevinvancott.dev',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({
			applyBaseStyles: true,
		}),
	],
	output: 'static',
	adapter: vercel(),
});

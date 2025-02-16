import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
	title: z.string().min(5).max(120).optional(),
	description: z.string().min(15).max(160).optional(),
	image: z
		.object({
			src: z.string(),
			alt: z.string().optional(),
		})
		.optional(),
	pageType: z.enum(['website', 'article']).default('website'),
});

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		excerpt: z.string().optional(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		isFeatured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		seo: seoSchema.optional(),
	}),
});

const pages = defineCollection({
	schema: z.object({
		title: z.string(),
		seo: seoSchema.optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.coerce.date(),
		isFeatured: z.boolean().default(false),
		seo: seoSchema.optional(),
	}),
});

const projectSchema = z.object({
	name: z.string(),
	link: z.string(),
	description: z.string(),
	techStack: z.array(z.string()),
	accomplishments: z.array(z.string()),
});

const timeline = defineCollection({
	schema: z.object({
		jobs: z.array(
			z.object({
				dateRange: z.string(),
				company: z.string(),
				link: z.string(),
				logo: z.string(),
				logoHeight: z.number(),
				logoWidth: z.number(),
				title: z.string(),
				projects: z.array(projectSchema),
			}),
		),
	}),
});

export const collections = { blog, pages, projects, timeline };

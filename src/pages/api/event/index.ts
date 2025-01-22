import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	const body = await request.text();

	const response = await fetch('https://plausible.io/api/event', {
		body: body,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const responseBody = await response.text();

	return new Response(responseBody);
};

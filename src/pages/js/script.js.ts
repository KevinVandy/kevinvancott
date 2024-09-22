import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
	const plausibleScriptData = await fetch("https://plausible.io/js/script.js");
	const script = await plausibleScriptData.text();

	return new Response(script);
};

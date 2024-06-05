import { json } from "@sveltejs/kit";

export async function GET() {
    return json("Heyo")
}

export const prerender = true;
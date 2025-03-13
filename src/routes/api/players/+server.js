import { json } from "@sveltejs/kit";

export async function GET() {
    const response = await fetch('https://drop-api.ea.com/rating/ea-sports-fc?locale=en&limit=100');
    const data = await response.json();
    return json(data);
}




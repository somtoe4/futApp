import { players } from "$lib/database";
import { json } from "@sveltejs/kit";

export async function GET() {
    return json(players);
}

export async function POST(request) {
    const { 
        name, 
        position, 
        rating, 
        image,
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physicality,
        weak_foot,
        skill_moves,
        position_ability 
    } = await request.json();
    
    players.push({ 
        name, 
        position, 
        rating, 
        image,
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physicality,
        weak_foot,
        skill_moves,
        position_ability 
    });
    
    return json(players);
}
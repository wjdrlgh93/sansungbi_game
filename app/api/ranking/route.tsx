import connectDB from "@/lib/db";
import Ranking from "@/models/Ranking";
import { error } from "console";
import { NextResponse } from "next/server";


// 1. ranking search 
export async function GET() {
    try{
        await connectDB();
        const rankings = await Ranking.find({})
            .sort({score:-1 })
            .limit(10);
        return NextResponse.json(rankings);
    } catch(error) {
        return NextResponse.json({ error:'DB ERROR'}, { status: 500});
    }
}

// 2. POST Ranking
export async function POST(req:Request) {
    try{
        await connectDB();
        const body = await req.json();
        const {nickname , score} = body;

        if(!nickname || typeof score !== 'number'){
            return NextResponse.json({ error: 'Invalid Data'}, {status:400});
        }
        // DB SAVE
        await Ranking.create({ nickname, score });
        return NextResponse.json({ success: true });

    } catch(error){
        return NextResponse.json({ error: 'DB Create Error' }, { status: 500});
    }
    
}
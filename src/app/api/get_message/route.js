import dbConnect from "@/lib/dbConnect";
import Messages from "@/models/Messages";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect()
        const messages = await Messages.find().sort({createdAt:-1})
        console.log(messages);
        
        return NextResponse.json(messages,{status:200})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error getting message" }, { status: 500 });
        
    }
}
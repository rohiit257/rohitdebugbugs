import dbConnect from "@/lib/dbConnect";
import Messages from "@/models/Messages";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Connect to the database
        await dbConnect();

        // Parse the incoming JSON request body
        const { message } = await request.json(); // Add 'await' to properly parse the JSON

        // Check if message is provided
        if (!message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create a new message document
        const newMessage = new Messages({
            message,
            createdAt: new Date() // Add createdAt field if needed
        });

        // Save the new message to the database
        await newMessage.save();

        // Respond with the saved message and a 201 status
        return NextResponse.json(newMessage, { status: 201 });

    } catch (error) {
        console.error("Error in sending message:", error);
        // Respond with a 500 error if something goes wrong
        return NextResponse.json({ error: "Error sending message" }, { status: 500 });
    }
}

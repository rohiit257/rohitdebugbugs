import dbConnect from "@/lib/dbConnect";
import Messages from "@/models/Messages";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        // Connect to the database
        await dbConnect();

        // Extract ID from the URL
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop(); // Extract the ID from the URL path

        // Attempt to delete the message
        const message = await Messages.findByIdAndDelete(id);

        // Check if the message was found and deleted
        if (!message) {
            return NextResponse.json({ error: "No message found" }, { status: 404 });
        }

        // Return a success response
        return NextResponse.json({ status: "Message deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error deleting message" }, { status: 500 });
    }
}

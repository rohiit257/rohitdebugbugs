import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();

// POST handler for adding a project
export async function POST(request) {
  try {
    // Parse the incoming JSON request body
    const { name, imagelink, link, description } = await request.json();

    // Validate required fields
    if (!name || !imagelink || !link || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new project document
    const newProject = new Project({
      name,
      imagelink,
      link,
      description,
      createdAt: new Date(), // Add createdAt field if needed
    });

    // Save the new project to the database
    await newProject.save();

    // Respond with the saved project and a 201 status
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error in adding project:", error);
    // Respond with a 500 error if something goes wrong
    return NextResponse.json(
      { error: "Error adding project" },
      { status: 500 }
    );
  }
}
// api to get project all details 
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();            

// GET handler for getting all projects 
export async function GET() {
  try {
    // Fetch all projects from the database
    const projects = await Project.find();

    // Respond with the projects
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Respond with a 500 error if something goes wrong
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 }
    );
  }
}
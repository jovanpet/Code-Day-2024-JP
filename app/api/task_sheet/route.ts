import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

/**
 * Route to create a new task sheet
 * @param req The request object
 * @returns The created task sheet
 */
export async function POST(req: NextRequest) {
    const data = await req.json();
    let taskSheet;
    try {
        taskSheet = await prisma.taskSheet.create({
            data
        });
    } catch (error) {
        return NextResponse.json({ error: `Error creating task sheet: ${error}` }, { status: 500 });
    }
    return NextResponse.json({ body: taskSheet }, { status: 201 });
}
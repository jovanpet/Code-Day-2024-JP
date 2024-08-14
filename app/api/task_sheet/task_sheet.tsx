import { NextResponse, NextRequest } from 'next/server';
import prisma from '../prismaClient';

// TODO: Implement this function to use a real API
/**
 * Returns the task sheet with the given ID
 * 
 * @param id The ID of the task sheet to get
 * @returns The task sheet with the given ID
 */
export async function getTaskSheetById(req: NextRequest) {
    const id: string = req.nextUrl.searchParams.get("Id") || "";
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'ID must be a single value' }, { status: 400 });
    }

    let taskSheet = await prisma.taskSheet.findUnique({
        where: {
            id: id
        }
    });
    if (taskSheet === null) {
        return NextResponse.json({ error: 'Task sheet with that ID does not exist' }, { status: 404 });
    }
    return NextResponse.json({ body: taskSheet }, { status: 200 });
};

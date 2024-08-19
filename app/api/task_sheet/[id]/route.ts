import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../prismaClient';

// TODO: Implement this function to use a real API
/**
 * Returns the task sheet with the given ID
 * 
 * @param id The ID of the task sheet to get
 * @returns The task sheet with the given ID
 */
export async function GET(req: NextRequest, { params: { id } }: { params: { id: string } }) {
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }
    let taskSheet = await prisma.taskSheet.findUnique({
        where: {
            id
        },
        include: {
            tasks: true
        }
    });
    if (taskSheet === null) {
        return NextResponse.json({ error: 'Task sheet with that ID does not exist' }, { status: 404 });
    }
    return NextResponse.json({ body: taskSheet }, { status: 200 });
};

/**
 * Route to create a new task sheet
 * 
 * @param req The request object
 * @param params The parameters object
 * @returns The created task sheet
 */
export async function PUT(req: NextRequest, { params: { id } }: { params: { id: string } }) {
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }
    let taskSheet = await prisma.taskSheet.findUnique({
        where: {
            id
        }
    });
    if (taskSheet === null) {
        return NextResponse.json({ error: 'Task sheet with that ID does not exist' }, { status: 404 });
    }
    let updatedTaskSheet = await prisma.taskSheet.update({
        where: {
            id
        },
        data: req.body || {}
    });
    return NextResponse.json({ body: updatedTaskSheet }, { status: 200 });
}

/**
 * Route to delete a task sheet
 * 
 * @param req The request object
 * @param param1 The parameters object
 * @returns The deleted task sheet
 */
export async function DELETE(req: NextRequest, { params: { id } }: { params: { id: string } }) {
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }
    let taskSheet = await prisma.taskSheet.findUnique({
        where: {
            id
        }
    });
    if (taskSheet === null) {
        return NextResponse.json({ error: 'Task sheet with that ID does not exist' }, { status: 404 });
    }
    await prisma.taskSheet.delete({
        where: {
            id
        }
    });
    return NextResponse.json({ body: taskSheet }, { status: 200 });
}
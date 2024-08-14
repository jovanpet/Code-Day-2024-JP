import { NextResponse, NextRequest } from 'next/server';
import prisma from '../prismaClient';

export async function GetUserTaskSheets(req: NextRequest) {
    const id: string = req.nextUrl.searchParams.get("Id") || "";
    if (!id) {
        return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'name must be a single value' }, { status: 400 });
    }

    let userWithTaskSheets = prisma.user.findUnique({
        where: {
            id: id
        },
        include: {
            taskSheets: true
        }
    });
    if (userWithTaskSheets === null) {
        return NextResponse.json({ error: 'User with that ID does not exist' }, { status: 404 });
    }
    const body = userWithTaskSheets.taskSheets;
    return NextResponse.json({ body }, { status: 200 });
}
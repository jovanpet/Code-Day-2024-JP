// import { PrismaClient } from '@prisma/client'; // Import PrismaClient
// const prisma = new PrismaClient(); // Initialize PrismaClient
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//     try {
//     //Parse the request body
//         const requestBody = await req.json();

//         //Validate the request body
//         if (!requestBody.name) {
//             return NextResponse.json({
//                 status: 400,
//                 message: 'Name is required',
//             }, { status: 400 });
//         }

//         //Create the item
//         const item = await prisma.user.create({
//             data: {
//                 name: requestBody.name,
//             },
//         });

//         //Return the item
//         return NextResponse.json(item, { status: 201 });

//     } catch (error) {
//     //Return error response
//         return NextResponse.json({
//             status: 500,
//             message: 'Something went wrong',
//         }, { status: 500 });
//     }
// }

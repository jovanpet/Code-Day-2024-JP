'use client';
// some-test-file.js
// import { PrismaClient } from '@prisma/client'; // Import PrismaClient
// const prisma = new PrismaClient(); // Initialize PrismaClient

// model User {
//   id         String      @id @default(cuid())
//   firstName  String
//   lastName   String
//   taskSheets TaskSheet[]
//   isParent   Boolean
//   phone      String
//   email      String      @unique
//   photoHash  String
// }

// const user = await prisma.user.create({
//     data: {
//         id: '0', // Replace with a unique ID or let Prisma generate it
//         firstName: 'Elsa',
//         lastName: 'Prisma',
//         taskSheets: {
//             create: [
//                 // Add task sheets here if needed
//             ],
//         },
//         isParent: false,
//         phone: '123-456-7890',
//         email: 'elsa@prisma.io',
//         photoHash: 'some-photo-hash', // Replace with actual photo hash
//     },
// });
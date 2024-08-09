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

import React, { useState } from 'react';

export default function Avatar(){
    return (
      
        <>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <div className="avatar" id="avatar">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export function ImageUploader() {
    const [imageSrc, setImageSrc] = useState('');
    const [imageDataUrl, setImageDataUrl] = useState('');

    // Function to handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageDataUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />

            <span id="source" style={{ display: 'none' }}>
                {imageDataUrl}
            </span>

            {imageDataUrl && (
                <p>
                    {imageDataUrl}
                </p>
            )}

            <div id="avatar">
                {imageDataUrl && <img src={imageDataUrl} alt="Uploaded avatar" />}
            </div>
        </div>
    );
}


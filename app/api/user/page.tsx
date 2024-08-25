'use client';
import React, { useState } from 'react';

function Profile() {
    const [imageDataUrl, setImageDataUrl] = useState("");

    // Function to handle file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageDataUrl(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />

            <span id="source" style={{ display: "none" }}>
                {imageDataUrl}
            </span>

            {/* {imageDataUrl && <p>{imageDataUrl}</p>} */}
            {/* imageDataUrl is the hashed string  */}

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <div id="avatar">
                                {imageDataUrl && <img src={imageDataUrl} alt="Uploaded avatar" />}
                            </div>                
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">User</h1>
                        <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;
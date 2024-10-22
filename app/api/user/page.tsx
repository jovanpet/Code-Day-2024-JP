"use client";
import React, { useState } from "react";
function Profile() {
    const [imageDataUrl, setImageDataUrl] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    // Function to handle file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //for the s3upload

        const files = event.target.files;
        if (files) {
            //add file name to html
            setFile(files[0]);
        }

        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            //this is the image hash
            setImageDataUrl(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
            //post (reader.result as string)
        }
    };
    const uploadToS3 = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        setUploading(true);

        const response = await fetch(
            "http://localhost:3000" + "/api/presigned",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    filename: file.name,
                    contentType: file.type,
                }),
            }
        );

        if (response.ok) {
            const { url, fields } = await response.json();

            const formData = new FormData();
            Object.entries(fields).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            formData.append("file", file);

            const uploadResponse = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (uploadResponse.ok) {
                alert("Upload successful!");
            } else {
                console.error("S3 Upload Error:", uploadResponse);
                alert("Upload failed.");
            }
        } else {
            alert("Failed to get pre-signed URL.");
        }

        setUploading(false);
    };

    return (
        <div>
            <form onSubmit={uploadToS3}>
                <input
                    id="file"
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                />
                <button type="submit" disabled={uploading}>
                    Upload
                </button>
            </form>

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
                                {imageDataUrl && (
                                    <img
                                        src={imageDataUrl}
                                        alt="Uploaded avatar"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">User</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;

import axios from 'axios';
import React, { useState } from 'react'

const UplaodCampaings = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setIsLoading(true);

            await axios.post("https://facebookadsmangerserver.vercel.app/api/leads/singlefile/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("File uploaded successfully🎉🎉");
        } catch (error) {
            console.error("Error uploading file:", error.message);
            const errorMessage = error.response
                ? error.response.data.message
                : error.message;
            alert(`Error uploading file: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>UplaodCampaings
            <div>
                <input type="file" accept=".csv" onChange={handleFileChange} />
            </div>
            <button onClick={handleUpload} disabled={isLoading}>
                {isLoading ? "Uploading..." : "Upload File"}
            </button>
        </div>
    )
}

export default UplaodCampaings
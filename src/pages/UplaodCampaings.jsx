import axios from 'axios';
import React, { useState } from 'react'

const UplaodCampaings = () => {
    const [loading, setIsLoading] = useState(false)
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("agentId", agentId);
        formData.append("branchname", branchname);
        formData.append("username", username);

        try {
            setIsLoading(true);

            await axios.post("/leads/singlefile/upload", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("File uploaded successfully🎉🎉");
            refetch();
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
                <input type="file" name="file" id="file" title='upload file' />
            </div>
        </div>
    )
}

export default UplaodCampaings
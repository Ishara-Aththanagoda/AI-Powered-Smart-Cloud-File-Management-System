import React, { useState } from 'react';
import { storage } from '../../cloud_config/firebase_config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");

    const handleUpload = async () => {
        if (!file) return;
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setUrl(downloadURL);
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            {url && <p>File URL: <a href={url}>{url}</a></p>}
        </div>
    );
}

export default FileUpload;

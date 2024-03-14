import React, { useState } from 'react';
import "./UploadFile.scss"

interface UploadFileProps {
  // Add any additional props you might need here
}

const UploadFile: React.FC<UploadFileProps> = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="circle-image-upload">
      {!selectedImage ?<p>Add</p>:""}
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {selectedImage && (
        <img src={selectedImage} alt="Uploaded image" />
      )}
    </div>
  );
};


export default UploadFile;

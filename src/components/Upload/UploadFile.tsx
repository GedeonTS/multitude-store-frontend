import React, { useState } from 'react';
import "./UploadFile.scss"

interface UploadFileProps {
  id: string,
  handleImageUpload: (imageId: string, imageLink: string) => void;
}




const UploadFile: React.FC<UploadFileProps> = (
  { id, handleImageUpload }
) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setImageFile(event.target.files?.[0] || null);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
    handleImageUpload(id, e.target?.result as string);
    setSelectedImage(e.target?.result as string);
    console.log(e.target?.result as string)
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
function handleImageUpload(id: any, file: File) {
  throw new Error('Function not implemented.');
}


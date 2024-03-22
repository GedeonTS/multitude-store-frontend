import React, { useState, ChangeEvent, FormEvent } from 'react';
import './AddItemForm.scss';
import  imagePlaceHolder from '../../assets/addImage.png';
import UploadFile from '../Upload/UploadFile';
import * as cloudinary from 'cloudinary-core';



interface FormData {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  upload_preset: string;
}

const AddItemForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: 5,
    name: '',
    description: '',
    price: '',
    category: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
  });

  const handleImageUpload = (imageId:string, imageLink:string) => {
    if(imageId === '1'){
      setFormData((prevData) => ({
        ...prevData,
        image1: imageLink,
      }));
    } else if(imageId === '2'){
      setFormData((prevData) => ({
        ...prevData,
        image2: imageLink,
      }));
    } else if(imageId === '3'){
      setFormData((prevData) => ({
        ...prevData,
        image3: imageLink,
      }));
    }
    else if(imageId === '4'){
      setFormData((prevData) => ({
        ...prevData,
        image4: imageLink,
      }));
    }
    else if(imageId === '5'){
      setFormData((prevData) => ({
        ...prevData,
        image5: imageLink,
      }));
    } else {
      console.log("Image id not found")
    }
    
  }

  const cloudinaryInstance = new cloudinary.Cloudinary({
    cloud_name: "yourCloudName" as string, 
    api_key: "yourApiKey" as string,
    upload_preset: "yourUploadPresetName" as string,
  } as CloudinaryConfig);



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const uploadImage = async (imageFile) => {
    if (!imageFile) {
      return alert('Please select an image to upload.');
    }
  
    try {
      const uploadResponse = await cloudinaryInstance.uploader.upload(imageFile, {
        // Optional transformations or other upload options
      });
  
      console.log('Image uploaded successfully:', uploadResponse);
      // Handle success (e.g., display uploaded image URL)
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error (e.g., display error message)
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="add-item-form-container">
    <form onSubmit={handleSubmit} className="add-item-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>

      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </label>

      <UploadFile id={'1'} handleImageUpload={handleImageUpload}/>
      <UploadFile id={'2'} handleImageUpload={handleImageUpload}/>
      <UploadFile id={'3'} handleImageUpload={handleImageUpload}/>
      <UploadFile id={'4'} handleImageUpload={handleImageUpload}/>
        <button type="submit">Add Item</button>
    </form>
    </div>
  );
};

export default AddItemForm;


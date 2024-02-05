import React, { useState, ChangeEvent, FormEvent } from 'react';
import './AddItemForm.scss'

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
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

      <label>
        Image 1:
        <input type="url" name="image1" value={formData.image1} onChange={handleChange} required />
      </label>

      <label>
        Image 2:
        <input type="url" name="image2" value={formData.image2} onChange={handleChange} required />
      </label>

      <label>
        Image 3:
        <input type="url" name="image3" value={formData.image3} onChange={handleChange} required />
      </label>

      <label>
        Image 4:
        <input type="url" name="image4" value={formData.image4} onChange={handleChange} required />
      </label>

      <label>
        Image 5:
        <input type="url" name="image5" value={formData.image5} onChange={handleChange} required />
      </label>

      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;

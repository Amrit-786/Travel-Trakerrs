import React, { useState, useEffect } from 'react';
import './formDash.css';

const FormDashBoard = ({ onSubmit, editItem }) => {
  const [formData, setFormData] = useState({
    id: '',
    card_img: '',
    card_title: '',
    price: '',
  });

  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
    setFormData({
      id: '',
      card_img: '',
      card_title: '',
      price: '',
    });
  };

  return (
    <div className='formDash'>
      <form className='form_dashboard' onSubmit={handleSubmit}>
        <input
          type='text'
          name='card_img'
          value={formData.card_img}
          onChange={handleChange}
          placeholder='Image URL'
          required
        />
        <input
          type='text'
          name='card_title'
          value={formData.card_title}
          onChange={handleChange}
          placeholder='Title'
          required
        />
        <input
          type='number'
          name='price'
          value={formData.price}
          onChange={handleChange}
          placeholder='Price'
          required
        />
        <button type='submit'>{editItem ? 'Update' : 'Add'} Tour</button>
      </form>
    </div>
  );
};

export { FormDashBoard };

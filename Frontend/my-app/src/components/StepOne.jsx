// components/StepOne.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Booking.module.css';

const StepOne = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <label>Name</label>
      <input type="text" {...register('name', { required: 'Name is required' })} />
      {errors.name && <span className={styles.error}>{errors.name.message}</span>}

      <label>Email</label>
      <input type="email" {...register('email', {
        required: 'Email is required',
        pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email is not valid' }
      })} />
      {errors.email && <span className={styles.error}>{errors.email.message}</span>}

      <button type="submit" className={styles.nextButton}>Next</button>
    </form>
  );
};

export default StepOne;

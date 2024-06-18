// components/StepTwo.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Booking.module.css';

const StepTwo = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <label>OTP</label>
      <input type="text" {...register('otp', { required: 'OTP is required' })} />
      {errors.otp && <span className={styles.error}>{errors.otp.message}</span>}

      <button type="submit" className={styles.nextButton}>Verify</button>
    </form>
  );
};

export default StepTwo;

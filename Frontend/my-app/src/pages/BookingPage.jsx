import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Booking.module.css';

const Booking = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({});
  
  const onSubmit = (data) => {
    if (step < 3) {
      setFormData({ ...formData, ...data });
      setStep(step + 1);
    } else {
      handleFinalSubmit({ ...formData, ...data });
    }
  };

  const handleFinalSubmit = (data) => {
    // Simulate OTP verification and booking confirmation
    console.log('Booking confirmed:', data);
    alert('Booking confirmed!');
  };

  return (
    <div className={styles.bookingContainer}>
      <h2>Booking</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className={styles.formGroup}>
            <label>Name</label>
            <input 
              type="text" 
              {...register('name', { required: 'Name is required' })} 
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}

            <label>Email</label>
            <input 
              type="email" 
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid'
                }
              })} 
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>
        )}
        {step === 2 && (
          <div className={styles.formGroup}>
            <label>Card Number</label>
            <input 
              type="text" 
              {...register('cardNumber', { 
                required: 'Card number is required',
                minLength: { value: 16, message: 'Card number must be 16 digits' },
                maxLength: { value: 16, message: 'Card number must be 16 digits' },
                pattern: {
                  value: /^\d{16}$/,
                  message: 'Card number must be numeric and 16 digits long'
                }
              })} 
            />
            {errors.cardNumber && <span className={styles.error}>{errors.cardNumber.message}</span>}

            <label>Expiry Date</label>
            <input 
              type="text" 
              {...register('expiryDate', {
                required: 'Expiry date is required',
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                  message: 'Expiry date must be MM/YY'
                }
              })} 
            />
            {errors.expiryDate && <span className={styles.error}>{errors.expiryDate.message}</span>}

            <label>CVV</label>
            <input 
              type="text" 
              {...register('cvv', {
                required: 'CVV is required',
                minLength: { value: 3, message: 'CVV must be 3 digits' },
                maxLength: { value: 3, message: 'CVV must be 3 digits' },
                pattern: {
                  value: /^\d{3}$/,
                  message: 'CVV must be numeric and 3 digits long'
                }
              })} 
            />
            {errors.cvv && <span className={styles.error}>{errors.cvv.message}</span>}
          </div>
        )}
        {step === 3 && (
          <div className={styles.formGroup}>
            <label>OTP</label>
            <input 
              type="text" 
              {...register('otp', { required: 'OTP is required' })} 
            />
            {errors.otp && <span className={styles.error}>{errors.otp.message}</span>}
          </div>
        )}
        <button type="submit" className={styles.nextButton}>
          {step < 3 ? 'Next' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Booking;

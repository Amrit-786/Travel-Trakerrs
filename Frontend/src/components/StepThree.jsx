// components/StepThree.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Booking.module.css';

const StepThree = ({ onSubmit, watch }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const watchCardNumber = watch('cardNumber', '');
  const watchExpiryDate = watch('expiryDate', '');
  const watchCvv = watch('cvv', '');
  const watchName = watch('name', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <label>Card Number</label>
      <input type="text" {...register('cardNumber', {
        required: 'Card number is required',
        minLength: { value: 16, message: 'Card number must be 16 digits' },
        maxLength: { value: 16, message: 'Card number must be 16 digits' },
        pattern: { value: /^\d{16}$/, message: 'Card number must be numeric and 16 digits long' }
      })} />
      {errors.cardNumber && <span className={styles.error}>{errors.cardNumber.message}</span>}

      <label>Expiry Date</label>
      <input type="text" {...register('expiryDate', {
        required: 'Expiry date is required',
        pattern: { value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, message: 'Expiry date must be MM/YY' }
      })} />
      {errors.expiryDate && <span className={styles.error}>{errors.expiryDate.message}</span>}

      <label>CVV</label>
      <input type="text" {...register('cvv', {
        required: 'CVV is required',
        minLength: { value: 3, message: 'CVV must be 3 digits' },
        maxLength: { value: 3, message: 'CVV must be 3 digits' },
        pattern: { value: /^\d{3}$/, message: 'CVV must be numeric and 3 digits long' }
      })} />
      {errors.cvv && <span className={styles.error}>{errors.cvv.message}</span>}

      <div className={styles.cardDetails}>
        <div className={styles.card}>
          <div className="number">{watchCardNumber.padEnd(16, '•')}</div>
          <div className="expiry">{watchExpiryDate.padEnd(5, '•')}</div>
          <div className="cvv">{watchCvv.padEnd(3, '•')}</div>
          <div className="name">{watchName}</div>
        </div>
      </div>

      <button type="submit" className={styles.nextButton}>Submit</button>
    </form>
  );
};

export default StepThree;

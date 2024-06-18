// pages/Booking.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import { sendOTPEmail } from '../services/emailService';
import styles from '../styles/Booking.module.css';
import { verifyOTP } from '../services/otpService';

const Booking = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const onSubmit = (data) => {
    if (step === 1) {
      sendOTPEmail(data.email);
      setFormData({ ...formData, ...data });
      setStep(2);
    } else if (step === 2) {
      if (verifyOTP(data.otp)) {
        setStep(3);
      } else {
        alert('Invalid OTP');
      }
    } else if (step === 3) {
      handleFinalSubmit({ ...formData, ...data });
    }
  };

  const handleFinalSubmit = (data) => {
    console.log('Booking confirmed:', data);
    setBookingConfirmed(true);
    setTimeout(() => alert('Booking confirmed!'), 500);
  };

  return (
    <div className={styles.bookingContainer}>
      <h2>Booking</h2>
      {bookingConfirmed ? (
        <div className={styles.bookingConfirmed}>
          <h3>Booking Confirmed!</h3>
          <p>Thank you for booking with us. Your tour details will be sent to your email.</p>
        </div>
      ) : (
        <>
          {step === 1 && <StepOne onSubmit={onSubmit} />}
          {step === 2 && <StepTwo onSubmit={onSubmit} />}
          {step === 3 && <StepThree onSubmit={onSubmit} watch={watch} />}
        </>
      )}
    </div>
  );
};

export default Booking;

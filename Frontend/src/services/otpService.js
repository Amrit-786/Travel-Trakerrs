// utils/otpService.js
export const verifyOTP = (enteredOtp) => {
    const storedOtp = localStorage.getItem('otp');
    return enteredOtp === storedOtp;
  };
  
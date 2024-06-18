
// utils/emailService.js
export const sendOTPEmail = (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('otp', otp); // Store OTP for simplicity
    console.log(`Sending OTP ${otp} to ${email}`);
    return otp;
  };
  
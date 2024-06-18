import React, { useState } from 'react';
import * as signupStyle from '../utils/signupStyle';

export const SignupAndLogin = () => {
    const [signIn, setSignIn] = useState(true);

    const divBody = {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop : '20px',
    }

    return (
        <div style={divBody}>
            <signupStyle.Container>
                {/* Sign Up Form */}
                <signupStyle.SignUpContainer signinIn={signIn}>
                    <signupStyle.Form>
                        <signupStyle.Title>Create Account</signupStyle.Title>
                        <signupStyle.Input type='text' placeholder='Name' />
                        <signupStyle.Input type='email' placeholder='Email' />
                        <signupStyle.Input type='password' placeholder='Password' />
                        <signupStyle.Button>Sign Up</signupStyle.Button>
                    </signupStyle.Form>
                </signupStyle.SignUpContainer>

                {/* Sign In Form */}
                <signupStyle.SignInContainer signinIn={signIn}>
                    <signupStyle.Form>
                        <signupStyle.Title>Sign In</signupStyle.Title>
                        <signupStyle.Input type='email' placeholder='Email' />
                        <signupStyle.Input type='password' placeholder='Password' />
                        <signupStyle.Anchor href='#'>Forgot your password?</signupStyle.Anchor>
                        <signupStyle.Button>Sign In</signupStyle.Button>
                    </signupStyle.Form>
                </signupStyle.SignInContainer>

                {/* Overlay for Sign In/Sign Up Toggle */}
                <signupStyle.OverlayContainer signinIn={signIn}>
                    <signupStyle.Overlay signinIn={signIn}>
                        {/* Left Panel - Sign In */}
                        <signupStyle.LeftOverlayPanel signinIn={signIn}>
                            <signupStyle.Title>Welcome Back!</signupStyle.Title>
                            <signupStyle.Paragraph>
                                To keep connected with us please login with your personal info
                            </signupStyle.Paragraph>
                            <signupStyle.GhostButton onClick={() => setSignIn(true)}>
                                Sign In
                            </signupStyle.GhostButton>
                        </signupStyle.LeftOverlayPanel>

                        {/* Right Panel - Sign Up */}
                        <signupStyle.RightOverlayPanel signinIn={signIn}>
                            <signupStyle.Title>Hello, Friend!</signupStyle.Title>
                            <signupStyle.Paragraph>
                                Enter your personal details and start your journey with us
                            </signupStyle.Paragraph>
                            <signupStyle.GhostButton onClick={() => setSignIn(false)}>
                                Sign Up
                            </signupStyle.GhostButton>
                        </signupStyle.RightOverlayPanel>
                    </signupStyle.Overlay>
                </signupStyle.OverlayContainer>
            </signupStyle.Container>
        </div>
    );
};

// export { SignupAndLogin };

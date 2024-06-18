import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css'; // Import CSS file for styling



const Contact = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [location, setLocation] = useState('');
    const [visitedDate, setVisitDate] = useState('');
    const [age, setAge] = useState('');
    const [comments, setComments] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data
        const feedbackData = {
            userName,
            email,
            subject,
            location,
            visitedDate,
            age,
            comments,
        };

        // Save data to local storage (optional)
        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        // Show thank you message and hide form
        setShowThankYou(true);

        // Reset form fields
        setUserName('');
        setEmail('');
        setSubject('');
        setLocation('');
        setVisitDate('');
        setAge('');
        setComments('');
    };

    return (
      <>
        <div style={{height:'200px',  marginTop:'70px' }}>
            {!showThankYou && (
                <div className="contact-form-container">
                    <h2>Contact Us Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Subject:</label>
                            <input
                                type="text"
                                placeholder="Type subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Location:</label>
                            <select value={location} onChange={(e) => setLocation(e.target.value)} required>
                                <option value="">Please choose an option</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bihar">Bihar</option>
                                <option value="UP">UP</option>
                                <option value="Kerala">Kerala</option>
                            </select>
                        </div>

                        <div>
                            <label>Day Visited:</label>
                            <input
                                type="datetime-local"
                                value={visitedDate}
                                onChange={(e) => setVisitDate(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Age:</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                min="10"
                                max="100"
                                required
                            />
                        </div>

                        <div>
                            <h3>Any comments, questions or suggestions?</h3>
                            <textarea
                                rows="6"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}

            {showThankYou && (
                <div className="thank-you-message">
                    <p>Thank you for reaching to us!</p>
                    <p>We appreciate your input.</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signupimage from '../assets/images/signup-01.jpg';
import '../Style';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if (successMessage) {
           
            const timer = setTimeout(() => {
                navigate('/login');
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, [successMessage, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            setSuccessMessage('Sign up successful! Redirecting to login page...');
            
            setFirstName('');
            setLastName('');
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setError(false);
        }, 1500); 
    };

    const renderError = () => {
        if (typeof error === 'string') {
            return error;
        }
        return 'An error occurred. Please try again.';
    };

    return (
        <>
            <div className="su-con">
                <div className="left-img">
                    <img src={signupimage} alt="energy trade" />
                    <div className='overlay'></div>
                </div>
                <div className='flex'>
                    <div className="form">
                        <h1>Welcome to <span>AgriTradar</span></h1>
                        
                        {error && <p className="error">{renderError()}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        
                        <form onSubmit={handleSubmit}>
                            <div className="fn-ln">
                                <div>
                                    <label>First Name</label><br/>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Last Name</label><br/>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Farm Name </label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Create password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Confirm password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div className='su'>
                                    <input type='submit' disabled={loading} value={loading ? 'Loading...' : 'Sign Up'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
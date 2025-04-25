import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FishFarm from '../assets/images/fish-farm.jpg';
import '../Style';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate authentication process
        setTimeout(() => {
            
            if (username && password) {
                
                setLoading(false);
                
                navigate('/dashboard');
            } else {
                
                setError('Please enter both username and password');
                setLoading(false);
            }
        }, 1000); 
    };

    return (
        <div className="su-con">
            <div className="left-img">
                <img src={FishFarm} alt="fish" />
                <div className='overlay'></div>
            </div>
            <div className='flex center'>
                <div className="form">
                    <h1 className='center'>Welcome back to <span>AgriTradar</span></h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="fn-ln">
                            <div>
                                <label>Farm Name</label>
                                <input
                                    type="text"
                                    className='in'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your farm name"
                                    required
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    type="password"
                                    className='in'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="forgot-password">
                                <a href="/forgot-password">Forgot password?</a>
                            </div>
                            <div className='su'>
                                <input 
                                    type='submit' 
                                    disabled={loading} 
                                    value={loading ? 'Loading...' : 'Login'} 
                                />
                            </div>
                            <div className="signup-link">
                                Don't have an account? <a href="/signup" >Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
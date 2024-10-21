import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // form submission logic
        console.log('Form submitted', formData);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='text-white h-[75vh] w-[90%] bg-[#1F1F1F] flex flex-col justify-center items-center justify-self-center gap-4 text-xl relative'>
            <h2 className='text-3xl font-semibold'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[80%]'>
                <div className='flex flex-col w-[100%] gap-3'>
                    <label>Username:</label>
                    <input
                        className='h-8 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col w-[100%] gap-2'>
                    <label>Email:</label>
                    <input
                        className='h-8 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col w-[100%] gap-2 relative'>
                    <label>Password:</label>
                    <input
                        className='h-8 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className='absolute right-2 top-9 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>
                <div className='flex flex-col w-[100%] gap-2 relative'>
                    <label>Confirm Password:</label>
                    <input
                        className='h-9 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className='absolute right-2 top-9 cursor-pointer'
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {showConfirmPassword ? '🙈' : '👁️'}
                    </span>
                </div>
                <button type="submit" className='h-10 bg-blue-600'>Sign Up</button>
                
            </form>
            <div className='h-10 w-[70%] bg-gray-700 rounded-2xl flex items-center gap-2 p-2 font-semibold font-arial' onClick={() => console.log('Google Sign Up')}>
                    <FaGoogle className='text-3xl'/> <span className='text-md'> Signup With Google</span>
            </div>
            <div className='absolute bottom-1 w-[90%] flex flex-row gap-5 p-3'>
                <Link to='/siginppage' className='flex items-center'><IoMdArrowRoundBack className='text-3xl'/> Back to Login Page </Link>
            </div>
        </div>
    );
};

export default SignUpPage;
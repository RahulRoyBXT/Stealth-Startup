import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // sign in logic
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='text-white h-[75vh] w-[90%] bg-[#1F1F1F] flex flex-col justify-center items-center justify-self-center gap-5 text-xl relative'>
            <h2 className='text-4xl font-semibold'>Sign In</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[80%]'>
                <div className='flex flex-col w-[100%] gap-2'>
                    <label>Email:</label>
                    <input
                        className='h-8 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col w-[100%] gap-2'>
                    <label>Password:</label>
                    <input
                        className='h-8 bg-gray-500 outline-blue-600 p-1 font-semibold'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='h-10 w-full bg-blue-600 font-semibold'>Sign In</button>
                <div className='h-10 w-[50%] bg-gray-700 rounded-2xl flex self-center items-center gap-2 p-2 font-semibold font-arial' onClick={() => console.log('Google Sign Up')}>
                    <FaGoogle className='text-3xl'/> <span className='text-md'>Google</span>
            </div>
            </form>
            <Link to="/signuppage" className='h-[8%] w-[50%] mt-5 text-white font-semibold text-2xl border-2 border-gray-600 bg-gray-800 rounded-3xl flex justify-center items-center hover:bg-gray-700'>Sign Up</Link>
        </div>
    );
};

export default SignInPage;
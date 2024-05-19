import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgColorAnimation from '../../animations/BgColorAnimation';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { CiLogin } from "react-icons/ci";

const AdminLogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRedirection = () => {
        navigate(`/AdminRegister`)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/adminLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log(data)
            if (data.status === 'ok') {
                const token = 'admin';
                localStorage.setItem('token', token);
                navigate('/admin/home');
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <BgColorAnimation
            child={
                <div className=" h-screen flex justify-center items-center">
                    <form className="bg-[#ffffff2b] shadow-md rounded px-4 md:px-8 py-5 xsm:w-[25rem] sm:w-[35rem] md:w-[40rem]" onSubmit={handleSubmit}>
                        <h1 className="text-[2rem] md:text-4xl font-mooli tracking-wider text-violet-300 font-bold mb-6">
                            Admin LogIn
                        </h1>

                        {/* Email */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type="email"
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${email ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                                autoFocus={true}
                            />
                        </div>

                        {/* Password */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${password ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />

                            <div className="absolute right-2 top-3 text-xl cursor-pointer">
                                {showPassword
                                    ? <MdOutlineVisibility className="text-blue-300" onClick={() => setShowPassword(!showPassword)} />
                                    : <MdOutlineVisibilityOff className="text-blue-300" onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>
                        </div>

                        {/* Login */} 
                        <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-between mt-6">
                            <button className="rounded-lg relative w-full xsm:w-36 h-10 cursor-pointer flex items-center bg-slate-900 group hover:bg-slate-900 active:bg-slate-900 overflow-hidden" type="submit">
                                <span className="text-gray-200 group-hover:text-slate-900 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                    Log In
                                </span>

                                <span className="absolute right-2 group-hover:-right-2 h-full w-8 rounded-lg bg-slate-900 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-[110%] transition-all duration-300">
                                    <CiLogin className="text-2xl group-hover:text-3xl group-hover:font-bold text-gray-200 group-hover:text-green-300" />
                                </span>
                            </button>

                            <a className="font-mooli font-bold text-[.85rem] text-blue-400 hover:text-indigo-400" href="#!">
                                Forgot password?
                            </a>
                        </div>

                        {/* Registration */}
                        <div className="flex items-center justify-between mt-6">
                            <span className="font-mooli font-bold text-md text-blue-400">
                                New to Admin?😐
                            </span>

                            <button 
                            className="ml-2 text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 px-3 py-[.2rem] rounded-full"
                            onClick={handleRedirection}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            }
        />
    );
};

export default AdminLogIn;

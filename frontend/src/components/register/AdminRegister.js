import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import BgColorAnimation from '../../animations/BgColorAnimation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPswd, setShowPswd] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const navigate = useNavigate();

    const handlePasswordVisibility = () => {
        setShowPswd(!showPswd);
    }

    const handleSubmit = async (e) => {
        console.log(username, email, password);
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/registerAdmin', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();
            if (data.status === 'ok') {
                toast.success('Registration successful....🥳🥳', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                navigate('/AdminLogIn', { replace: true });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Registration denied....💔🥺', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        }
    }

    const handleNavigateLogin = () => {
        navigate("/AdminLogIn");
    };

    const handleReset = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setCheckboxValue(false)
        setShowPswd(false);
    };

    return (
        <BgColorAnimation
            child={
                <div className=" h-screen flex justify-center items-center">
                    <form 
                    className="bg-[#ffffff2b] shadow-md rounded px-4 md:px-8 py-5 xsm:w-[25rem] sm:w-[35rem] md:w-[40rem]" 
                    onSubmit={handleSubmit}>
                        <h1 className=" text-[2rem] md:text-4xl font-mooli tracking-wider text-violet-300 font-bold mb-6 text-center">Register as Admin</h1>
                        
                        {/* User ID */}
                        <div className="relative mt-8">
                            <input
                                type="text"
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${username ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="userId"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="User ID"
                                autoFocus
                            />
                        </div>

                        {/* Email */}
                        <div className="relative mt-8">
                            <input
                                type="email"
                                className={`border-y-2  pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${email ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mt-8">
                            <input
                                type={showPswd ? 'text' : 'password'}
                                className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${password ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />

                            <div className="absolute top-3 right-2 cursor-pointer">
                                {showPswd
                                    ? <MdOutlineVisibility className="text-xl text-blue-300" onClick={handlePasswordVisibility} />
                                    : <MdOutlineVisibilityOff className="text-xl text-blue-300" onClick={handlePasswordVisibility} />
                                }
                            </div>
                        </div>

                        {/* User agreement checkbox input field */}
                        <div className="flex mt-8">
                            <div className="flex items-center h-5">
                                <input 
                                    id="terms"
                                    type="checkbox"
                                    value=""
                                    className="cursor-pointer w-7 h-[1.3rem] appearance-none border-[.2rem] border-yellow-500 rounded-full checked:border-yellow-300 checked:bg-green-800 checked:scale-90 checked:rounded-md focus:outline-none transition-all"
                                    onClick={() => setCheckboxValue(!checkboxValue)}
                                    required
                                />
                            </div>

                            {/* Checkbox text */}
                            <label className="ml-2 text-sm font-medium text-cyan-200 font-robotoMono">
                                I agree with the{" "}
                                <a href="#" className=" text-cyan-200 hover:underline hover:text-blue-800 hover:bg-blue-300 hover:rounded-md hover:px-2 transition-all">
                                    terms and conditions
                                </a>
                            </label>
                        </div>


                        {/* submit button */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 mt-3">
                            <button 
                            className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 sm:h-8 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                            type="submit" >
                                Register
                            </button>
                            
                            <button 
                            className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 sm:h-8 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                            onClick={handleReset} >
                                Cancel
                            </button>
                        </div> 


                        {/* Login */}
                        <div className='mt-2 '>
                            <span className='font-mooli text-cyan-200'>Already have an account?</span>
                            <button 
                            className=" text-md font-bold text-blue-400 hover:text-indigo-400 font-robotoMono border-b-2 border-blue-400 hover:border-indigo-400 ml-2 pb-[.1rem] active:ring-green-300 active:text-green-300 transition-all" 
                            onClick={handleNavigateLogin}>
                                LogIn
                            </button>
                        </div>
                    </form>
                    
                    <ToastContainer
                        limit={3}
                    />
                </div>
            }
        />
    );
};

export default AdminRegister;

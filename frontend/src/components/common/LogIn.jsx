import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import BgColorAnimation from '../../animations/BgColorAnimation';

const LogIn = ({ 
    handleSubmit, 
    idValue, 
    idOnChangeEventHandler, 
    pswdValue, 
    pswdOnChangeEventHandler, 
    title, 
    regnTxt, 
    regnRedirectLink, 
    placeHolderText 
}) => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState({
        'id': false,
        'pswd': false,
    });
    const [showPswd, setShowPswd] = useState(false);

    const handleIdFocus = (event) => {
        event.target.select();
        setIsFocused({
            ...isFocused,
            'usn': true,
        });
    }
    
    const handlePswdFocus = (event) => {
        event.target.select();
        setIsFocused({
            ...isFocused,
            'pswd': true,
        });
    }

    const handleIdBlur = () => {
        setIsFocused({
            ...isFocused,
            'usn': false,
        });
    }

    const handlePswdBlur = () => {
        setIsFocused({
            ...isFocused,
            'pswd': false,
        });
    }

    const handleRedirection = () => {
        navigate(regnRedirectLink)
    };

    return (
        <BgColorAnimation
            child={
                <div className=" h-screen flex justify-center items-center">
                    <form 
                    className="bg-[#ffffff2b] shadow-md rounded px-4 md:px-8 py-5 xsm:w-[25rem] sm:w-[35rem] md:w-[40rem]" 
                    onSubmit={handleSubmit}>
                        <h1 className=" text-[2rem] md:text-4xl font-mooli tracking-wider text-violet-300 font-bold mb-6">{title}</h1>

                        {/* ID */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type="text"
                                className={`border-y-2 border-slate-300 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${(idValue || isFocused.id) ? 'border-indigo-400' : ''} pr-3`}
                                id="usn"
                                value={idValue}
                                onChange={idOnChangeEventHandler}
                                onFocus={handleIdFocus}
                                onBlur={handleIdBlur}
                                placeholder={placeHolderText}
                                autoFocus={true}
                            />
                        </div>
                        
                        {/* password */}
                        <div className="relative w-full h-full mt-10">
                            <input
                                type={`${showPswd ? 'text' : 'password' }`}
                                className={` border-y-2 border-slate-300 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${(pswdValue || isFocused.pswd) ? 'border-indigo-400' : ''} pr-9`}
                                id="password"
                                value={pswdValue}
                                onChange={pswdOnChangeEventHandler}
                                onFocus={handlePswdFocus}
                                onBlur={handlePswdBlur}
                                placeholder='Password'
                            />

                            <div className=' absolute right-2 top-3 text-xl cursor-pointer'>
                                {showPswd  
                                ?   <MdOutlineVisibility 
                                        className=' text-blue-300' 
                                        onClick={() => setShowPswd(!showPswd)}
                                    />
                                :   <MdOutlineVisibilityOff 
                                        className=' text-blue-300' 
                                        onClick={() => setShowPswd(!showPswd)}
                                    />
                                }
                            </div>
                        </div>

                        {/* submit */}
                        <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-between mt-6">
                            <button className="rounded-lg relative w-full xsm:w-36 h-10 cursor-pointer flex items-center bg-slate-900 group hover:bg-slate-900 active:bg-slate-900 overflow-hidden"
                            type='submit'>
                                <span className="text-gray-200 group-hover:text-slate-900 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                    Log In
                                </span>
                                <span className="absolute right-2 group-hover:-right-2 h-full w-8 rounded-lg bg-slate-900 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-[110%] transition-all duration-300">
                                    <CiLogin className=' text-2xl group-hover:text-3xl group-hover:font-bold group-hover:text-green-300'/>
                                </span>
                            </button>

                            <a className="font-mooli font-bold text-[.85rem] text-blue-400 hover:text-indigo-400" href="#!">
                                Forgot password?
                            </a>
                        </div>

                        {/* Registration */}
                        <div className="flex items-center justify-between mt-6">
                            <span className="font-mooli font-bold text-md text-blue-400">
                                {regnTxt}?😐
                            </span>
                            <button 
                            type="button" 
                            className="ml-2 text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 px-3 py-[.2rem] rounded-full active:scale-105"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            }
        />
    );
};

export default LogIn;

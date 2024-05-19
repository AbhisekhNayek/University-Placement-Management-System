import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import BgColorAnimation from '../../../animations/BgColorAnimation';
import { Modal } from 'react-bootstrap';
import { RxCross2 } from 'react-icons/rx';

const StudentResume = () => {
    const usn = localStorage.getItem('token');
    const [pdf, setPdf] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:1337/api/StudentProfile/${usn}`)
            .then((response) => response.json())
            .then((data) => {
                let fullName = `${data?.firstName} ${data?.lastName}`
                setName(fullName);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    const handlePdfChange = (event) => {
        setPdf(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('usn', usn);
        formData.append('pdf', pdf);

        try {
            await fetch('http://localhost:1337/api/Resumeupload', {
                method: 'POST',
                body: formData,
            });
            console.log('USN and PDF data uploaded successfully');
            navigate('/StudentHome', { replace: true });
        } catch (error) {
            console.error('Error uploading USN and PDF data:', error);
        }
    };

    const handleCardClick = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <BgColorAnimation
            child={
                <div className='h-screen overflow-y-auto '>
                    <div className='absolute top-0 w-full '>
                        <NavBar name={name}/>
                    </div>

                    <div className=" h-full grid place-items-center grid-cols-1 Lmd:grid-cols-2 gap-16 Lmd:gap-0 my-[10rem] Lmd:my-0">
                        <AnimatedGradientBorderTW>
                            <a href='/ResumeCreate' className=' no-underline bg-[#7730fc58] rounded-lg '>
                                <div className="rounded-lg w-[20rem] overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://i.ytimg.com/vi/FP42kKrllX8/maxresdefault.jpg" alt="Slot Selection" />
                                    <div className="">
                                        <div className="px-3 py-4 text-xl font-bold font-montserrat text-violet-400">
                                            Create Resume
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </AnimatedGradientBorderTW>

                        <AnimatedGradientBorderTW>
                            <div className=' cursor-pointer bg-[#7730fc58] rounded-lg' onClick={handleCardClick}>
                                <div className="rounded-lg w-[20rem] overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://images.ctfassets.net/pdf29us7flmy/B8zCQFm8ZFNkAjfq388pV/8906a136252a3ddd0e7873d45f1797b1/Upload-CV-01.png?w=720&q=100&fm=jpg" alt="Scheduled Slot" />
                                    <div className="">
                                        <div className="px-3 py-4 text-xl font-bold font-montserrat text-violet-400">
                                            Upload Resume
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGradientBorderTW>
                    </div>

                    {/* Upload Resume Dialog */}
                    <Modal show={showDialog} onHide={handleCloseDialog}>
                        <Modal.Header closeButton>
                            <div className='text-xl font-bold tracking-wide text-[#035A9D] font-robotoMono'>
                                Upload Resume
                            </div>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                <div className="relative mb-3">
                                    <input 
                                        type="file" 
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-violet-200 w-full h-full font-robotoMono placeholder:text-blue-700 text-violet-800 font-bold border-indigo-600 ${pdf ? 'border-green-600' : ''} focus:border-green-600`}
										value={pdf}
                                        onChange={handlePdfChange}
                                        accept='.doc, .docx, .pdf'        
                                    />

									{/* Remove input image */}
									<button 
									className='absolute font-bold transition-all rounded-full text-violet-700 active:text-red-700 active:scale-90 right-1 sm:right-2 sm:ring-1 top-1 sm:top-4 ring-violet-700 active:ring-red-700'
									onClick={() => setPdf('')}>
										<RxCross2 className='md:text-[1.1rem] font-bold'/>
									</button>
                                </div>
								
                                <button 
								className=" text-md font-bold bg-blue-100 hover:bg-[#EBE7FF] text-blue-600 hover:text-indigo-600 font-robotoMono ring-2 ring-blue-400 w-full sm:w-[7rem] py-2 rounded-full active:ring-green-600 active:text-green-600 transition-all" 
								type="submit" >
									Upload
								</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            }
        />
    );
};

export default StudentResume;




const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/StudentHome'},
    {text: 'Schedule', icon: <AiOutlineSchedule/>, path: '/StudentSchedule'},
    {text: 'Resume', icon: <MdOutlineAccountCircle/>, path: '/createResume'},
];

const NavBar = ({ name }) => {
    const [selected, setSelected] = useState(tabs[2].text);
    const [typedText, setTypedText] = useState('');
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchBarHanging, setIsSearchBarHanging] = useState(false);

    const loginOptions = [
        { href: '/', text: 'LogOut', icon: <CiLogout/> },
    ];

    const handleInputText = (e) => {
        setTypedText(e.target.value);
    };

    return (
        <div className=' flex items-center justify-between w-full h-[4rem] bg-slate-900 px-4 sm:px-3 xl:px-8'>
            {/* hamburger icon in less than 1024 screen width */}
            <div className="relative block lg:hidden">
                <div onClick={() => setIsDropdownOpen((pv) => !pv)}>
                    <AnimatedHamburgerButton
                        hamburgerActive={hamburgerActive}
                        setHamburgerActive={setHamburgerActive}
                    />
                </div>

                <div className="absolute flex items-center justify-center -right-11">
                    <motion.div animate={isDropdownOpen ? "open" : "closed"} className="relative">
                        <motion.ul
                        className="flex flex-col gap-2 p-2 rounded-lg bg-slate-900 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-30 ring-1 ring-blue-400"
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}>
                            {tabs.map((tab, indx) => (
                                <Option 
                                    key={tab.text+indx}
                                    setIsDropdownOpen={setIsDropdownOpen}
                                    Icon={tab.icon}
                                    text={tab.text}
                                    path={tab.path}
                                />
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>

            {/* main menu in more than 1024 screen width */}
            <div className="flex-wrap items-center hidden bg-slate-900 lg:gap-x-2 xl:gap-x-3 lg:flex">
                {tabs.map((tab) => (
                    <Chip
                        text={tab.text}
                        icon={tab.icon}
                        path={tab.path}
                        selected={selected === tab.text}
                        setSelected={setSelected}
                        key={tab.text}
                    />
                ))}
            </div>

            {/* search field */}
            <>
                <div className='fixed z-10 block w-10 h-10 p-2 overflow-hidden transition-all rounded-full cursor-pointer bottom-3 right-3 active:scale-110 bg-slate-700 text-cyan-300'
                onClick={() => setIsSearchBarHanging(!isSearchBarHanging)}>
                    <GoSearch className='text-2xl font-bold ' />
                </div>

                {isSearchBarHanging && (
                    <motion.div className='w-[80%] h-[2.6rem] fixed bottom-3 left-3 text-white z-40'
                    initial={{x: -300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}>
                        <form className="flex w-full h-full overflow-hidden rounded-full">
                            <input 
                                type="search"
                                placeholder="Search"
                                className="w-full h-full pl-4 pr-2 border-none outline-none bg-slate-700 text-cyan-200"
                                aria-label="Search"
                                onChange={handleInputText}
                                value={typedText}
                            />
                            
                            <button 
                            type='submit'
                            className='bg-slate-700 border-l border-slate-500 text-slate-200 pl-1 pr-2.5 lg:px-3 flex items-center justify-center'>
                                <TbDatabaseSearch className=' text-[1.4rem] text-green-300' />
                            </button>
                        </form>
                    </motion.div>
                )}
            </>

            {/* account section */}
            <div className='flex items-center gap-x-8 sm:gap-x-5 lg:gap-x-5 xl:gap-x-10'>
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={loginOptions}>
                        <div className='flex items-center justify-center gap-x-2'>
                            <FaRegUser/>
                            {name.split(' ')[0]}
                        </div>
                    </FlyoutLink>
                </div>
            </div>
        </div>
    );
};

const Chip = ({ text, icon, selected, setSelected, path }) => {
    const navigate = useNavigate();
    
    const handleClick = (text, path) => {
        setSelected(text)
        navigate(path)
    };
    
    return (
        <button
        onClick={() => handleClick(text, path)}
        className={`${
        selected
            ? "text-white"
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } transition-colors px-3 py-1.5 rounded-md relative flex items-center`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2">
                <span className='font-robotoMono lg:text-[1.05rem]'>{text}</span>
                <span className=' text-[1.3rem]'>{icon}</span>
            </span>

            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "sp", duration: 0.2 }}
                    className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            )}
        </button>
    );
};

const AnimatedHamburgerButton = ({ hamburgerActive, setHamburgerActive }) => {
    return (   
        <button
        className="relative w-10 h-20 transition-colors"
        onClick={() => setHamburgerActive((pv) => !pv)}>
            <div className={`flex items-center justify-center flex-col gap-y-[.4rem] rounded-full w-9 h-9 transition-all cursor-pointer`}>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] transition-all ${hamburgerActive ? 'rotate-45 translate-y-[4px]' : 'rotate-0'}  bg-blue-300`}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] ${!hamburgerActive ? 'block' : 'hidden'} bg-blue-300 `}/>
                <div className={`w-7 md:w-8 h-[2px] md:h-[3px] bg-blue-300 ${hamburgerActive ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'}  transition-all`}/>
            </div> 
        </button>
    );
};

const Option = ({ text, Icon, setIsDropdownOpen, path }) => {
    const navigate = useNavigate();
    
    const handleClick = (path) => {
        setIsDropdownOpen(false)
        navigate(path)
    };
    
    return (
        <motion.li
        variants={itemVariants}
        className="flex items-center w-full gap-3 p-2 text-xs font-medium transition-colors rounded-md cursor-pointer whitespace-nowrap hover:bg-indigo-600 text-cyan-100 hover:text-indigo-100"
        onClick={() => handleClick(path)}>
            <motion.span 
            className='text-xl font-robotoMono'
            variants={actionIconVariants}>
                {Icon}
            </motion.span>

            <span className='text-[1rem] font-robotoMono'>{text}</span>
        </motion.li>
    );
};

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};
  
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};
  
const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};

const FlyoutLink = ({ children, FlyoutContent, array }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;
  
    return (
        <div
        className="relative w-fit h-fit"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
            <span className="relative text-violet-300 font-onest">
                {children}
                <span
                    style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
                    className="absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-indigo-300 rounded-full -bottom-2 -left-2 -right-2"
                />
            </span>

            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                    className="absolute -right-[6rem] lg:-right-[8rem] top-[3.2rem] z-30"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="absolute left-0 right-0 h-6 bg-transparent -top-6 " />
                        <div className="absolute w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 right-1 bg-violet-800" />
                        <FlyoutContent selectedArray={array} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const userActions = ({selectedArray}) => {
    return (
        <div className=" bg-gradient-to-b from-violet-800 to-indigo-900 rounded-lg py-2.5 lg:py-4 shadow-xl">
            {selectedArray.map((item, index) => (
                <a 
                className='w-[12rem] lg:w-[15rem] pl-4 xl:pl-6 no-underline flex items-center py-2 gap-x-3 hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600'
                href={item.href}
                key={item.text+index}>
                    <span className='text-violet-200 text-[1.2rem] xl:text-[1.3rem]'>
                        {item.icon}
                    </span>
                    <span className='flex flex-wrap text-violet-200'>
                        {item.text}
                    </span>
                </a>
            ))}
        </div>
    );
};



const AnimatedGradientBorderTW = ({ children }) => {
    const boxRef = useRef(null);
  
    useEffect(() => {
        const boxElement = boxRef.current;
    
        if (!boxElement) return;
    
        const updateAnimation = () => {
            const angle = (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
            boxElement.style.setProperty("--angle", `${angle}deg`);
            requestAnimationFrame(updateAnimation);
        };
    
        requestAnimationFrame(updateAnimation);
    }, []);
  
    return (
        <div
        style={{
            "--angle": "0deg",
            "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
            "--bg-color": "linear-gradient(#131219, #131219)",
        }}
        className="flex items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
        ref={boxRef}>
            {children}
        </div>
    );
};

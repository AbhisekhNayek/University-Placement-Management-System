import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import BgColorAnimation from '../../../animations/BgColorAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const StudentCoverLetter = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        branch: '',
        phno: '',
        linkedIn: '',
        email: '',
        address: '',
        toName: '',
        designation: '',
        companyName: '',
        companyAddress: '',
        letterContent: '',
    });
    const usn = localStorage.getItem('token');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/CoverLetter', { state: {data:formData} });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setFormData({
            name: '',
            branch: '',
            phno: '',
            linkedIn: '',
            email: '',
            address: '',
            toName: '',
            designation: '',
            companyName: '',
            companyAddress: '',
            letterContent: '',
        })
    };

    return (
        <BgColorAnimation
            child={
                <div className='flex flex-col w-screen h-screen overflow-y-auto md:pb-10 md:items-center'>
                    <div className='sticky top-0 left-0 w-full '>
                        <NavBar name={name}/>
                    </div>

                    <div className="mt-2 mb-4 text-3xl font-bold text-center text-transparent font-montserrat bg-gradient-to-br from-indigo-600 via-blue-400 to-violet-400 bg-clip-text md:text-4xl md:mb-5">
                        Create Cover Letter
                    </div>

                    <div className={`bg-[#ffffff30] shadow-md rounded h-[79vh] md:h-auto overflow-y-auto px-2 md:px-4 pb-3 md:w-[85%] lg:w-[90%] 2xl:w-[80%]`}>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3 ">
                                <Form.Group as={Col} xs={12} md={6} lg={4} className='mt-3'>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-ful font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.name ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Name"
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={6} lg={4} className='mt-3'>
                                    <input
                                        type="text"
                                        name="branch"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.branch ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Branch"
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} lg={4} className='mt-3'>
                                    <input
                                        type="number"
                                        name="phno"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.phno ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Contact number"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                        
                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12} md={6} className='mt-3'>
                                    <input
                                        type="text"
                                        name="linkedIn"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.linkedIn ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="LinkedIn"
                                        onChange={handleChange}
                                        
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={6} className='mt-3'>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.email ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} className='mt-3'>
                                    <textarea
                                        name="address"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.address ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        rows={4}
                                        placeholder="Address"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12} md={4} lg={4} className='mt-3'>
                                    <input
                                        type="text"
                                        name="toName"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.toName ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Letter is To"
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={4} lg={4} className='mt-3'>
                                    <input
                                        type="text"
                                        name="designation"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.designation ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Designation"
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} xs={12} md={4} lg={4} className='mt-3'>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.companyName ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        placeholder="Company Name"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12}>
                                    <textarea
                                        name="companyAddress"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.companyAddress ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        rows={5}
                                        placeholder="Company Address"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12}>
                                    <textarea
                                        name="letterContent"
                                        required
                                        className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${formData.letterContent ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                        rows={5}
                                        placeholder="Letter Content"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            
                            {/* submit button */}
                            <div className="flex flex-col items-center justify-between mt-8 sm:flex-row gap-y-4">
                                <button 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                                type="submit">
                                    Send
                                </button>
                                
                                <button 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                                onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </Form> 
                    </div>
                </div>
            }
        />
    )
};

export default StudentCoverLetter;




const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/StudentHome'},
    {text: 'Schedule', icon: <AiOutlineSchedule/>, path: '/StudentSchedule'},
    {text: 'Resume', icon: <MdOutlineAccountCircle/>, path: '/createResume'},
];

const NavBar = ({ name }) => {
    const [selected, setSelected] = useState(tabs[0].text);
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
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiLogin, CiLogout } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import { TbDatabaseSearch } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { FaPeopleArrows } from "react-icons/fa6";
import BgColorAnimation from '../../animations/BgColorAnimation';

const CompanyJobPosting = () => {
    const Name =localStorage.getItem('name')
    const userToken = localStorage.getItem('token')
    const companyEmail=userToken
    const [jobRole,setJobRole] = useState('');
    const [JobDescription,setJobDiscription] = useState('');
    const [Package,setPackage] = useState('');
    const [Qualification,setQualification] = useState('');
    const [Eligibility,setEligibility] = useState('');
    const [Specialization,setSpecialization] = useState('');
    const [Experience,setExperiance] = useState('');
    const [JobLocation,setJobLocation] = useState('');
    const [LastDate,setLastDate] = useState('');
    const [DriveFrom,setDriveFrom]= useState('');
    const [DriveTO,setDriveTo]= useState('');
    const [Venue,setVenue]= useState('');


    const navigate = useNavigate();
    async function newJobRole (e) {
        e.preventDefault()
        
        const response = await fetch('http://localhost:1337/api/newJobPosting', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                companyEmail,
                jobRole,
                JobDescription,
                Package,
                Qualification,
                Eligibility,
                Specialization,
                Experience,
                JobLocation,
                LastDate,
                DriveFrom,
                DriveTO,
                Venue,
                Name
            }),
        })
        const data = await response.json();
    
        if(data.status === 'ok'){
            navigate('/CompanyHome', { replace: true })
        }else{
            console.log(data)
        }
    }
    
    return (
        <BgColorAnimation 
            child={
                <div className=" h-screen">
                    <NavBar/>

                    <div className="bg-[#ffffff2b] shadow-md rounded px-4 md:px-8 py-5 w-full lg:w-[60rem] mt-10 mx-auto">
                        <h1 className="text-[2rem] md:text-4xl font-onest tracking-wider text-violet-300 font-bold mb-6">
                            New Job Posting
                        </h1>
                        
                        <form onSubmit={newJobRole}>
                            {/* Job Role */}
                            <div className="relative w-full h-full mt-6">
                                <input
                                    type="text"
                                    className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${jobRole ? 'border-indigo-400' : ''}`}
                                    id="jobRole"
                                    value={jobRole}
                                    onChange={(e) => setJobRole(e.target.value)}
                                    placeholder="Job Role"
                                    required
                                />
                            </div>

                            {/* Job Description */}
                            <div className="relative w-full h-full mt-6">
                                <textarea
                                    className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${JobDescription ? 'border-indigo-400' : ''}`}
                                    id="JobDescription"
                                    value={JobDescription}
                                    onChange={(e) => setJobDiscription(e.target.value)}
                                    placeholder="Job Description"
                                    rows={3}
                                    required
                                />
                            </div>

                            {/* Package, Qualification, Eligibility */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Package ? 'border-indigo-400' : ''}`}
                                        id="Package"
                                        value={Package}
                                        onChange={(e) => setPackage(e.target.value)}
                                        placeholder="Package"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Qualification ? 'border-indigo-400' : ''}`}
                                        id="Qualification"
                                        value={Qualification}
                                        onChange={(e) => setQualification(e.target.value)}
                                        placeholder="Qualification"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Eligibility ? 'border-indigo-400' : ''}`}
                                        id="Eligibility"
                                        value={Eligibility}
                                        onChange={(e) => setEligibility(e.target.value)}
                                        placeholder="Eligibility"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Specialization, Experience, Job Location */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Specialization ? 'border-indigo-400' : ''}`}
                                        id="Specialization"
                                        value={Specialization}
                                        onChange={(e) => setSpecialization(e.target.value)}
                                        placeholder="Specialization"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Experience ? 'border-indigo-400' : ''}`}
                                        id="Experience"
                                        value={Experience}
                                        onChange={(e) => setExperiance(e.target.value)}
                                        placeholder="Experience"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${JobLocation ? 'border-indigo-400' : ''}`}
                                        id="JobLocation"
                                        value={JobLocation}
                                        onChange={(e) => setJobLocation(e.target.value)}
                                        placeholder="Job Location"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Dates and Venue */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <div>
                                    <input
                                        type="date"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${LastDate ? 'border-indigo-400' : ''}`}
                                        id="LastDate"
                                        value={LastDate}
                                        onChange={(e) => setLastDate(e.target.value)}
                                        placeholder="Last Date"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="date"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${DriveFrom ? 'border-indigo-400' : ''}`}
                                        id="DriveFrom"
                                        value={DriveFrom}
                                        onChange={(e) => setDriveFrom(e.target.value)}
                                        placeholder="Drive From"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <input
                                        type="date"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${DriveTO ? 'border-indigo-400' : ''}`}
                                        id="DriveTo"
                                        value={DriveTO}
                                        onChange={(e) => setDriveTo(e.target.value)}
                                        placeholder="Drive To"
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <input
                                        type="text"
                                        className={`border-y-2 pt-2.5 pb-2 pl-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${Venue ? 'border-indigo-400' : ''}`}
                                        id="Venue"
                                        value={Venue}
                                        onChange={(e) => setVenue(e.target.value)}
                                        placeholder="Venue"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-between mt-6">
                                <button className="rounded-lg relative w-full xsm:w-36 h-10 cursor-pointer flex items-center bg-slate-900 group hover:bg-slate-900 active:bg-slate-900 overflow-hidden" type="submit">
                                    <span className="text-gray-200 group-hover:text-slate-900 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                                        Submit
                                    </span>

                                    <span className="absolute right-2 group-hover:-right-2 h-full w-8 rounded-lg bg-slate-900 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-[110%] transition-all duration-300">
                                        <CiLogin className="text-2xl group-hover:text-3xl group-hover:font-bold text-gray-200 group-hover:text-green-300" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        />
    );
}

export default CompanyJobPosting;




const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/CompanyHome'},
    {text: 'Job Posting', icon: <HiOutlineBuildingOffice2/>, path: '/NewJobPosting'},
    {text: 'Interviews', icon: <FaPeopleArrows/>, path: '/CompanyInterview'},
];

export const NavBar = ({name = 'Company'}) => {
    const [selected, setSelected] = useState(tabs[1].text);
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
                        className="flex flex-col gap-2 p-2 rounded-lg bg-slate-900 shadow-xl absolute top-[120%] w-fit overflow-hidden z-30 ring-1 ring-blue-400"
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
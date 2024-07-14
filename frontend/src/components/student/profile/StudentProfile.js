import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import profileImg from '../../../images/resume/profileImg.jfif'

const StudentProfile = () => {
    const [studentData, setStudentData] = useState({});
    const usn = localStorage.getItem('token');   // take usn from here to implement that job matchin

    useEffect(() => {
        fetch(`http://localhost:1337/api/studentProfile/${usn}`)
        .then(response => response.json())
        .then(data => {
            setStudentData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const personalDetails = [
        { label: 'NAME', value: `${studentData?.firstName} ${studentData?.lastName}` },
        { label: 'USN', value: studentData?.usn },
        { label: 'SEMESTER', value: studentData?.currentSemester },
        { label: 'EMAIL', value: studentData?.email },
        { label: 'DATE OF BIRTH', value: studentData?.dateOfBirth },
    ];

    const address = [
        { label: 'COUNTRY', value: studentData?.country },
        { label: 'STATE', value: studentData?.state },
        { label: 'CITY', value: studentData?.city },
        { label: 'ZIP', value: studentData?.zip },
        { label: 'CONTACT NUMBER', value: studentData?.contactNumber },
    ];

    const educationDetails = [
        {
            label: 'Education 1',
            data: [
                { label: 'SCHOOL NAME:', value: studentData?.schoolName1 },
                { label: 'EDUCATION:', value: studentData?.education1 },
                { label: 'COURSE:', value: studentData?.course1 },
                { label: 'ADDRESS:', value: studentData?.address1 },
                { label: 'SCORE:', value: studentData?.score1 },
                { label: 'YEAR OF COMPLETION:', value: studentData?.yearOfCompletion1 },
            ],
        },
        {
            label: 'Education 2',
            data: [
                { label: 'COLLEGE NAME:', value: studentData?.schoolName2 },
                { label: 'EDUCATION:', value: studentData?.education2 },
                { label: 'COURSE:', value: studentData?.course2 },
                { label: 'ADDRESS:', value: studentData?.address2 },
                { label: 'SCORE:', value: studentData?.score2 },
                { label: 'YEAR OF COMPLETION:', value: studentData?.yearOfCompletion2 },
            ],
        },
        {
            label: 'Education 3',
            data: [
                { label: 'COLLEGE NAME:', value: studentData?.collegeName },
                { label: 'COURSE:', value: studentData?.education3 },
                { label: 'SPECIFICATION:', value: studentData?.course3 },
                { label: 'ADDRESS:', value: studentData?.address3 },
                { label: 'SCORE:', value: studentData?.score3 },
                { label: 'YEAR OF COMPLETION:', value: studentData?.courseDuration },
            ],
        },
    ];

    return (
        <div className=' flex justify-center pt-[6rem] overflow-y-auto'>
            <div className='absolute top-0 w-full '>
                <NavBar name={`${studentData?.firstName}`}/>
            </div>
            
            <div className=' flex flex-col px-3 gap-y-3 max-w-[61rem]'>
                {/* personal details */}
                <div className=' w-full flex flex-col-reverse md:flex-row items-start justify-between gap-x-5 gap-y-3'>
                    <div className=' space-y-4 w-full'>
                        <div className='w-full flex flex-col lg:flex-row gap-x-5 gap-y-3'>
                            <div className=' bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden pl-4 w-full lg:w-1/2 py-3 flex flex-col gap-y-1 flex-wrap'>
                                {personalDetails.map((item, index) => (
                                    <div key={index} className="flex justify-start gap-x-4">
                                        <span className=' font-bold font-mavenPro text-slate-200 normal-case'>{item.label} :</span>
                                        <span className=' font-robotoMono text-slate-100'>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className=' bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden pl-4 w-full lg:w-1/2 py-3 flex flex-col gap-y-1 flex-wrap'>
                                {address.map((item, index) => (
                                    <div key={index} className="flex justify-start gap-x-4">
                                        <span className=' font-bold font-mavenPro text-slate-200 normal-case'>{item.label} :</span>
                                        <span className=' font-robotoMono text-slate-100'>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden pl-3 py-3 w-full'>
                            <span className=' font-bold font-mavenPro text-slate-200 normal-case'>ADDRESS :</span>
                            <span className='ml-3 font-robotoMono text-slate-100'>{studentData?.address}</span>
                        </div>
                    </div>

                    {/* image */}
                    <div className=' min-w-[10rem] md:min-w-[16rem] lg:min-w-[10rem] max-w-[10rem] md:max-w-[16rem] lg:max-w-[10rem] h-full rounded-md overflow-hidden'>
                        <img 
                            src={profileImg}
                            className=' w-full h-full'
                            alt='profile image' 
                        />
                    </div>
                </div>
                
                {/* education details */}
                <div className='grid grid-cols-1 gap-3'>
                    {educationDetails.map((val, indx) => (
                        <div className=' bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden pl-4 w-full py-3 flex flex-col gap-y-1 flex-wrap'
                        key={indx}>
                            <span className=' text-slate-200 font-bold font-lato text-lg md:text-xl tracking-wide mb-4 flex flex-wrap'>
                                {val.label}
                            </span>

                            {val.data.map((item, index) => (
                                <div key={index} className="flex justify-start gap-x-2 md:gap-x-4">
                                    <span className='flex flex-wrap font-bold font-mavenPro text-slate-200 normal-case'>
                                        {item.label} 
                                    </span>
                                    <span className=' font-robotoMono text-slate-100'>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* skills */}
                <div className=' bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden pl-4 w-full py-3 flex gap-x-4 items-center flex-wrap gap-y-2'>
                    <span className=' font-bold font-xl font-lato text-slate-200'>
                        Key skills :
                    </span>

                    {studentData?.keySkills?.split(',').map((item, index) => (
                        <div key={index} className="flex justify-start flex-wrap gap-x-4 text-slate-200 font-robotoMono px-3 py-1 bg-slate-800 rounded-md overflow-hidden text-sm md:text-md">
                            {item}
                        </div>
                    ))}
                </div>

                {/* career preference */}
                <div className='bg-gradient-to-br from-gray-700 to-slate-600 rounded-lg overflow-hidden px-4 w-full py-3 flex gap-x-2 gap-y-3 items-start flex-wrap'>
                    <span className=' font-bold font-xl font-lato text-slate-200'>
                        Career preferences :
                    </span>

                    <div className="flex justify-start gap-x-4 font-robotoMono text-slate-100 text-sm md:text-md">
                        {studentData?.careerPreferences}
                    </div>
                </div>

                <a href="/EditStudentProfile">
                    <button 
                    className=" text-md font-bold bg-slate-800 text-blue-300 text-lg hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full h-10 rounded-md active:ring-green-300 active:text-green-300 transition-all mt-[1rem] mb-[2rem]" >
                        Edit Profile
                    </button>
                </a>
            </div>
        </div>
    );
};

export default StudentProfile;



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
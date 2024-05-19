import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { FaBuildingUser } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbBrandBlogger } from "react-icons/tb";
import { AiOutlineContacts } from "react-icons/ai";
import { RiTeamLine } from 'react-icons/ri';

const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/'},
    {text: 'Courses', icon: <AiOutlineSchedule/>, path: '/courses'},
    {text: 'About Us', icon: <MdOutlineAccountCircle/>, path: '/aboutus'},
    {text: 'Our Team', icon: <RiTeamLine/>, path: '/'},
    {text: 'Placement', icon: <IoBriefcaseOutline/>, path: '/'},
    {text: 'Blogs', icon: <TbBrandBlogger/>, path: '/'},
    {text: 'Contact Us', icon: <AiOutlineContacts/>, path: '/'},
];

const NavBar = () => {
    const [selected, setSelected] = useState(tabs[0].text);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const loginOptions = [
        { href: '/StudentLogIn', text: 'Student LogIn', icon: <PiStudentDuotone/> },
        { href: '/CompanyLogIn', text: 'Company LogIn', icon: <MdOutlineAdminPanelSettings/> },
        { href: '/AdminLogIn', text: 'Admin LogIn', icon: <FaBuildingUser/> }
    ];
    
    const registerOptions = [
        { href: '/StudentRegister', text: 'Student Register', icon: <PiStudentDuotone/> },
        { href: '/CompanyRegister', text: 'Company Register', icon: <MdOutlineAdminPanelSettings/> },
        { href: '/AdminRegister', text: 'Admin Register', icon: <FaBuildingUser/> }
    ];

    return (
        <div className=' flex items-center justify-between w-full h-[4rem] bg-[#0f172ab4 backdrop-blur pl-4 sm:pl-3 xl:pl-8'>
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
            <div className="flex-wrap items-center hidden lg:gap-x-2 xl:gap-x-3 lg:flex">
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

            {/* account section */}
            <div className='relative flex items-center h-full px-4 rounded-r-lg bg-slate-800 gap-x-8 sm:gap-x-5 lg:gap-x-5 xl:gap-x-10 sm:px-3 xl:px-8'>
                {/* Login Section */}
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={loginOptions}>
                        Sign In
                    </FlyoutLink>
                </div>

                {/* Register Section */}
                <div className="flex justify-center cursor-pointer lg:text-lg">
                    <FlyoutLink FlyoutContent={userActions} array={registerOptions}>
                        Sign Up
                    </FlyoutLink>
                </div>

                <div className='absolute top-0 w-5 h-full -left-4 bg-slate-800 actionBtnBend'/>
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
        } transition-colors px-3 py-1.5 rounded-md relative flex items-center group`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2">
                <span className='font-robotoMono lg:text-[1rem] text-white hidden Cxl:block'>{text}</span>
                <span className=' text-[1.3rem] text-white'>{icon}</span>
            </span>

            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
                    transition={{ type: "sp", duration: 0.2 }}
                />
            )}

            <span className='z-20 hidden ml-1 group-hover:block Cxl:group-hover:hidden'>
                {text}
            </span>
        </button>
    );
};

const AnimatedHamburgerButton = ({ hamburgerActive, setHamburgerActive }) => {
    return (   
        <button
        className="relative w-10 h-20 transition-colors"
        onClick={() => setHamburgerActive((pv) => !pv)}>
            <div className={`flex items-center justify-center flex-col gap-y-[.4rem] rounded-full w-10 h-[2.4rem] p-1 bg-slate-800 transition-all cursor-pointer`}>
                <div className={`w-7 h-[2px] transition-all ${hamburgerActive ? 'rotate-45 translate-y-[4px]' : 'rotate-0'}  bg-cyan-300`}/>
                <div className={`w-7 h-[2px] ${!hamburgerActive ? 'block' : 'hidden'} bg-cyan-300`}/>
                <div className={`w-7 h-[2px] ${hamburgerActive ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'}  transition-all bg-cyan-300`}/>
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
            <span className="relative text-yellow-300 font-onest">
                {children}
                <span
                    style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
                    className="absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-yellow-300 rounded-full -bottom-2 -left-2 -right-2"
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
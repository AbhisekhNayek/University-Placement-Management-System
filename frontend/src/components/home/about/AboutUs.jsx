import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiStudentDuotone } from "react-icons/pi";
import { FaBuildingUser } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import banner from '../../../images/courses/coursesBanner.jpg';
import { aboutUsCardContent, footerLists, statCard, tabs } from '../../common/DummyData';
import { FaGithub, FaInstagram, FaLinkedin, FaMeta, FaXTwitter } from 'react-icons/fa6';
import aboutUs from '../../../images/banner/aboutUs.jpg';
import statBg from '../../../images/stats/statBg.jpg';

const AboutUsCard = ({ link, title, details }) => {
    return (
        <div className={` flex items-center justify-between gap-x-10 bg-[#e7fff3] hover:bg-[#e5f5fc] ring-[1px] ring-green-700 hover:ring-blue-700 hover:shadow-md hover:shadow-blue-700 rounded-md overflow-hidden p-3 cursor-pointer group`}>
            <div className=' min-w-20 max-w-20 min-h-20 max-h-20'>
                <img 
                    src={link} 
                    className='w-full h-full '
                    alt="images" 
                />
            </div>

            <div className={` flex flex-col gap-y-3 text-green-800 hover:text-blue-900`}>
                <div className='text-2xl font-bold capitalize font-mavenPro'>
                    {title}
                </div>

                <div className=' font-mavenPro xl:text-lg'>
                    {details}
                </div>
            </div>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className='relative h-screen scroll-smooth'>
            {/* banner */}
            <div
            className={`h-full flex flex-col items-start justify-center pl-4 pr-4 sm:pl-12 md:pl-32 bg-fixed bg-cover bg-left`}
            style={{
                backgroundImage: `url('${banner}')`,
            }}>
                <div className='text-[1rem] lg:text-[1.3rem] font-montserrat font-bold text-blue-900 uppercase'>
                    Welcome to stumate
                </div>

                <div className='mt-3 font-bold text-[2.3rem] md:text-[3rem] xl:text-[4.2rem] leading-[50px] xl:leading-[70px] font-jaldi text-blue-900 text-wrap flex flex-wrap sm:w-[35rem] md:w-[43rem] capitalize'>
                    this is what we do
                </div>

                <div className='mt-3 mb-4 text-[1.1rem] sm:text-xl font-mavenPro font-bold text-black'>
                    "The roots of education are bitter, but the fruit is sweet."
                </div>
            </div>

            {/* navbar */}
            <div className='absolute flex flex-col items-center w-full top-10 gap-y-4'>
                <div className='rounded-lg w-[96%] bg-[#0f172a25] backdrop-blur-md'>
                    <NavBar/>
                </div>
            </div>

            {/* about us */}
            <div className='px-10 my-12 sm:px-24 Lmd:px-10 3xl:px-32'>
                <div className='flex gap-x-7 lg:gap-x-12 xl:gap-x-16 3xl:gap-x-36'>
                    {/* image */}
                    <div 
                    className=' rounded-md overflow-hidden shadow-xl
                        min-h-[55rem] max-h-[55rem] 
                        Lmd:min-h-[40rem] Lmd:max-h-[40rem]
                        Lmd:min-w-[21rem] Lmd:max-w-[21rem]

                        lg:min-w-[25rem] lg:max-w-[25rem]
                        xl:min-h-[48rem] xl:max-h-[48rem]
                        xl:min-w-[30rem] xl:max-w-[30rem]

                        3xl:min-h-[51rem] 3xl:max-h-[51rem] 
                        3xl:min-w-[35rem] 3xl:max-w-[35rem] 
                        hidden Lmd:block cursor-pointer
                    '>
                        <img 
                            src={aboutUs} 
                            className='w-full h-full transition-all hover:scale-105'
                            alt="about us"
                        />
                    </div>

                    {/* cards */}
                    <div className='xl:pt-10 3xl:pt-16'>
                        {/* upper */}
                        <div className='flex flex-col items-center justify-center Lmd:items-start'>
                            <div className=' uppercase font-jaldi font-bold text-[1.2rem] xl:text-[1.7rem] text-slate-700'>
                                Master everything
                            </div>

                            <div className='capitalize font-jaldi font-bold text-[2.3rem] md:text-[2.7rem] xl:text-[3.3rem] text-slate-700 text-wrap '>
                                what sets us apart
                            </div>
                        </div>

                        {/* lower */}
                        <div className='w-full mt-10 space-y-5 xl:space-y-9 3xl:space-y-7 xl:mt-16'>
                            {aboutUsCardContent.map((val, index) => (
                                <AboutUsCard
                                    key={index+val.title}
                                    title={val.title}
                                    details={val.details}
                                    link={val.link}
                                    bgColor={val.bgColor}
                                    textColor={val.textColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* stats */}
            <div 
            className={`h-[23rem] grid grid-cols-2 2xl:grid-cols-4 place-items-center place-content-center gap-14 px-4 sm:px-6 md:px-16 bg-bottom`}
            style={{
                backgroundImage: `url('${statBg}')`,
            }}>
                {statCard.map((stat, i) => (
                    <span 
                    className=' flex items-center gap-x-2 w-[7.7rem] sm:w-[12rem] md:w-[15rem] xl:w-[18rem]'
                    key={i+stat.title}>
                        <span className='w-[3.4rem] sm:w-[3.8rem] md:w-[4.5rem] xl:w-[5.1rem] h-[3.4rem] sm:h-[3.8rem] md:h-[4.5rem] xl:h-[5.1rem] hidden sm:block'>
                            <img 
                                src={stat.imgLink} 
                                className='w-full h-full '
                                alt={stat.title} 
                            />
                        </span>

                        <span className=''>
                            <div className='text-[1.4rem] md:text-[1.7rem] xl:text-[1.9rem] font-bold font-onest text-white'>
                                {stat.num}
                            </div>

                            <div className='text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] font-bold font-onest text-white capitalize'>
                                {stat.title}
                            </div>
                        </span>
                    </span>
                ))}
            </div>
            
            {/* footer */}
            <div className='mt-10'>
                <Footer/>
            </div>
        </div>
    )
}

export default AboutUs;





const NavBar = () => {
    const [selected, setSelected] = useState(tabs[2].text);
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



const Footer = () => {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const iconArray = [
        {icon: <FaMeta/>, className: 'text-2xl text-blue-500', href: '#'},
        {icon: <FaGithub/>, className: 'text-2xl text-gray-400', href: '#'},
        {icon: <FaInstagram/>, className: 'text-2xl text-pink-500', href: '#'},
        {icon: <FaXTwitter/>, className: 'text-2xl text-slate-400', href: '#'},
        {icon: <FaLinkedin/>, className: 'text-2xl text-blue-600', href: '#'},
    ];

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFocus = (event) => {
        event.target.select();
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log(email);
    };

    const handleRedirect = () => {
        navigate(`/`);
        window.scrollTo(0, 0);
    };
    
    return (
        <footer className=" bg-slate-900">
            <div className="px-4 pt-10 pb-6 mx-auto sm:px-6 lg:px-8">
                {/* upper part */}
                <div className="">
                    {/* icon and form */}
                    <div className="flex items-center justify-between text-teal-400">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 24" 
                        className="hidden h-8 cursor-pointer md:block" 
                        fill="none" 
                        onClick={handleRedirect}>
                            <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="currentColor"
                            />
                        </svg>

                        <form className="flex w-full md:w-[75%] lg:w-[65%] xl:w-[45rem] rounded-lg"
                        onSubmit={handleSubmit}>
                            <div className="relative w-full h-full">
                                <input
                                    type="email"
                                    className={`border-b-2 border-slate-300 pt-2.5 pb-2 pl-2 pr-[6rem] focus:border-b-2 ${(email || isFocused) ? 'border-indigo-500' : ''} transition-colors focus:outline-none peer bg-slate-800 w-full h-full font-robotoMono placeholder:text-cyan-300`}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder='Email address'
                                />

                                <button
                                className={`bg-slate-800 text-slate-200 font-robotoMono flex items-center justify-center flex-wrap w-[5.5rem] absolute right-0 bottom-2`}
                                type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* content */}
                    <div className="grid w-full mt-14 xsm:grid-cols-2 md:grid-cols-3 Lmd:grid-cols-5 gap-x-16 gap-y-14 place-content-center">
                        {footerLists.map((list, index) => (
                            <div 
                            className={`max-w-[10rem]`}
                            key={index}>
                                <p className="text-[1.2rem] border-b-2 border-slate-400 text-yellow-200 ">
                                    {list.title}
                                </p>

                                <div className="flex flex-col items-start justify-between mt-2 space-y-3 lg:text-md">
                                    {list.items.map((item, itemIndex) => (
                                        <span key={itemIndex}>
                                            <a href={item.href}
                                            className='text-blue-400 no-underline hover:text-green-400 hover:underline font-k2d'>
                                                {item.name}
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* social media icons */}
                    <div className='flex items-center justify-center w-full mt-10 sm:justify-end gap-x-5'>
                        {iconArray.map((item, indx) => (
                            <a 
                            key={indx} 
                            className={` rounded-full overflow-hidden ${item.className}`}
                            href={item.href}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* lower part */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                    <div className="flex flex-col items-center justify-center md:flex-row sm:justify-between gap-y-6">
                        <span className="text-[.9rem] sm:text-sm text-gray-300">&copy; 2024. Stumate. All rights reserved.</span>
                        
                        <div className=" flex items-center gap-4 text-xs text-[.9rem] sm:text-sm">
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Terms & Conditions</a>
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Privacy Policy</a>
                            <a className='no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
import React, { useEffect, useRef, useState } from 'react';
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
import { Dialog, Slide } from '@mui/material';
import SystemEngineer from './field/SystemEngineer';
import ElectricalEngineer from './field/ElectricalEngineer';
import AerospaceEngineer from './field/AerospaceEngineer';
import BigDataEngineer from './field/BigDataEngineer';
import ChemicalEngineer from './field/ChemicalEngineer';
import ComputerHardwareEngineer from './field/ComputerHardwareEngineer';
import SoftwareDeveloper from './field/SoftwareDeveloper';
import StructuralEngineer from './field/StructuralEngineer';
import UiUxDesigner from './field/UiUxDesigner';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const engineeringData = [
    {
        title: "System Engineer",
        imgSrc: "https://thumbs.dreamstime.com/z/computer-systems-engineer-concept-icon-programming-career-coding-abstract-idea-thin-line-illustration-isolated-outline-drawing-237714227.jpg",
        link: "/system-engineering"
    },
    {
        title: "Electrical Engineer",
        imgSrc: "https://img.freepik.com/free-vector/hand-drawn-electrician-cartoon-illustration_23-2151046712.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
        link: "/electrical-engineering"
    },
    {
        title: "Chemical Engineer",
        imgSrc: "https://img.freepik.com/premium-vector/chemical-lab-research-chemistry-illustration-4_567637-125.jpg",
        link: "/chemical-engineering"
    },
    {
        title: "Big Data Engineer",
        imgSrc: "https://datasciencedojo.com/wp-content/uploads/Big-Data-Engineering.jpg",
        link: "/big-data-engineering"
    },
    {
        title: "Aerospace Engineer",
        imgSrc: "https://cdn.kobo.com/book-images/b018f8bd-bbf7-4158-807a-7f9ebaa20caa/353/569/90/False/introduction-to-aerospace-engineering.jpg",
        link: "/aerospace-engineering"
    },
    {
        title: "Software Developer",
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/000/180/386/small_2x/software_engineers.jpg",
        link: "/software-engineering"
    },
    {
        title: "UI/UX Designer",
        imgSrc: "https://maduraimart.in/imgs/ui-ux-design-madurai.jpg",
        link: "/ui-ux-engineering"
    },
    {
        title: "Computer Hardware Engineer",
        imgSrc: "https://leverageedu.com/discover/wp-content/uploads/2023/03/image.png",
        link: "/computer-hardware-engineering"
    },
    {
        title: "Structural Engineer",
        imgSrc: "https://lastructuralengineer.com/wp-content/uploads/2022/08/Areas-Photo-1.jpg",
        link: "/structural-engineer"
    }
];

const CareerCounselling = () => {
    const usn = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [chosenEngineer, setChosenEngineer] = useState(0);

    const engineerPaths = [
        <SystemEngineer setShowDialog={setShowDialog}/>,
        <ElectricalEngineer setShowDialog={setShowDialog}/>,
        <ChemicalEngineer setShowDialog={setShowDialog}/>,
        <BigDataEngineer setShowDialog={setShowDialog}/>,
        <AerospaceEngineer setShowDialog={setShowDialog}/>,
        <SoftwareDeveloper setShowDialog={setShowDialog}/>,
        <UiUxDesigner setShowDialog={setShowDialog}/>,
        <ComputerHardwareEngineer setShowDialog={setShowDialog}/>,
        <StructuralEngineer setShowDialog={setShowDialog}/>,
    ];

    const handleCardClick = (indx) => {
        setChosenEngineer(indx);
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

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

    return (
        <BgColorAnimation
            child={
                <div className='h-screen overflow-y-auto'>
                    <div className='absolute top-0 w-full'>
                        <NavBar name={name}/>
                    </div>
                    
                    <div className=" h-full overflow-y-auto grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 pt-[8rem] pb-[4rem] ">
                        {engineeringData.map((val, indx) => (
                            <AnimatedGradientBorderTW key={indx}>
                                <div className=' cursor-pointer bg-[#7730fc58] rounded-lg ' onClick={() => handleCardClick(indx)}>
                                    <div className="rounded-lg w-[20rem] h-fit overflow-hidden shadow-lg">
                                        <div className=' w-full min-h-[20rem] max-h-[20rem]'>
                                            <img 
                                                src={val.imgSrc} 
                                                className="w-full h-full min-h-[20rem] max-h-[20rem]" 
                                                alt={val.title} 
                                            />
                                        </div>

                                        <div className="w-full flex items-center justify-center">
                                            <div className="text-xl font-bold font-montserrat text-violet-400 w-full min-h-[6rem] max-h-[6rem] flex items-center justify-center">
                                                {val.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedGradientBorderTW>
                        ))}
                    </div>

                    <Dialog
                    fullScreen
                    open={showDialog}
                    onClose={handleCloseDialog}
                    TransitionComponent={Transition}>
                        {engineerPaths[chosenEngineer]}
                    </Dialog>
                </div>
            }
        />
    );
}

export default CareerCounselling;



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

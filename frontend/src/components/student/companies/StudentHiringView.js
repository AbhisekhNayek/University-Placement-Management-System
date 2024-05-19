import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import dayjs from 'dayjs';
import gamingPc from '../../../images/gamingPc.jpg';

const StudentHiringView = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { postingData } = location.state;
	const usn = localStorage.getItem('token');
	const jobid = postingData._id;
	const [applicationStatus, setApplicationStatus] = useState('');
	const [dates, setDates] = useState({
		drvFrom: '',
		drvTo: '',
		lstDt: ''
	});
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

	const [applied, setApplied] = useState(false);

	useEffect(() => {
		const checkApplicationStatus = async () => {
			try {
				const response = await fetch('http://localhost:1337/api/checkApplicationStatus', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						usn,
						jobid,
					}),
				});
				const data = await response.json();
				setApplied(data.applied);
				setApplicationStatus(data.status);
			} catch (error) {
				console.error('Error checking application status:', error);
			}
		};

		checkApplicationStatus();
	}, [usn, jobid]);

	useEffect(() => {
		const drvFrom = dayjs(postingData?.DriveFrom).format('MMMM DD, YYYY');
		const drvTo = dayjs(postingData?.DriveTO).format('MMMM DD, YYYY');
		const lstDt = dayjs(postingData?.LastDate).format('MMMM DD, YYYY');

		setDates({ drvFrom, drvTo, lstDt });
	}, []);

	const handleApply = async (e) => {
		e.preventDefault();

		const response = await fetch('http://localhost:1337/api/newJobApplied', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				usn,
				jobid,
			}),
		});

		const data = await response.json();
		console.log(data);
		if (data.status === 'ok') {
			alert('Job Applied Successfully');
			setApplied(true);
			navigate('/StudentHome', { replace: true });
		}
	};

	return (
		<div className='h-screen overflow-y-auto bg-gradient-to-br from-indigo-300 via-green-200 to-violet-300'>
			<NavBar name={name}/>
			
			<div className="relative flex flex-col items-center px-3 ">
				<div className="z-10 flex items-center justify-center pt-2 mb-6 text-4xl font-bold tracking-wider text-transparent font-lato bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text">
					{postingData?.Name}
				</div>
				
				<div className="text-justify z-10 max-w-[70rem] mb-4">
					<div className='flex flex-col mb-4 overflow-hidden rounded-lg Lmd:flex-row gap-x-7 Lmd:p-1'>
						<img 
							alt="Job Image"
							className="w-[33rem] h-[23rem] Lmd:w-[30rem] Lmd:h-[40rem] Lmd:rounded-lg Lmd:overflow-hidden object-cover sm:object-center" 
							src={gamingPc} 
						/>
						
						<div className='relative px-3 py-2 overflow-y-auto bg-slate-20 Lmd:rounded-lg bg-slate-300 Lmd:bg-transparent'>
							<img 
								className="w-full h-full absolute top-0 left-0 -z-10 blur-[80px] object-cover hidden Lmd:block" 
								src={gamingPc} 
								alt="Job Image" 
							/>

							<div className='font-robotoMono font-bold text-[1.4rem] tracking-wide text-indigo-300 bg-indigo-800 py-1.5 px-2 text-center rounded-md overflow-hidden '>
								{postingData?.jobRole}
							</div>
							
							<div className='mt-4 font-lato'>
								<div className=' bg-slate-900 tracking-wider text-indigo-300 rounded-md py-1.5 text-[1.1rem] px-3 mb-3'>
									Package: {postingData?.Package}
								</div>
							
								<div className='flex items-center mb-3 gap-x-3 '>
                                    <div className=' bg-green-950 text-green-300 ring-[1px] ring-green-200 rounded-full px-3 py-[.3rem] text-[1.1rem]'>
										{postingData?.Qualification}
									</div>
                                    <div className=' bg-green-950 text-green-300 ring-[1px] ring-green-200 rounded-full px-3 py-[.3rem] text-[1.1rem]'>
										{postingData?.Specialization}
									</div>
                                </div>

								<div className=' bg-green-950 text-green-300 ring-[1px] ring-green-200 rounded-full px-3 py-2 mb-3'>
									{postingData?.Experience} of experience
								</div>

								<div className='bg-blue-950 tracking-wider text-blue-300 rounded-md py-2 text-[1.1rem] px-3 mb-3 space-y-2'>
									<div>
										Eligibility: {postingData?.Eligibility} marks in graduation
									</div>

									<div>
										Location: {postingData?.JobLocation}
									</div>
								
									<div>
										Drive Date: {dates.drvFrom} to {dates.drvTo}
									</div>

									<div>
										Last Date: {dates.lstDt}
									</div>
								</div>

								<div className='bg-violet-950 tracking-wider text-violet-300 rounded-md py-1.5 text-[1.1rem] px-3 mb-2'>
									Job Description: {postingData?.JobDescription}
								</div>
							</div>
						</div>
					</div>

					{applied ? (
						<div className='bg-green-800 uppercase text-green-300 font-bold px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition font-lato tracking-wider flex items-center justify-center gap-x-5 Lsm: w-[10rem]'>
							{applicationStatus}
							<div class="flex-col gap-4 w-full flex items-center justify-center">
								<div class="w-6 h-6 border-2 animate-spin border-green-800  border-t-green-300 border-b-green-300 rounded-full"/>
							</div>
						</div>
					) : (
						<button 
						className='bg-green-800 uppercase text-green-300 font-bold px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition font-lato tracking-wider'
						onClick={handleApply}>
							Apply
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default StudentHiringView;





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

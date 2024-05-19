import * as React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { TbDatabaseSearch } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { 
    IconButton, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Collapse, 
    Box, 
    Typography 
} from '@mui/material';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Row = ({ row }) => {
    const [open, setOpen] = useState(false);
    const averageSalary = row.skills.reduce((total, skill) => total + parseFloat(skill.averagePackage), 0) / row.skills.length;

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell
				sx={{
					color: '#216C34',
					fontSize: '16px',
				}}>
                    <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}>
                        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row" 
				sx={{
					color: '#216C34',
					fontSize: '16px',
				}}>
                    {row.department}
                </TableCell>

                <TableCell align="right"
				sx={{
					color: '#216C34',
					fontSize: '16px',
				}}>{averageSalary.toFixed(2)} LPA</TableCell>
            </TableRow>

            {open && (
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Skills
                                </Typography>

								<TableContainer 
								component={Paper} 
								sx={{
									margin: '10px',
									borderBottom: '.5px solid black',
									backgroundColor: '#FFFCF4',
								}}>
									<Table size="small" aria-label="skills">
										<TableHead>
											<TableRow>
												<TableCell sx={{
													fontSize: '16px',
													fontWeight: 'bold',
													color: '#008C37',
													border: `2px solid #3E8C5F`
												}}>Job Position</TableCell>

												<TableCell sx={{
													fontSize: '16px',
													fontWeight: 'bold',
													color: '#008C37',
													border: `2px solid #3E8C5F`
												}}>Required Skills</TableCell>

												<TableCell sx={{
													fontSize: '16px',
													fontWeight: 'bold',
													color: '#008C37',
													border: `2px solid #3E8C5F`
												}} align="right">Average Package (LPA)</TableCell>
											</TableRow>
										</TableHead>

										<TableBody >
											{row.skills.map((skill) => (
												<TableRow key={skill.jobPosition}>
													<TableCell sx={{
														fontSize: '15px',
													}}>{skill.jobPosition}</TableCell>
													<TableCell sx={{
														fontSize: '15px',
													}}>{skill.requiredSkills}</TableCell>
													<TableCell sx={{
														fontSize: '15px',
													}} align="right">{skill.averagePackage}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </React.Fragment>
    );
};
  
const EngineeringSkillsTable = () => {
    const engineeringSkillsData = [
        {
            department: 'Mechanical Engineering',
            skills: [
                { jobPosition: 'Mechanical Engineer', requiredSkills: 'CAD, SolidWorks, Thermodynamics', averagePackage: '6 LPA' },
                { jobPosition: 'Design Engineer', requiredSkills: 'AutoCAD, Machine Design, FEA', averagePackage: '7 LPA' },
                { jobPosition: 'Manufacturing Engineer', requiredSkills: 'Lean Manufacturing, CNC Machining', averagePackage: '5.5 LPA' },
                { jobPosition: 'HVAC Engineer', requiredSkills: 'Refrigeration, Air Conditioning, HVAC Design', averagePackage: '6.5 LPA' },
                { jobPosition: 'Robotics Engineer', requiredSkills: 'Robot Programming, Controls, Automation', averagePackage: '8 LPA' },
            ],
        },
        {
            department: 'Electrical Engineering',
            skills: [
                { jobPosition: 'Electrical Engineer', requiredSkills: 'Circuit Design, Power Systems, PLC Programming', averagePackage: '5.8 LPA' },
                { jobPosition: 'Power Electronics Engineer', requiredSkills: 'Power Electronics, Motor Drives, PCB Design', averagePackage: '6.2 LPA' },
                { jobPosition: 'Control Systems Engineer', requiredSkills: 'Control Systems, PLC Programming, Instrumentation', averagePackage: '6.5 LPA' },
                { jobPosition: 'Renewable Energy Engineer', requiredSkills: 'Solar Power Systems, Wind Energy, Energy Management', averagePackage: '7 LPA' },
                { jobPosition: 'Automation Engineer', requiredSkills: 'PLC Programming, Robotics, SCADA', averagePackage: '6.8 LPA' },
            ],
        },
        {
            department: 'Civil Engineering',
            skills: [
                { jobPosition: 'Structural Engineer', requiredSkills: 'Structural Analysis, AutoCAD, Construction Management', averagePackage: '5.5 LPA' },
                { jobPosition: 'Transportation Engineer', requiredSkills: 'Traffic Engineering, Highway Design, GIS', averagePackage: '6 LPA' },
                { jobPosition: 'Environmental Engineer', requiredSkills: 'Water Treatment, Environmental Impact Assessment', averagePackage: '5.8 LPA' },
                { jobPosition: 'Geotechnical Engineer', requiredSkills: 'Soil Mechanics, Foundation Design, Slope Stability', averagePackage: '6.2 LPA' },
                { jobPosition: 'Project Manager', requiredSkills: 'Construction Planning, Risk Management, Contract Administration', averagePackage: '7 LPA' },
            ],
        },
        {
            department: 'Electronics Engineering',
            skills: [
                { jobPosition: 'Electronics Engineer', requiredSkills: 'Analog Electronics, Digital Electronics, PCB Design', averagePackage: '5.6 LPA' },
                { jobPosition: 'Embedded Systems Engineer', requiredSkills: 'Microcontrollers, Firmware Development, RTOS', averagePackage: '6 LPA' },
                { jobPosition: 'Telecommunication Engineer', requiredSkills: 'Wireless Communication, Network Protocols, RF Engineering', averagePackage: '6.5 LPA' },
                { jobPosition: 'VLSI Design Engineer', requiredSkills: 'ASIC Design, Verilog, FPGA Programming', averagePackage: '7.2 LPA' },
                { jobPosition: 'Signal Processing Engineer', requiredSkills: 'Digital Signal Processing, Image Processing, MATLAB', averagePackage: '6.8 LPA' },
            ],
        },
        {
                department: 'Computer Science',
                skills: [
                { jobPosition: 'Software Developer', requiredSkills: 'JavaScript, React, Node.js', averagePackage: '8 LPA' },
                { jobPosition: 'Data Scientist', requiredSkills: 'Python, Machine Learning, Data Visualization', averagePackage: '9 LPA' },
                { jobPosition: 'Cybersecurity Analyst', requiredSkills: 'Network Security, Ethical Hacking, Incident Response', averagePackage: '9.5 LPA' },
                { jobPosition: 'Cloud Engineer', requiredSkills: 'AWS, Azure, DevOps', averagePackage: '10 LPA' },
                { jobPosition: 'Artificial Intelligence Engineer', requiredSkills: 'Deep Learning, Natural Language Processing, Neural Networks', averagePackage: '12 LPA' },
                ],
        },
    ];
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

    return (
        <div className='w-screen h-screen '>
            <NavBar name={name}/>

			<div className='flex justify-center w-full '>
				<TableContainer 
				component={Paper} 
				sx={{
					margin: '10px',
					width: '95%',
					borderBottom: '1px solid black',
					backgroundColor: '#EFFDF5',
				}}>
					<Table aria-label="collapsible table">
						<TableHead>
							<TableRow>
                                {['Dropdown', 'Department', 'Average salary'].map((cell, indx) => (
                                    <TableCell 
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#008C37',
                                        border: `2px solid #3E8C5F`
                                    }}
                                    key={indx}>
                                        {cell}
                                    </TableCell>
                                ))}
							</TableRow>
						</TableHead>
						
						<TableBody sx={{color: 'white'}}>
							{engineeringSkillsData.map((departmentData) => (
								<Row key={departmentData.department} row={departmentData} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
        </div>
    );
};

export default EngineeringSkillsTable;




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
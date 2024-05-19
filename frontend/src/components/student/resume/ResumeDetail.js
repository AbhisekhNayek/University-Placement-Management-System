import { useEffect, useState } from 'react';
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
import { Form, Row, Col } from 'react-bootstrap'
import './datePick.css'

function ResumeForm() {
    const navigate = useNavigate();
    const usn=localStorage.getItem('token')
    const [linkedinId, setLinkedinId] = useState('');
    const [githubId, setGithubId] = useState('');
    const [about, setAbout] = useState('');
    const [techStack, setTechStack] = useState('');
    const [projects, setProjects] = useState([{ name: '', technology: '', details: '' }]);
    const [hobbies, setHobbies] = useState('');
    const [experience, setExperience] = useState([{
        details: '',
        companyName: '',
        duration: {
            startingDt: new Date(),
            endingDt: new Date(),
        },
        position: '',
        mode: '',
    }]);
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

    const handleProjectChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };

    const addProjectField = () => {
        setProjects([...projects, { name: '', technology: '', details: '' }]);
    };

    const removeProjectField = (index) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(index, 1);
        setProjects(updatedProjects);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            usn,
            linkedinId,
            projects,
            hobbies,
        };

        const data1 = {
            usn,
            linkedinId,
            githubId,
            about,
            projects,
            hobbies,
            techStack,
            experience,
        };

        navigate('/Resume', { state: { resumedata: data1 } })

        try {
            const response = await fetch(`http://localhost:1337/api/createresume/${usn}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Resume data submitted successfully');
                navigate('/StudentHome', { replace: true });
            } else {
                console.error('Error submitting resume data');
            }
        } catch (error) {
            console.error('Error submitting resume data:', error);
        }

        // Reset form fields after submission
        setLinkedinId('');
        setProjects([{ name: '', technology: '', details: '' }]);
        setHobbies('');
    };

    const handleReset = () => {
        setLinkedinId('');
        setGithubId('');
        setTechStack('');
        setProjects([{ 
            name: '', 
            technology: '', 
            details: '' 
        }]);
        setHobbies('');
        setExperience([{
            details: '',
            companyName: '',
            duration: {
                startingDt: new Date(),
                endingDt: new Date(),
            },
            position: '',
            mode: '',
        }])
    };

    const handleExperienceValue = (index, field, value) => {
        const updatedExperience = [...experience];

        if (field === 'startingDt' || field === 'endingDt') {
            updatedExperience[index].duration[field] = value;

            const startingDate = new Date(updatedExperience[index].duration.startingDt);
            const endingDate = new Date(updatedExperience[index].duration.endingDt);

            if (startingDate > endingDate || endingDate < startingDate) {
                window.alert("Starting date must be before ending date");
                return;
            }
        } else {
            updatedExperience[index][field] = value;
        }

        setExperience(updatedExperience);
    };

    const addExperience = () => {
        setExperience([
            ...experience, {
                details: '',
                companyName: '',
                duration: {
                    startingDt: new Date(),
                    endingDt: new Date(),
                },
                position: ''
            }
        ])
    };

    const removeExperienceField = (index) => {
        const updatedExp = [...experience];
        updatedExp.splice(index, 1);
        setExperience(updatedExp);
    };

    return (
        <BgColorAnimation
            child={
                <div className='flex flex-col w-screen h-screen overflow-y-auto md:pb-10 md:items-center'>
                    <div className='sticky top-0 left-0 w-full '>
                        <NavBar name={name}/>
                    </div>

                    <div className="mt-2 mb-4 text-3xl font-bold text-center text-transparent font-montserrat bg-gradient-to-br from-indigo-600 via-blue-400 to-violet-400 bg-clip-text md:text-4xl md:mb-5">
                        Create Resume
                    </div>

                    <div className={`bg-[#ffffff30] shadow-md rounded h-[79vh] md:h-auto overflow-y-auto px-2 md:px-4 py-3 md:w-[85%] lg:w-[70%] 2xl:w-[66%]`}>
                        <Form onSubmit={handleSubmit} className=''>
							<Row className="mb-[.9rem] md:mb-4 space-y-[.9rem] md:space-y-0">
                                {/* linkedin ID */}
								<Form.Group as={Col} xs={12} md={6}>
									<input
										type="text"
										className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${linkedinId ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
										value={linkedinId}
										onChange={(e) => setLinkedinId(e.target.value)}
										placeholder='LinkedIn ID'
										required
										autoFocus
									/>
								</Form.Group>
								
								{/* github ID */}
								<Form.Group as={Col} xs={12} md={6}>
									<input
										type="text"
										className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${githubId ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
										value={githubId}
										onChange={(e) => setGithubId(e.target.value)}
										placeholder='Github ID'
										required
									/>
								</Form.Group>
							</Row>
                            
                            {/* about */}
                            <div className="mb-4">
                                <textarea
                                    value={about}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${githubId ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="About"
                                    required
                                />
                            </div>
                            
                            {/* projects */}
                            <div className="mb-3">
                                {projects.map((project, index) => (
                                    <div key={index}>
                                        <div className="mb-3 text-2xl font-bold text-violet-300 font-mavenPro">
                                            Project {index + 1}
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${project.name ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                id={`projectName${index}`}
                                                value={project.name}
                                                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                                                placeholder='Project name'
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${project.technology ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                id={`projectTechnology${index}`}
                                                value={project.technology}
                                                onChange={(e) => handleProjectChange(index, 'technology', e.target.value)}
                                                placeholder='Technology used'
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <textarea
                                                id={`projectDetails${index}`}
                                                className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${project.details ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                value={project.details}
                                                onChange={(e) => handleProjectChange(index, 'details', e.target.value)}
                                                placeholder='Details'
                                            />
                                        </div>

                                        {index !== 0 && (
                                            <div className='flex items-center justify-center mb-3 md:justify-end'>
                                                <button
                                                type="button"
                                                className="w-full px-3 py-2 font-bold text-blue-400 transition-all rounded-full text-md bg-slate-800 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 sm:w-fit active:ring-green-300 active:text-green-300"
                                                onClick={() => removeProjectField(index)}>
                                                    Remove Project {index+1}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button 
                                type="button" 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-fit px-3 py-1.5 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                                onClick={addProjectField}>
                                    Add Project
                                </button>
                            </div>

                            {/* hobby */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${hobbies ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    id="hobbies"
                                    value={hobbies}
                                    onChange={(e) => setHobbies(e.target.value)}
                                    placeholder='Hobbies'
                                />
                            </div>
                            
                            {/* tech stack */}
                            <div className="mb-5">
                                <textarea
                                    value={techStack}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${hobbies ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    onChange={(e) => setTechStack(e.target.value)}
                                    placeholder='Tech Stack'
                                />
                            </div>
                            
                            {/* experience */}
                            <div className="mb-3">
                                {experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="mb-3 text-2xl font-bold text-violet-300 font-mavenPro">
                                            Experience {index + 1}
                                        </div>
                                        
                                        <Row className="mb-[.9rem] md:mb-4 space-y-[.9rem] md:space-y-0">
                                            {/* company name */}
                                            <Form.Group as={Col} xs={12} md={4}>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={exp.companyName}
                                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${exp.companyName ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                    onChange={(e) => handleExperienceValue(index, 'companyName', e.target.value)}
                                                    placeholder='Company name'
                                                />
                                            </Form.Group>
                                            
                                            {/* job role */}
                                            <Form.Group as={Col} xs={12} md={4}>
                                                <input
                                                    type="text"
                                                    name="position"
                                                    value={exp.position}
                                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${exp.position ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                    onChange={(e) => handleExperienceValue(index, 'position', e.target.value)}
                                                    placeholder='Job role'
                                                    {...exp.companyName ? { required: 'required' } : {}}
                                                />
                                            </Form.Group>

                                            {/* mode */}
                                            <Form.Group as={Col} xs={12} md={4}>
                                                <select
                                                name="mode"
                                                value={exp.mode}
                                                className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full text-blue-300 font-robotoMono ${exp.mode ? 'border-indigo-400 text-green-300' : ''} focus:border-indigo-400 w-full`}
                                                onChange={(e) => handleExperienceValue(index, 'mode', e.target.value)}
                                                {...exp.companyName ? { required: 'required' } : {}}>
                                                    <option className='text-gray-300' value='' disabled>Mode</option>
                                                    <option value="remote">Remote</option>
                                                    <option value="hybrid">Hybrid</option>
                                                    <option value="on-site">On-site</option>
                                                </select>
                                            </Form.Group>
                                        </Row>

                                        <textarea
                                            name="details"
                                            value={exp.details}
                                            className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${exp.details ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full mb-[.9rem] md:mb-4`}
                                            onChange={(e) => handleExperienceValue(index, 'details', e.target.value)}
                                            placeholder='Experience details'
                                            {...exp.details ? { required: 'required' } : {}}
                                        />

                                        <Row className="mb-[.9rem] md:mb-4 space-y-[.9rem] md:space-y-0">
                                            <Form.Group as={Col} md={6} className='relative'>
                                                <input
                                                    type="date"
                                                    name="startingDt"
                                                    value={exp.duration.startingDt}
                                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${exp.duration.startingDt ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                    placeholder='Starting date'
                                                    onChange={(e) => handleExperienceValue(index, 'startingDt', e.target.value)}
                                                    {...exp.details ? { required: 'required' } : {}}
                                                />

                                                <div className=' absolute text-cyan-300 right-14 top-1/2 -translate-y-1/2 font-lato'>
                                                    Starting date
                                                </div>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md={6} className=' relative'> 
                                                <input 
                                                    type="date"
                                                    name="endingDt"
                                                    value={exp.duration.endingDt}
                                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${exp.duration.endingDt ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                                    placeholder='Ending date'
                                                    onChange={(e) => handleExperienceValue(index, 'endingDt', e.target.value)}
                                                    {...exp.details ? { required: 'required' } : {}}
                                                />

                                                <div className=' absolute text-cyan-300 right-14 top-1/2 -translate-y-1/2 font-lato'>
                                                    Ending date
                                                </div>
                                            </Form.Group>
                                        </Row>

                                        {index !== 0 && (
                                            <div className='flex items-center justify-center mb-3 md:justify-end'>
                                                <button
                                                type="button"
                                                className="w-full px-3 py-2 font-bold text-blue-400 transition-all rounded-full text-md bg-slate-800 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 sm:w-fit active:ring-green-300 active:text-green-300"
                                                onClick={() => removeExperienceField(index)}>
                                                    Remove Experience {index+1}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                
                                <button 
                                type="button" 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-fit px-3 py-1.5 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                                onClick={addExperience}>
                                    Add Experience
                                </button>
                            </div>

                            {/* submit */}
                            <div className='flex items-center justify-between gap-x-5'>
                                <button 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-fit px-4 py-1.5 rounded-md active:ring-green-300 active:text-green-300 transition-all" 
                                type="submit">
                                    Submit
                                </button>
                                
                                <button 
                                className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-fit px-4 py-1.5 rounded-md active:ring-green-300 active:text-green-300 transition-all" 
                                onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            }
        />
    );
}

export default ResumeForm;





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
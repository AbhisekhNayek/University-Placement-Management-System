import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import profImg from '../../../images/resume/profileImg.jfif';
import avatar from '../../../images/resume/avatar.png';
import './resume.css';

const Resume = () => {
    const location = useLocation();
    const { resumedata } = location.state;
    const [personDetails, setPersonDetails] = useState('');
    const usn = localStorage.getItem('token');
    const iconContainer = [
        {link: personDetails.email, icon: <MdOutlineEmail/>, type: 'mail'},
        {link: resumedata.linkedinId, icon: <FaLinkedinIn/>, type: 'link'},
        {link: resumedata.githubId, icon: <FaGithub/>, type: 'link'},
        {link: '#', icon: <FaXTwitter/>, type: 'link'},
        {link: personDetails.contactNumber, icon: <FiPhone/>, type: 'tel'},
    ];
    const educationalDetails = [
        {
            course: personDetails?.course3, 
            specialization: personDetails?.specialization, 
            institutionName: personDetails?.collegeName, 
            marks: personDetails?.score3,
            completedYear: personDetails?.yearOfCompletion2
        },
        {
            course: personDetails?.course2, 
            specialization: undefined, 
            institutionName: personDetails?.schoolName2, 
            marks: personDetails?.score2,
            completedYear: personDetails?.yearOfCompletion1
        },
    ];
    
    useEffect(() => {
        fetch(`http://localhost:1337/api/StudentProfile/${usn}`)
            .then((response) => response.json())
            .then((data) => {
                setPersonDetails(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const createResume = () => {
        window.print();
    };
    

    const ProjectCard = ({ title, detail, tech }) => {
        return (
            <div className='p-2 bg-gray-50 ring-[1px] ring-gray-500 rounded-md flex flex-col items-start justify-between'>
                <div className=' space-y-3'>
                    <div className=' text-[1rem] font-lato font-bold'>
                        {title}
                    </div>

                    <div className=' font-robotoMono text-[.75rem] flex flex-wrap mt-2'>
                        {detail}
                    </div>
                </div>

                <div className=' flex items-center flex-wrap gap-1.5 mt-5'>
                    {tech.split(',').map((val, indx) => (
                        <div 
                        className=' p-1 bg-gray-200 text-black font-bold font-robotoMono text-[.65rem] ring-[1px] ring-slate-400 rounded-[3px]'
                        key={indx}>
                            {val}
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const ExperienceCard = ({ companyName, details, startingDt, endingDt, role, mode }) => {
        return(
            <div className=' w-full'>
                <div className='w-full flex items-center justify-between'>
                    <div className=' space-x-2 flex'>
                        <div className=' font-lato font-bold text-[1rem]'>
                            {companyName}
                        </div>
                        <div className=' bg-gray-100 text-black rounded-md font-robotoMono text-[.78rem] py-1 px-2 font-bold'>
                            {mode.trim()}
                        </div>
                    </div>

                    <div className=' font-lato'>
                        {new Date(startingDt).getFullYear()} - {new Date(endingDt).getFullYear()}
                    </div>
                </div>

                <div className='text-black rounded-md font-robotoMono text-[.9rem]'>
                    {role}
                </div>

                <div className='text-black rounded-md font-robotoMono text-[.77rem] mt-2'>
                    {details}
                </div>
            </div>
        )
    };
    
    return (
        <div className='flex justify-center h-screen overflow-y-auto py-10 px-4'>
            <div className="min-w-[40rem] max-w-[40rem]">
                {/* resume */}
                <>
                    {/* personal details */}
                    <div className=' flex items-start justify-between gap-x-6'>
                        {/* details */}
                        <div className=''>
                            <div className="text-4xl font-bold font-lato">
                                {personDetails?.firstName} {personDetails?.lastName}
                            </div>

                            <div className=' font-robotoMono text-gray-800 mt-2 text-[.9rem] font-semibold'>
                                {personDetails.careerPreferences}
                            </div>

                            <div className='mt-.5 flex items-center gap-x-1 text-gray-800 font-semibold'>
                                <TbWorld className=' text-[.9rem]'/>
                                <div className=' capitalize font-robotoMono text-[.8rem] space-x-1'>
                                    <span>{personDetails.country},</span>
                                    <span>{personDetails.state},</span>
                                    <span>{personDetails.city}</span>
                                </div>
                            </div>

                            <div className='mt-2.5 flex items-center justify-start gap-x-2'>
                                {iconContainer.map((icon, index) => (
                                    <a 
                                    key={index}
                                    className=' no-underline text-slate-800'
                                    href={icon.type === 'mail' ? `mailto:${icon.link}` : icon.type === 'tel' ? `tel:+91${icon.link}` : icon.link}
                                    target='_blank'
                                    link='noopener noreferrer'>
                                        <div className=' bg-gray-200 text-gray-700 text-[1rem] p-[4px] rounded-sm ring-[1px] ring-gray-500'>
                                            {icon.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* profile img */}
                        <div 
                        className='w-[6rem] h-[7rem] rounded-md overflow-hidden bg-cover bg-center' 
                        style={{
                            backgroundImage: `url(${profImg || avatar})`
                        }}/>
                    </div>
                    
                    {/* about */}
                    <div className='mt-10'>
                        <div className='font-lato text-2xl font-bold'>
                            About
                        </div>

                        <div className=' font-robotoMono text-[.82rem] text-black text-justify mt-3'>
                            {resumedata?.about}
                        </div>
                    </div>

                    {/* work experience */}
                    <div className='mt-7'>
                        <div className='font-lato text-2xl font-bold capitalize'>
                            work experience
                        </div>

                        <div className=' font-robotoMono text-[.82rem] text-black text-justify mt-3 flex flex-col items-start gap-y-5 flex-wrap w-full'>
                            {resumedata.experience.map((experience, index) => (
                                <ExperienceCard
                                    key={index}
                                    companyName={experience.companyName}
                                    details={experience.details}
                                    startingDt={experience.duration.startingDt}
                                    endingDt={experience.duration.endingDt}
                                    role={experience.position}
                                    mode={experience.mode}
                                />
                            ))}
                        </div>
                    </div>

                    {/* skills */}
                    <div className='mt-7'>
                        <div className='font-lato text-2xl font-bold'>
                            Skills
                        </div>

                        <div className=' font-robotoMono text-[.82rem] text-black text-justify mt-3 flex items-start gap-x-2 gap-y-1 flex-wrap'>
                            {resumedata?.techStack.split(',').map((techStack, index) => (
                                <span 
                                className=' bg-gray-800 text-white px-2 py-1 rounded-md'
                                key={index}>
                                    {techStack}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* education */}
                    <div className='mt-8'>
                        <div className='font-lato text-2xl font-bold'>
                            Education
                        </div>

                        {educationalDetails.map((val, indx) => (
                            <div className='mt-3' key={indx}>
                                <div className=' w-full flex justify-between items-center'>
                                    <div className=' font-montserrat font-bold text-[1rem]'>
                                        {val.institutionName}
                                    </div>
                                    <div className=' font-lato'>
                                        {val.completedYear}
                                    </div>
                                </div>

                                <div className=' font-robotoMono text-[.93rem]'>
                                    {val.course} {val.specialization}
                                </div>

                                <div className=' flex gap-x-2 flex-wrap mt-1'>
                                    <span className=' font-robotoMono text-[.9rem]'>
                                        Percentile:
                                    </span>
                                    <span className=' font-lato text-[.95rem]'>
                                        {val.marks}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* projects */}
                    <div className='mt-7'>
                        <div className='font-lato text-2xl font-bold'>
                            Projects
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                            {resumedata?.projects?.map((project, indx) => (
                                <ProjectCard
                                    key={indx}
                                    title={project.name}
                                    detail={project.details}
                                    tech={project.technology}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* hobbies */}
                    <div className='mt-7'>
                        <div className='font-lato text-2xl font-bold'>
                            Hobbies
                        </div>

                        <div className=' font-robotoMono text-[.82rem] text-black text-justify mt-3 flex items-start gap-x-2 gap-y-1 flex-wrap'>
                            {resumedata?.hobbies?.split(',').map((hobby, index) => (
                                <span 
                                className=' bg-gray-800 text-gray-200 px-2 py-1 rounded-md'
                                key={index}>
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </>

                {/* print button */}
                <div className=' w-full pt-12 pb-8 flex items-center justify-center'>
                    <button onClick={createResume} className=' px-6 py-2 text-xl bg-[#1e5379] text-cyan-300 rounded-md tracking-wide resume'>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;

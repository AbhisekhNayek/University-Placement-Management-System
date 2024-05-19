const workingStyle = [
    {
        title: 'Develop software applications:',
        details: 'Software Developers design, code, and test software applications, ranging from web and mobile apps to desktop software.'
    },
    {
        title: 'Collaborate with stakeholders:',
        details: 'They collaborate with clients, product managers, and designers to understand requirements and deliver high-quality software solutions.'
    },
    {
        title: 'Implement best coding practices:',
        details: 'Software Developers follow best coding practices, such as writing clean, maintainable code and using version control systems.'
    },
    {
        title: 'Continuous learning and improvement:',
        details: 'They stay updated with the latest technologies and trends in software development and continuously improve their skills.'
    }
];

const examples = [
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Facebook",
    "Netflix",
    "Twitter",
    "LinkedIn",
    "Uber",
    "Airbnb",
    "Salesforce",
    "Adobe",
    "Oracle",
    "IBM"
];

const careerBenefits = [
    {
        title: "High demand",
        details: "Software Developers are in high demand as businesses increasingly rely on technology to drive innovation and growth."
    },
    {
        title: "Competitive salaries",
        details: "Software Developers command competitive salaries due to their specialized skills in designing and building software applications."
    },
    {
        title: "Diverse career opportunities",
        details: "Software Developers can pursue diverse career paths, including web development, mobile app development, and software engineering."
    },
    {
        title: "Remote work options",
        details: "Many companies offer remote work options for Software Developers, allowing for flexibility and work-life balance."
    },
    {
        title: "Continuous learning",
        details: "The field of software development is constantly evolving, offering opportunities for Software Developers to learn new languages, frameworks, and tools."
    },
    {
        title: "Impactful work",
        details: "Software Developers have the opportunity to work on projects that have a significant impact on society, such as healthcare, education, and sustainability."
    }
];

const industryCompanies = [
    {
        title: "Technology giants",
        details: "Companies like Google, Microsoft, Apple, and Amazon lead the way in software development and innovation."
    },
    {
        title: "Tech startups",
        details: "Tech startups like Airbnb, Uber, and Slack disrupt industries and create innovative software solutions."
    },
    {
        title: "Enterprise software",
        details: "Companies like Salesforce, Oracle, and SAP provide enterprise software solutions for businesses to manage operations and data."
    },
    {
        title: "Digital agencies",
        details: "Digital agencies specialize in web and mobile app development, creating custom solutions for clients across various industries."
    }
];

const SoftwareDeveloper = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Software Developer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Software Developers play a crucial role in designing, developing, and testing software applications across various platforms and industries.
                    </div>

                    {/* what they do */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            What they do?
                        </div>
                    
                        {workingStyle.map((val, indx) => (
                            <div className='mt-2 space-x-2' key={indx}>
                                <span className='w-fit font-lato font-bold text-[1rem]'>
                                    {indx + 1}) {val.title}
                                </span>
                                <span className='text-black font-robotoMono text-[.9rem]'>
                                    {val.details}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    {/* companies */}
                    <>
                        <div className=' mt-5 mb-2 font-bold text-2xl font-jaldi'>
                            Companies
                        </div>

                        <div className='flex items-center flex-wrap gap-2'>
                            {examples.map((val, indx) => (
                                <div className=' px-3 py-1 bg-gray-700 text-gray-200 text-[.8rem] md:text-[.9rem] font-robotoMono rounded-md shadow-lg ' key={indx}>
                                    {val}
                                </div>
                            ))}
                        </div>
                    </>

                    {/* why to become software developer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a Software Developer?
                        </div>
                    
                        {careerBenefits.map((val, indx) => (
                            <div className='mt-2 space-x-2' key={indx}>
                                <span className='w-fit font-lato font-bold text-[1rem]'>
                                    {indx + 1}) {val.title}:
                                </span>
                                <span className='text-black font-robotoMono text-[.9rem]'>
                                    {val.details}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    {/* other industries */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Other industries:
                        </div>

                        <div className='mt-2 pl-6'>
                            {industryCompanies.map((val, indx) => (
                                <div className='mt-2 space-x-2' key={indx}>
                                    <span className='w-fit font-lato font-bold text-[1rem]'>
                                        {indx + 1}) {val.title}:
                                    </span>
                                    <span className='text-black font-robotoMono text-[.9rem]'>
                                        {val.details}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>

                    {/* Future scope */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Future Outlook:
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for software developers is bright, with rapid advancements in technology driving demand for skilled professionals. As industries continue to digitalize and automate processes, software developers will play a crucial role in developing innovative solutions to address evolving needs. With emerging technologies like artificial intelligence, machine learning, and blockchain gaining prominence, software developers will have abundant opportunities to create cutting-edge applications and platforms that transform industries and improve quality of life.
                        </div>
                    </>

                    {/* Example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example:
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            Consider a software developer working for a fintech startup. Their role might involve developing a secure and user-friendly mobile banking application that allows customers to manage their finances conveniently. They would collaborate with designers, product managers, and quality assurance engineers to define requirements, design the user interface, implement features, and ensure the application meets regulatory standards. Through their expertise in programming languages, frameworks, and software development methodologies, they would contribute to delivering a seamless and reliable banking experience for users.
                        </div>
                    </>
                </div>

                <div className='px-3 w-full'>
                    <button 
                    className=" text-md font-bold bg-slate-800 text-blue-300 text-lg hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full h-10 rounded-md active:ring-green-300 active:text-green-300 transition-all mb-[3rem]" 
                    onClick={() => setShowDialog(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}; 


export default SoftwareDeveloper;

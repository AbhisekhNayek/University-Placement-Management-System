const workingStyle = [
    {
        title: 'Design complex IT infrastructure:', 
        details: 'This could be computer networks, software applications, or large-scale hardware configurations.'
    },
    {
        title: 'Oversee entire system lifecycles:',
        details: 'From conception to implementation, troubleshooting, and maintenance, the systems engineer ensures everything runs smoothly.'
    },
    {
        title: 'Act as problem-solving superheroes:',
        details: 'They identify, diagnose, and resolve issues within intricate systems.'
    },
    {
        title: 'Bridge communication gaps:',
        details: 'They liaise between different teams involved in system development and use.'
    }
];

const examples = [
    "Tata Consultancy Services (TCS)",
    "IBM",
    "Cognizant",
    "Tech Mahindra",
    "NVIDIA",
    "Salesforce",
    "EPAM",
    "Accenture",
    "Qualcomm",
    "Persistent Systems",
    "FactSet",
    "Verizon",
    "Infosys",
    'Wipro',
    "Walmart",
    "Samsung",
    "Microsoft"
];

const careerBenefits = [
    {
        title: "High demand",
        details: "With our growing dependence on technology, skilled systems engineers are always sought after."
    },
    {
        title: "Lucrative career",
        details: "The average salary in the US is a healthy $106,930 (as of March 2024). [Source: Coursera]"
    },
    {
        title: "Intellectual challenges",
        details: "The role requires constant learning, problem-solving, and innovation."
    },
    {
        title: "Varied work environment",
        details: "You can work in various industries, from healthcare to finance to IT."
    },
    {
        title: "Global opportunities",
        details: "Systems engineering skills are in demand worldwide, offering opportunities for international work and collaboration."
    },
    {
        title: "Career growth potential",
        details: "Systems engineers often have pathways for career advancement into leadership and specialized technical roles."
    }
];

const industryCompanies = [
    {
        title: "Defense industry",
        details: "Companies like ESSI Security and Defence, and Mistral Solutions fall in this category."
    },
    {
        title: "Aerospace industry",
        details: "Companies like York Space Systems, Syncroness, and Boeing fall in this category."
    },
    {
        title: "Electronics industry",
        details: "Companies like Qualcomm, PiServe, and Tesla fall in this category."
    },
    {
        title: "Automotive industry",
        details: "Companies like Ford, Toyota, and General Motors fall in this category."
    }
];

const SystemEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    System Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        A systems engineer is the tech maestro behind the complex systems that run our world. They orchestrate a symphony of technologies, from designing and implementing cutting-edge networks and software applications to troubleshooting and managing their entire lifecycles. Systems engineers are the glue that holds these intricate systems together, ensuring their seamless operation and efficient performance.
                    </div>

                    {/* what they fo */}
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

                    {/* why to become system engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a systems engineer?
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
                    
                    {/* future */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Future stability :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for systems engineers is bright. As technology continues to evolve at an exponential rate, the demand for individuals who can design, manage, and secure complex systems will only increase.  The rise of artificial intelligence, big data, and the Internet of Things (IoT) will create a surge in interconnected devices and systems, all requiring the expertise of skilled systems engineers to ensure their smooth operation and integration.  Furthermore, the ever-present threat of cyberattacks necessitates a strong cybersecurity posture, and systems engineers play a critical role in safeguarding systems and data from malicious actors.  In short, the future landscape demands professionals with the well-rounded technical knowledge and problem-solving skills that systems engineers possess.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            Imagine a company developing a new e-commerce platform. The systems engineer would be involved in designing the network infrastructure, selecting the appropriate hardware and software, ensuring secure transactions, and troubleshooting any glitches that arise. They would collaborate with developers, security specialists, and the client to ensure the platform runs seamlessly.
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

export default SystemEngineer;

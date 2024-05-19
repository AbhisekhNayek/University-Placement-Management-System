const workingStyle = [
    {
        title: 'Design electrical systems:',
        details: 'This involves creating plans and specifications for electrical systems in various settings.'
    },
    {
        title: 'Install and maintain electrical equipment:',
        details: 'Electrical engineers oversee the installation and maintenance of electrical components and systems.'
    },
    {
        title: 'Troubleshoot electrical issues:',
        details: 'They diagnose and solve problems with electrical systems, ensuring they operate safely and efficiently.'
    },
    {
        title: 'Research and develop new technologies:',
        details: 'Electrical engineers often work on cutting-edge technologies, improving existing systems or developing new ones.'
    }
];

const examples = [
    "General Electric",
    "Siemens",
    "ABB Group",
    "AT&T",
    "Verizon",
    "Huawei",
    "Apple",
    "Samsung",
    "Sony",
    "Tesla",
    "Vestas",
    "SolarEdge"
];

const careerBenefits = [
    {
        title: "High demand",
        details: "With the continuous need for electricity in various industries, electrical engineers are in constant demand."
    },
    {
        title: "Lucrative career",
        details: "The average salary for electrical engineers is competitive, with ample opportunities for growth."
    },
    {
        title: "Innovation opportunities",
        details: "Electrical engineers often get to work on innovative projects, pushing the boundaries of technology."
    },
    {
        title: "Diverse industries",
        details: "From power generation to telecommunications, electrical engineers can work in a variety of sectors."
    },
    {
        title: "Global impact",
        details: "Electrical engineers contribute to projects worldwide, impacting communities and industries globally."
    },
    {
        title: "Career advancement",
        details: "There are numerous opportunities for career advancement in electrical engineering, including leadership roles and specialization."
    }
];

const industryCompanies = [
    {
        title: "Power industry",
        details: "Companies like General Electric, Siemens, and ABB Group are prominent in this sector."
    },
    {
        title: "Telecommunications industry",
        details: "Companies like AT&T, Verizon, and Huawei operate in this industry."
    },
    {
        title: "Consumer electronics industry",
        details: "Companies like Apple, Samsung, and Sony are key players in this field."
    },
    {
        title: "Renewable energy industry",
        details: "Companies like Tesla, Vestas, and SolarEdge focus on renewable energy technologies."
    }
];

const ElectricalEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Electrical Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Electrical engineers play a crucial role in designing, developing, and maintaining electrical systems across various industries. They are responsible for ensuring the safe and efficient operation of electrical equipment, from power generation to distribution and consumption.
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

                    {/* why to become system engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become an electrical engineer?
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
                            The future for electrical engineers looks promising, with advancements in renewable energy, automation, and smart technologies driving demand. As the world transitions towards sustainable energy solutions, electrical engineers will play a vital role in designing and implementing renewable energy systems. Additionally, the growing emphasis on automation and smart technologies in various industries will create opportunities for electrical engineers to innovate and contribute to the development of efficient and interconnected systems.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example Scenario
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            Consider a renewable energy project aiming to harness solar power. An electrical engineer would be responsible for designing the solar panel array, specifying the electrical components for power conversion and storage, and ensuring the integration of the system with the electrical grid. They would collaborate with stakeholders to optimize the performance and reliability of the solar power system, contributing to the project's success and sustainability.
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


export default ElectricalEngineer;

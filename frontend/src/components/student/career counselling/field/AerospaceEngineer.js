const workingStyle = [
    {
        title: 'Design aircraft and spacecraft:',
        details: 'Aerospace engineers conceptualize, design, and develop aircraft, spacecraft, satellites, and missiles.'
    },
    {
        title: 'Perform aerodynamic analysis:',
        details: 'They analyze the flow of air or gas around objects to optimize the performance and efficiency of aerospace vehicles.'
    },
    {
        title: 'Conduct structural analysis:',
        details: 'Aerospace engineers assess the structural integrity and durability of aerospace vehicles under various operating conditions.'
    },
    {
        title: 'Test and evaluate prototypes:',
        details: 'They oversee the testing and evaluation of prototypes to ensure they meet safety, performance, and regulatory standards.'
    }
];

const examples = [
    "Boeing",
    "Lockheed Martin",
    "Airbus",
    "Northrop Grumman",
    "SpaceX",
    "Blue Origin",
    "Raytheon Technologies",
    "General Dynamics",
    "Rolls-Royce",
    "Safran",
    "Bombardier Aerospace",
    "Embraer",
    "Honeywell Aerospace"
];

const careerBenefits = [
    {
        title: "Innovative projects",
        details: "Aerospace engineers work on cutting-edge projects involving advanced technologies and groundbreaking discoveries."
    },
    {
        title: "Global impact",
        details: "Their work contributes to advancements in space exploration, national defense, commercial aviation, and scientific research."
    },
    {
        title: "Dynamic work environment",
        details: "Aerospace engineers thrive in dynamic environments that challenge them to solve complex problems and push the boundaries of technology."
    },
    {
        title: "Career progression",
        details: "The aerospace industry offers opportunities for career growth and development, with pathways to leadership and specialization."
    },
    {
        title: "Collaborative teamwork",
        details: "Aerospace engineers collaborate with multidisciplinary teams of scientists, engineers, and technicians to achieve project objectives."
    },
    {
        title: "Competitive salaries",
        details: "Aerospace engineers command competitive salaries due to the specialized nature of their work and the demand for their skills."
    }
];

const industryCompanies = [
    {
        title: "Commercial aerospace",
        details: "Companies like Boeing, Airbus, and Embraer dominate the commercial aircraft manufacturing industry."
    },
    {
        title: "Defense contractors",
        details: "Companies like Lockheed Martin, Northrop Grumman, and Raytheon Technologies specialize in defense and military aerospace."
    },
    {
        title: "Space exploration",
        details: "Companies like SpaceX, Blue Origin, and NASA lead the way in space exploration and satellite technology."
    },
    {
        title: "Aviation technology",
        details: "Companies like Rolls-Royce, Safran, and Honeywell Aerospace focus on developing aviation propulsion and technology systems."
    }
];

const AerospaceEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Aerospace Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Aerospace engineers are at the forefront of designing, developing, and testing aerospace vehicles and systems. They work on a wide range of projects, from commercial airliners and military aircraft to spacecraft and satellites, pushing the boundaries of technology and exploration.
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

                    {/* why to become aerospace engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become an aerospace engineer?
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
                            Future outlook :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for aerospace engineers is filled with exciting possibilities. With increasing interest in space exploration, commercial space travel, and unmanned aerial vehicles (UAVs), the demand for aerospace engineers will continue to grow. Advancements in materials, propulsion systems, and autonomous technologies will drive innovation in the aerospace industry, opening up new avenues for exploration and discovery.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            Consider a project to develop a next-generation spacecraft for interplanetary exploration. Aerospace engineers would be responsible for designing the spacecraft's structure, propulsion systems, and onboard instrumentation. They would collaborate with scientists, technicians, and mission planners to ensure the spacecraft meets performance requirements and mission objectives.
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


export default AerospaceEngineer;

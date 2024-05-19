const workingStyle = [
    {
        title: 'Design chemical processes and equipment:',
        details: 'Chemical engineers create and optimize processes for producing chemicals, fuels, pharmaceuticals, and other products.'
    },
    {
        title: 'Conduct research and development:',
        details: 'They explore new methods and materials to improve existing processes or develop innovative solutions.'
    },
    {
        title: 'Ensure safety and environmental compliance:',
        details: 'Chemical engineers design processes with safety and environmental regulations in mind, minimizing risks and impact.'
    },
    {
        title: 'Troubleshoot and optimize processes:',
        details: 'They identify and solve operational issues to enhance efficiency, productivity, and product quality.'
    }
];

const examples = [
    "ExxonMobil",
    "Chevron",
    "BASF",
    "Dow Chemical Company",
    "DuPont",
    "Shell",
    "Air Liquide",
    "Linde",
    "SABIC",
    "Eastman Chemical Company",
    "INEOS",
    "LyondellBasell"
];

const careerBenefits = [
    {
        title: "Diverse career opportunities",
        details: "Chemical engineers work in various industries, including petrochemicals, pharmaceuticals, biotechnology, and environmental protection."
    },
    {
        title: "Global demand",
        details: "With the increasing need for sustainable solutions and materials, chemical engineers are in demand worldwide."
    },
    {
        title: "Innovation and creativity",
        details: "Chemical engineers constantly innovate to develop cleaner processes, safer products, and more efficient technologies."
    },
    {
        title: "High earning potential",
        details: "Chemical engineers command competitive salaries due to their specialized skills and contributions to industries."
    },
    {
        title: "Impactful contributions",
        details: "Chemical engineers play a vital role in addressing global challenges such as climate change, pollution, and resource depletion."
    },
    {
        title: "Continuous learning",
        details: "Chemical engineering offers opportunities for lifelong learning and professional development as technologies evolve."
    }
];

const industryCompanies = [
    {
        title: "Oil and gas industry",
        details: "Companies like ExxonMobil, Chevron, and Shell are major players in this sector."
    },
    {
        title: "Chemical manufacturing industry",
        details: "Companies like BASF, Dow Chemical Company, and DuPont are prominent in chemical manufacturing."
    },
    {
        title: "Pharmaceutical industry",
        details: "Companies like Pfizer, Merck, and Johnson & Johnson operate in pharmaceuticals and biotechnology."
    },
    {
        title: "Environmental engineering industry",
        details: "Companies like Veolia, Suez, and AECOM focus on environmental protection and sustainability."
    }
];

const ChemicalEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Chemical Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Chemical engineers are at the forefront of designing, developing, and optimizing processes for the production of chemicals, materials, and energy. They combine principles of chemistry, physics, and engineering to create sustainable and efficient solutions for various industries.
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

                    {/* why to become chemical engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a chemical engineer?
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
                            The future for chemical engineers is promising, with opportunities emerging in areas such as renewable energy, sustainable manufacturing, and environmental protection. As the world transitions towards greener and more efficient technologies, chemical engineers will play a crucial role in developing and implementing innovative solutions. Additionally, the growing emphasis on sustainability and environmental regulations will drive demand for chemical engineers who can design and optimize processes with minimal impact on the planet.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            For instance, imagine a chemical engineer working for a renewable energy company. Their role might involve developing processes for converting biomass into biofuels or optimizing solar panel manufacturing processes to increase efficiency and reduce costs. They would use their expertise in chemistry, thermodynamics, and process engineering to tackle challenges related to scalability, cost-effectiveness, and environmental impact, ultimately contributing to the company's mission of advancing sustainable energy solutions.
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


export default ChemicalEngineer;

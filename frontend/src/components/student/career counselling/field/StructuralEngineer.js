const workingStyle = [
    {
        title: 'Design structural systems:',
        details: 'Structural Engineers design and analyze structural systems for buildings, bridges, and other infrastructure projects.'
    },
    {
        title: 'Perform structural analysis:',
        details: 'They perform structural analysis using computer software and mathematical models to ensure the safety and stability of structures.'
    },
    {
        title: 'Collaborate with architects and contractors:',
        details: 'Structural Engineers collaborate with architects and contractors to integrate structural systems into overall building designs.'
    },
    {
        title: 'Ensure compliance with building codes:',
        details: 'They ensure that structural designs comply with building codes, regulations, and industry standards.'
    }
];

const examples = [
    "Arup",
    "AECOM",
    "Skidmore, Owings & Merrill (SOM)",
    "WSP Global",
    "Jacobs Engineering Group",
    "HDR, Inc.",
    "Thornton Tomasetti",
    "Gensler",
    "HOK (Hellmuth, Obata + Kassabaum)",
    "KPFF Consulting Engineers",
    "McKinsey & Company",
    "Buro Happold",
    "Mott MacDonald",
    "T.Y. Lin International"
];

const careerBenefits = [
    {
        title: "Critical role in construction projects",
        details: "Structural Engineers play a critical role in construction projects by ensuring the safety and integrity of buildings and infrastructure."
    },
    {
        title: "Diverse projects",
        details: "Structural Engineers work on diverse projects, including residential, commercial, industrial, and transportation infrastructure."
    },
    {
        title: "Opportunity for innovation",
        details: "There is an opportunity for innovation in structural engineering, including the use of new materials and construction techniques."
    },
    {
        title: "Global demand",
        details: "There is a global demand for Structural Engineers due to the need for infrastructure development and maintenance worldwide."
    },
    {
        title: "Professional growth",
        details: "Structural Engineers have opportunities for professional growth and advancement, including obtaining professional certifications and specializing in niche areas."
    },
    {
        title: "Collaborative work environment",
        details: "Structural Engineers work in a collaborative environment with architects, contractors, and other professionals in the construction industry."
    }
];

const industryCompanies = [
    {
        title: "Engineering firms",
        details: "Engineering firms like Arup, AECOM, and WSP Global specialize in providing structural engineering services for various projects."
    },
    {
        title: "Architecture firms",
        details: "Architecture firms like Skidmore, Owings & Merrill (SOM) and Gensler collaborate with Structural Engineers to design innovative buildings."
    },
    {
        title: "Construction companies",
        details: "Construction companies like Jacobs Engineering Group and HDR, Inc. rely on Structural Engineers to ensure the safety and integrity of their projects."
    },
    {
        title: "Consulting firms",
        details: "Consulting firms like McKinsey & Company and Buro Happold provide advisory services for structural engineering projects."
    }
];

const StructuralEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Structural Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Structural Engineers play a vital role in designing and analyzing structural systems to ensure the safety and integrity of buildings and infrastructure.
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

                    {/* why to become structural engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a Structural Engineer?
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

                    {/* future outlook */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Future Outlook:
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for structural engineers is promising, with increasing demand expected in sectors such as infrastructure development, sustainable construction, and disaster resilience. As populations grow and urbanization accelerates, there will be a greater need for infrastructure projects, including bridges, highways, and buildings. Additionally, with a focus on sustainability and resilience, structural engineers will be tasked with designing structures that can withstand natural disasters and mitigate environmental impacts.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            For example, consider a structural engineer working on a large-scale infrastructure project such as a bridge. Their role may involve designing the bridge's framework, considering factors like material strength, load distribution, and environmental conditions. They would use advanced modeling software to simulate different scenarios and ensure the structural integrity and safety of the bridge. Additionally, they may collaborate with architects, environmental engineers, and construction teams to address design challenges and optimize construction processes.
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


export default StructuralEngineer;

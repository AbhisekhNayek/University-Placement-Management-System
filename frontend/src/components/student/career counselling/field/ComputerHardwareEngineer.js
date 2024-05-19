const workingStyle = [
    {
        title: 'Design computer hardware components:',
        details: 'Computer Hardware Engineers design and develop computer hardware components such as processors, memory modules, and circuit boards.'
    },
    {
        title: 'Test and debug hardware systems:',
        details: 'They test and debug hardware systems to ensure they meet performance and reliability requirements.'
    },
    {
        title: 'Collaborate with software engineers:',
        details: 'Computer Hardware Engineers collaborate with software engineers to ensure hardware compatibility and optimize system performance.'
    },
    {
        title: 'Stay updated with industry trends:',
        details: 'They stay updated with the latest advancements in computer hardware technology and incorporate them into their designs.'
    }
];

const examples = [
    "Intel Corporation",
    "AMD (Advanced Micro Devices)",
    "NVIDIA Corporation",
    "Apple Inc.",
    "Qualcomm Incorporated",
    "Samsung Electronics",
    "Texas Instruments",
    "Broadcom Inc.",
    "Micron Technology",
    "Western Digital Corporation",
    "Seagate Technology",
    "ARM Holdings",
    "Huawei Technologies",
    "IBM Corporation"
];

const careerBenefits = [
    {
        title: "Innovation opportunities",
        details: "Computer Hardware Engineers have the opportunity to innovate and create cutting-edge hardware solutions that drive technological advancements."
    },
    {
        title: "Competitive salaries",
        details: "Computer Hardware Engineers command competitive salaries due to their specialized skills in designing and developing computer hardware components."
    },
    {
        title: "Diverse career paths",
        details: "Computer Hardware Engineers can pursue diverse career paths, including hardware design, firmware development, and system architecture."
    },
    {
        title: "Industry demand",
        details: "There is a high demand for Computer Hardware Engineers as technology continues to evolve and the need for efficient and powerful computing systems grows."
    },
    {
        title: "Global opportunities",
        details: "Computer Hardware Engineers have opportunities to work for multinational companies and collaborate with teams from around the world."
    },
    {
        title: "Continuous learning",
        details: "The field of computer hardware is constantly evolving, offering opportunities for Computer Hardware Engineers to learn new technologies and techniques."
    }
];

const industryCompanies = [
    {
        title: "Semiconductor industry",
        details: "Companies like Intel Corporation, AMD, NVIDIA Corporation, and Qualcomm Incorporated are leaders in the semiconductor industry."
    },
    {
        title: "Consumer electronics",
        details: "Companies like Apple Inc., Samsung Electronics, and Huawei Technologies produce consumer electronics devices that rely on innovative hardware components."
    },
    {
        title: "Data storage",
        details: "Companies like Western Digital Corporation and Seagate Technology specialize in data storage solutions, including hard disk drives and solid-state drives."
    },
    {
        title: "Networking and telecommunications",
        details: "Companies like Broadcom Inc. and Huawei Technologies develop networking and telecommunications hardware for communication infrastructure."
    }
];

const ComputerHardwareEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Computer Hardware Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Computer Hardware Engineers play a critical role in designing and developing computer hardware components, ensuring compatibility, performance, and reliability.
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

                    {/* why to become computer hardware engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a Computer Hardware Engineer?
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

                    {/* future scope */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Future Scope :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for computer hardware engineers looks promising, with advancements in technologies such as artificial intelligence, machine learning, and Internet of Things (IoT) driving demand for innovative hardware solutions. As the need for faster and more efficient computing systems grows, computer hardware engineers will play a vital role in designing and optimizing hardware components, including processors, memory modules, and networking devices. Additionally, with the rise of edge computing and autonomous systems, computer hardware engineers will have opportunities to contribute to the development of cutting-edge technologies that reshape industries and improve everyday life.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            Consider a computer hardware engineer working for a tech company that specializes in artificial intelligence (AI) applications. Their role might involve designing specialized hardware accelerators optimized for AI algorithms to enhance processing speed and energy efficiency. They would collaborate with software engineers and data scientists to develop custom hardware solutions tailored to the company's AI models, enabling faster inference times and improved performance for AI-powered applications.
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


export default ComputerHardwareEngineer;

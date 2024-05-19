const workingStyle = [
    {
        title: 'User research and analysis:',
        details: 'UI/UX Designers conduct user research and analysis to understand user needs, preferences, and behaviors.'
    },
    {
        title: 'Wireframing and prototyping:',
        details: 'They create wireframes and prototypes to visualize and test the layout, navigation, and functionality of digital products.'
    },
    {
        title: 'Visual design:',
        details: 'UI/UX Designers design the visual elements of digital interfaces, including layouts, colors, typography, and icons.'
    },
    {
        title: 'Usability testing and iteration:',
        details: 'They conduct usability testing to gather feedback from users and iterate on designs to improve usability and user experience.'
    }
];

const examples = [
    "Apple",
    "Google",
    "Microsoft",
    "Amazon",
    "Facebook",
    "Netflix",
    "Airbnb",
    "Adobe",
    "IBM",
    "Salesforce",
    "Twitter",
    "Uber",
    "LinkedIn",
    "Pinterest"
];

const careerBenefits = [
    {
        title: "High demand",
        details: "UI/UX Designers are in high demand as businesses focus on creating user-friendly digital experiences to stay competitive."
    },
    {
        title: "Creative work",
        details: "UI/UX Designers have the opportunity to work on creative projects and contribute to the overall look and feel of digital products."
    },
    {
        title: "Problem-solving",
        details: "They solve complex problems by balancing user needs, business goals, and technical constraints to create intuitive and engaging designs."
    },
    {
        title: "Continuous learning",
        details: "UI/UX Designers continuously learn new tools, techniques, and trends in design to stay updated and enhance their skills."
    },
    {
        title: "Collaborative environment",
        details: "They work in a collaborative environment with cross-functional teams, including product managers, developers, and marketers."
    },
    {
        title: "Flexible work options",
        details: "Many companies offer flexible work options, including remote work and flexible hours, for UI/UX Designers."
    }
];

const industryCompanies = [
    {
        title: "Tech giants",
        details: "Tech giants like Apple, Google, Microsoft, and Amazon prioritize user experience and invest in UI/UX design."
    },
    {
        title: "Digital agencies",
        details: "Digital agencies specialize in UI/UX design services for clients across various industries, from startups to Fortune 500 companies."
    },
    {
        title: "E-commerce companies",
        details: "E-commerce companies like Amazon, eBay, and Shopify rely on UI/UX Designers to create seamless shopping experiences."
    },
    {
        title: "Media and entertainment",
        details: "Media and entertainment companies like Netflix, Disney, and Spotify focus on UI/UX design to enhance user engagement and retention."
    }
];

const UiUxDesigner = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    UI/UX Designer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        UI/UX Designers are responsible for creating intuitive and visually appealing digital experiences that meet user needs and business goals.
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

                    {/* why to become UI/UX Designer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a UI/UX Designer?
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
                            Future outlook :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for Computer UI/UX Designers is promising, with advancements in technology driving demand for intuitive and user-friendly digital experiences. As artificial intelligence, virtual reality, and augmented reality continue to evolve, UI/UX Designers will need to adapt and innovate to create seamless interactions across various platforms and devices. Additionally, the growing importance of accessibility and inclusivity in design will shape the future landscape, requiring designers to prioritize usability and diversity in their work.
                        </div>
                    </>

                    {/* example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            For example, consider a Computer UI/UX Designer working for a tech startup developing a new mobile application. Their role might involve conducting user research to understand the target audience, creating wireframes and prototypes to visualize the app's layout and functionality, and collaborating with developers to implement design solutions. They would iterate on designs based on user feedback, ensuring a seamless and engaging user experience that aligns with the company's brand and goals.
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


export default UiUxDesigner;

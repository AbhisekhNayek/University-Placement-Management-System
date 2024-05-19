const workingStyle = [
    {
        title: 'Design data processing systems:',
        details: 'Big Data Engineers design and implement large-scale data processing systems to collect, store, and analyze vast amounts of data.'
    },
    {
        title: 'Develop data pipelines:',
        details: 'They build efficient data pipelines to extract, transform, and load (ETL) data from various sources into data warehouses or data lakes.'
    },
    {
        title: 'Optimize data storage and retrieval:',
        details: 'Big Data Engineers optimize data storage and retrieval mechanisms to ensure fast and reliable access to data for analytics and reporting.'
    },
    {
        title: 'Implement data security measures:',
        details: 'They implement data security measures to protect sensitive information and ensure compliance with data privacy regulations.'
    }
];

const examples = [
    "Google",
    "Facebook",
    "Amazon",
    "Netflix",
    "Microsoft",
    "Apple",
    "LinkedIn",
    "Twitter",
    "Uber",
    "Airbnb",
    "PayPal",
    "Salesforce",
    "Dropbox",
    "Square"
];

const careerBenefits = [
    {
        title: "High demand",
        details: "Big Data Engineers are in high demand as organizations increasingly rely on data-driven insights to make strategic decisions."
    },
    {
        title: "Lucrative salary",
        details: "Big Data Engineers command lucrative salaries due to their specialized skills in managing and analyzing large volumes of data."
    },
    {
        title: "Continuous learning",
        details: "The field of big data is constantly evolving, offering opportunities for Big Data Engineers to learn new technologies and techniques."
    },
    {
        title: "Diverse career paths",
        details: "Big Data Engineers can pursue diverse career paths, including data engineering, data science, and big data architecture."
    },
    {
        title: "Impactful work",
        details: "Big Data Engineers have the opportunity to work on projects that have a significant impact on business operations and decision-making."
    },
    {
        title: "Flexibility",
        details: "Many organizations offer flexible work arrangements and remote work options for Big Data Engineers."
    }
];

const industryCompanies = [
    {
        title: "Technology giants",
        details: "Companies like Google, Facebook, Amazon, and Microsoft lead the way in big data analytics and cloud computing."
    },
    {
        title: "E-commerce platforms",
        details: "Companies like eBay, Alibaba, and Shopify leverage big data analytics to optimize customer experiences and drive sales."
    },
    {
        title: "Finance and banking",
        details: "Financial institutions such as JPMorgan Chase, Goldman Sachs, and Citibank use big data analytics for risk management and fraud detection."
    },
    {
        title: "Healthcare organizations",
        details: "Healthcare providers and pharmaceutical companies employ big data analytics to improve patient outcomes and drug discovery."
    }
];

const BigDataEngineer = ({ setShowDialog }) => {
    return (
        <div className=' h-screen overflow-y-auto flex justify-center pt-[1rem]'>
            <div className=" max-w-[60rem]">
                <div className="mt-2 mb-4 font-bold text-transparent font-lato bg-gradient-to-br from-indigo-600 via-blue-500 to-violet-500 bg-clip-text text-3xl md:text-4xl md:mb-5 pl-0 px-3 md:px-0 md:pl-6">
                    Big Data Engineer
                </div>

                <div className=' px-3'>
                    <div className=' font-robotoMono font-bold text-justify text-blue-950 text-[.9rem] md:text-[1rem]'>
                        Big Data Engineers play a crucial role in managing and analyzing large volumes of data to extract valuable insights and drive business decisions. They design and implement data processing systems, develop data pipelines, and optimize data storage and retrieval mechanisms.
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

                    {/* why to become big data engineer */}
                    <div className=' mt-5'>
                        <div className=' font-bold text-2xl font-jaldi'>
                            Why become a Big Data Engineer?
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
                            Future Outlook :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] text-justify'>
                            The future for Big Data Engineers looks promising, with the increasing volume, variety, and velocity of data generated by businesses and organizations. As industries continue to leverage big data for insights and decision-making, the demand for skilled professionals who can manage and analyze large datasets will grow. Additionally, emerging technologies like artificial intelligence and machine learning will further drive the need for Big Data Engineers to build robust data infrastructure and develop advanced analytics solutions.
                        </div>
                    </>
                        
                    {/* Example */}
                    <>
                        <div className='mt-5 font-bold text-2xl font-jaldi'>
                            Example :
                        </div>

                        <div className='mt-2 font-robotoMono text-md tracking-tight leading-5 text-[.9rem] pb-[4rem] text-justify'>
                            For instance, consider a Big Data Engineer working for a healthcare organization. Their role might involve designing and implementing data pipelines to collect and process patient data from various sources such as electronic health records, medical devices, and wearable sensors. They would use technologies like Hadoop, Spark, and SQL to analyze this data, identify patterns, and develop predictive models for disease diagnosis and treatment optimization. By harnessing the power of big data, the engineer contributes to improving patient outcomes and healthcare delivery.
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


export default BigDataEngineer;

import { useLocation } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbWorld } from 'react-icons/tb';

const CoverLetter = () => {
    const location = useLocation();
    const { data } = location.state;
    const iconContainer = [
        {link: data.email, icon: <MdOutlineEmail/>, type: 'mail'},
        {link: data.linkedIn, icon: <FaLinkedinIn/>, type: 'link'},
        {link: data.phno, icon: <FiPhone/>, type: 'tel'},
    ];
    
    const createLetter = () => {
        const createButton = document.getElementById('createButton');
        if (createButton) {
            createButton.style.display = 'none';
        }

        window.print();
    };

    return (
        <div className='flex justify-center h-screen overflow-y-auto py-10 px-4'>
            <div className="min-w-[40rem] max-w-[40rem]">
                {/* cover letter */}
                <>
                    {/* personal details */}
                    <div className=' flex flex-col items-start justify-between gap-x-6'>
                        {/* details */}
                        <div className="text-4xl font-bold font-lato">
                            {data?.name}
                        </div>

                        {/* address */}
                        <div className='mt-2.5 flex items-center gap-x-1.5 text-gray-800 font-semibold'>
                            <div className=' w-6 h-6'>
                                <TbWorld className=' text-[1.2rem] translate-y- .5'/>
                            </div>
                            <div className=' capitalize font-robotoMono text-[.94rem] space-x-1'>
                                <span>{data.address}</span>
                            </div>
                        </div>

                        {/* social links */}
                        <div className='mt-3 flex flex-col items-start justify-between gap-y-1'>
                            {iconContainer.map((icon, index) => (
                                <a 
                                key={index}
                                className=' text-slate-800'
                                href={icon.type === 'mail' ? `mailto:${icon.link}` : icon.type === 'tel' ? `tel:+91${icon.link}` : icon.link}
                                target='_blank'
                                link='noopener noreferrer'>
                                    <div className=' flex items-center gap-x-2'>
                                        <div className='bg-gray-100 text-gray-700 text-[.9rem] p-[4px] rounded-sm ring-[1px] ring-gray-500'>
                                            {icon.icon}
                                        </div>
                                        <div className='bg-gray-200 text-gray-700 text-[.9rem] p-[4px] rounded-sm'>
                                            {icon.link}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='mt-14 text-[.85rem] space-y-2 font-bold font-robotoMono'>
                        <div className=' capitalize'>
                            {data.toName}
                        </div>
                        <div className=' capitalize'>
                            {data.designation}
                        </div>
                        <div>
                            {data.companyName}
                        </div>
                        <div>
                            {data.companyAddress}
                        </div>
                    </div>

                    <div>
                        <div className=' mt-7 font-montserrat text-xl font-bold capitalize'>
                            Dear {data.toName},
                        </div>

                        <div className='pl-5 mt-1.5 text-justify text-[.8rem] font-robotoMono'>
                            {data.letterContent}
                        </div>

                        <div className=' capitalize mt-4 font-lato text-md'>
                            kind regards,
                            <div className=' font-bold font-robotoMono'>
                                {data.name}
                            </div>
                        </div>
                    </div>
                </>

                {/* print button */}
                <div className=' w-full pt-12 pb-8 flex items-center justify-center'>
                    <button onClick={createLetter} className=' px-6 py-2 text-xl bg-[#1e5379] text-cyan-300 rounded-md tracking-wide resume'>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoverLetter;

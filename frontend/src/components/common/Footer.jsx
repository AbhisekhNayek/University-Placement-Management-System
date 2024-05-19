import { FaLinkedin, FaMeta, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const iconArray = [
        {icon: <FaMeta/>, className: 'text-2xl text-blue-500', href: '#'},
        {icon: <FaGithub/>, className: 'text-2xl text-gray-400', href: '#'},
        {icon: <FaInstagram/>, className: 'text-2xl text-pink-500', href: '#'},
        {icon: <FaXTwitter/>, className: 'text-2xl text-slate-400', href: '#'},
        {icon: <FaLinkedin/>, className: 'text-2xl text-blue-600', href: '#'},
    ];

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFocus = (event) => {
        event.target.select();
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const lists = [
        {
            title: 'Services',
            items: [
                { name: '1on1 Coaching', href: '#' },
                { name: 'Company Review', href: '#' },
                { name: 'Accounts Review', href: '#' },
                { name: 'HR Consulting', href: '#' },
                { name: 'SEO Optimisation', href: '#' }
            ]
        },
        {
            title: 'Company',
            items: [
                { name: 'About', href: '#' },
                { name: 'Meet the Team', href: '#' },
                { name: 'Accounts Review', href: '#' }
            ]
        },
        {
            title: 'Helpful Links',
            items: [
                { name: 'Contact', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Live Chat', href: '#' }
            ]
        },
        {
            title: 'Legal',
            items: [
                { name: 'Accessibility', href: '#' },
                { name: 'Returns Policy', href: '#' },
                { name: 'Refund Policy', href: '#' },
                { name: 'Hiring Statistics', href: '#' }
            ]
        },
        {
            title: 'Downloads',
            items: [
                { name: 'Marketing Calendar', href: '#' },
                { name: 'SEO Infographics', href: '#' }
            ]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log(email);
    };

    const handleRedirect = () => {
        navigate(`/`);
    };
    
    return (
        <footer className=" bg-slate-900 ">
            <div className="mx-auto px-4 pt-10 pb-6 sm:px-6 lg:px-8">
                {/* upper part */}
                <div className="">
                    {/* icon and form */}
                    <div className="text-teal-400 flex   items-center justify-between">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 24" 
                        className="h-8 hidden md:block cursor-pointer" 
                        fill="none" 
                        onClick={handleRedirect}>
                            <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="currentColor"
                            />
                        </svg>

                        <form className="flex w-full md:w-[75%] lg:w-[65%] xl:w-[45rem] rounded-lg"
                        onSubmit={handleSubmit}>
                            <div className="relative w-full h-full">
                                <input
                                    type="email"
                                    className={`border-b-2 border-slate-300 pt-2.5 pb-2 pl-2 pr-[6rem] focus:border-b-2 ${(email || isFocused) ? 'border-indigo-500' : ''} transition-colors focus:outline-none peer bg-slate-800 w-full h-full font-robotoMono placeholder:text-cyan-300`}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder='Email address'
                                />

                                <button
                                className={`bg-slate-800 text-slate-200 font-robotoMono flex items-center justify-center flex-wrap w-[5.5rem] absolute right-0 bottom-2`}
                                type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* content */}
                    <div className="mt-14 w-full grid xsm:grid-cols-2 md:grid-cols-3 Lmd:grid-cols-5 gap-x-16 gap-y-14 place-content-center">
                        {lists.map((list, index) => (
                            <div 
                            className={`max-w-[10rem]`}
                            key={index}>
                                <p className="text-[1.2rem] border-b-2 border-slate-400 text-yellow-200 ">
                                    {list.title}
                                </p>

                                <div className="mt-2 flex flex-col items-start justify-between space-y-3 lg:text-md">
                                    {list.items.map((item, itemIndex) => (
                                        <span key={itemIndex}>
                                            <a href={item.href}
                                            className='no-underline text-blue-400 hover:text-green-400 hover:underline font-k2d'>
                                                {item.name}
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* social media icons */}
                    <div className='mt-10 w-full flex items-center justify-center sm:justify-end gap-x-5'>
                        {iconArray.map((item, indx) => (
                            <a 
                            key={indx} 
                            className={` rounded-full overflow-hidden ${item.className}`}
                            href={item.href}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* lower part */}
                <div className="mt-8 border-t border-gray-100 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between gap-y-6">
                        <span className="text-[.9rem] sm:text-sm text-gray-300">&copy; 2024. Stumate. All rights reserved.</span>
                        
                        <div className=" flex items-center gap-4 text-xs text-[.9rem] sm:text-sm">
                            <a className=' no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Terms & Conditions</a>
                            <a className=' no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Privacy Policy</a>
                            <a className=' no-underline text-violet-400 hover:text-blue-300 hover:underline' href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

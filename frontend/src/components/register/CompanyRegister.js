import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import BgColorAnimation from '../../animations/BgColorAnimation';

const CompanyRegister = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [ZIPCode, setZIPCode] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [logo, setLogo] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [showPswd, setShowPswd] = useState(false);
    const navigate = useNavigate();

    const registerCompany = async (e) => {
        e.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
        const response = await fetch('http://localhost:1337/api/registerCompany', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                companyName,
                companyWebsite,
                email,
                password,
                country,
                state,
                city,
                ZIPCode,
                address,
                contactNumber,
                logo,
                companyDescription
            }),
        });

        const data = await response.json();
        console.log(data);
        if (data.message === 'ok') {
            navigate('/CompanyLogin', { replace: true });
        }
    };

    const handleNavigateLogin = () => {
        navigate("/CompanyLogIn");
    };

    const handleReset = () => {
        setCompanyName("");
        setCompanyWebsite("");
        setPassword("");    
        setCountry("");
        setEmail("");
        setState("");
        setCity("");
        setZIPCode("");
        setAddress("");
        setContactNumber("");
        setLogo('');
        setCompanyDescription("");
        setCheckboxValue(false);
        setShowPswd(false);
    };

    const handlePasswordVisibility = () => {
        setShowPswd(!showPswd);
    }

    const handleImg = (e) => {
        e.preventDefault();
        setLogo('');
    };

    return (
        <BgColorAnimation
            child={  
                <Form onSubmit={registerCompany} className={` h-screen overflow-auto flex items-center justify-center px-2`}>
                    <div className={`container bg-[#ffffff30] shadow-md rounded h-[97vh] md:h-auto overflow-y-auto py-3 lg:px-4`}>
                        <p className=" text-[1.7rem] md:text-4xl font-mooli tracking-wider text-violet-300 font-bold mb-6 text-center">Register as Company</p>

                        {/* name, website */}
                        <Row className="mb-[.9rem] space-y-[.9rem] md:space-y-0">
                            <Form.Group as={Col} xs={12} md={6} controlId="formGridCompanyname" className="position-relative">
                                <input  
                                    type='text'
                                    id="companyName"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${companyName ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    placeholder="Company Name"
                                    required
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} md={6} controlId="formGridCompanywebsite" className="position-relative">
                                <input  
                                    type='text'
                                    id="companyWebsite"
                                    value={companyWebsite}
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${companyWebsite ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    placeholder="Company Website"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        {/* email address, password */}
                        <Row className="mb-[.9rem] space-y-[.9rem] md:space-y-0">
                            <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                                <input
                                    type='email'
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${email ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="Email"
                                    required
                                />                        
                            </Form.Group>

                            <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword" className='relative '>
                                <input
                                    type={showPswd ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`border-y-2  py-2 pl-2 pr-8 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${password ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="Password"
                                    required
                                />

                                <div className="absolute cursor-pointer top-3 right-4">
                                    {showPswd
                                        ? <MdOutlineVisibility className="text-xl text-blue-300" onClick={handlePasswordVisibility} />
                                        : <MdOutlineVisibilityOff className="text-xl text-blue-300" onClick={handlePasswordVisibility} />
                                    }
                                </div>
                            </Form.Group>
                        </Row>

                        {/* country, state */}
                        <Row className="mb-[.9rem] space-y-[.9rem] md:space-y-0">
                            <Form.Group as={Col} xs={12} md={6} controlId="formGridCountry">
                                <input
                                    type='text'
                                    id="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className={`border-y-2  pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${country ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="Country"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} md={6} controlId="formGridState">
                                <input
                                    type='text'
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className={`border-y-2  pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${state ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="State"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        {/* city, zip */}
                        <Row className="mb-[.9rem]">
                            <Form.Group as={Col} controlId="formGridCity">
                                <input
                                    type='text'
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className={`border-y-2  pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${city ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="City"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationFormik105"
                            className="position-relative">
                                <input
                                    type='number'
                                    id="ZIPCode"
                                    value={ZIPCode}
                                    onChange={(e) => setZIPCode(e.target.value)}
                                    className={`border-y-2  pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${ZIPCode ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="ZIP Code"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        {/* address */}
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <textarea
                                    name="address"
                                    placeholder="Address"
                                    required
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${address ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        {/* contact, file */}
                        <Row className="mb-[.9rem] space-y-[.9rem] md:space-y-0">
                            <Form.Group as={Col} xs={12} md={6} controlId="formBasicContactnumber">
                                <input
                                    type='number'
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    className={`border-y-2  pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${contactNumber ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="Contact Number"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} md={6} controlId="formFile" className="relative">
                                <input
                                    type='file'
                                    id="logo"
                                    value={logo}
                                    accept='image/*'
                                    onChange={(e) => setLogo(e.target.value)}
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${logo ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                                    placeholder="Company Logo"
                                    required
                                />

                                {/* Remove input image */}
                                <button 
                                className='absolute text-yellow-300 transition-all rounded-full active:text-red-500 active:scale-90 right-3 sm:right-5 sm:ring-1 top-1 sm:top-4 ring-yellow-300 active:ring-red-500'
                                onClick={handleImg}>
                                    <RxCross2 className='md:text-[1.3rem] font-bold'/>
                                </button>
                            </Form.Group>
                        </Row>

                        {/* company description */}
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <textarea
                                    name="address"
                                    placeholder="Company Description"
                                    required
                                    className={`border-y-2 pt-2.5 pb-2 px-2 focus:border-b-2 transition-colors focus:outline-none bg-slate-800 h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${companyDescription ? 'border-indigo-400' : ''} focus:border-indigo-400 w-full`}
                                    value={companyDescription}
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        {/* checkbox input field */}
                        <Form.Group className="flex mt-2">
                            <div className="flex items-center h-5">
                                <input 
                                    id="terms"
                                    type="checkbox"
                                    className="cursor-pointer w-7 h-[1.3rem] appearance-none border-[.2rem] border-yellow-500 rounded-full checked:border-yellow-300 checked:bg-green-800 checked:scale-90 checked:rounded-md focus:outline-none transition-all"
                                    onClick={() => setCheckboxValue(!checkboxValue)}
                                    required
                                />
                            </div>

                            {/* Checkbox text */}
                            <label className="flex flex-wrap items-center w-full ml-2 text-sm font-medium text-cyan-200 font-robotoMono gap-x-2">
                                I agree with the{" "}
                                <a href="#" className="flex flex-wrap transition-all text-cyan-200 hover:underline hover:text-blue-800 hover:font-bold hover:bg-blue-300 hover:rounded-md hover:px-2">
                                    terms and conditions
                                </a>
                            </label>
                        </Form.Group>

                        {/* submit button */}
                        <div className="flex flex-col items-center justify-between mt-8 sm:flex-row gap-y-4">
                            <button 
                            className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 sm:h-8 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                            type="submit" >
                                Register
                            </button>
                            
                            <button 
                            className=" text-md font-bold bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 w-full sm:w-[7rem] h-9 sm:h-8 rounded-full active:ring-green-300 active:text-green-300 transition-all" 
                            onClick={handleReset} >
                                Cancel
                            </button>
                        </div> 

                        {/* Login */}
                        <div className='mt-2 '>
                            <span className='font-mooli text-cyan-200'>Already have an account?</span>
                            <button 
                            className=" text-md font-bold text-blue-400 hover:text-indigo-400 font-robotoMono border-b-2 border-blue-400 hover:border-indigo-400 ml-2 pb-[.1rem] active:ring-green-300 active:text-green-300 transition-all" 
                            onClick={handleNavigateLogin}>
                                LogIn
                            </button>
                        </div>
                    </div>
                </Form>
            }
        />
    );
}

export default CompanyRegister;

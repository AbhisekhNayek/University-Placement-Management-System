// import React from "react";
// import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

// const AnimateHomePageCards = () => {
//     return (
//         <div className="p-4">
//             <p className=" text-2xl">Settings</p>
//             <div className="flex items-center justify-between bg--500 gap-x-1">
//                 <Card title="Account" subtitle="Manage profile" href="#" Icon={FiUser} />
//                 <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
//                 <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
//                 <Card title="Billing" subtitle="Manage cards" href="#" Icon={FiCreditCard} />
//             </div>
//         </div>
//     );
// };

// const Card = ({ title, subtitle, Icon, href }) => {
//     return (
//         <div
//         href={href}
//         className="w-full  p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg--200">
//             <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

//             <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
//             <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
//             <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
//                 {title}
//             </h3>
//             <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
//                 {subtitle}
//             </p>
//         </div>
//     );
// };

// export default AnimateHomePageCards;


import o1 from '../../images/courses/online/o1.png';
import o1_1 from '../../images/courses/online/o1.1.png';
import o2 from '../../images/courses/online/o2.png';
import o1_2 from '../../images/courses/online/o2.1.png';
import o3 from '../../images/courses/online/o3.png';
import o1_3 from '../../images/courses/online/o3.1.png';
import o4 from '../../images/courses/online/o4.png';
import o1_4 from '../../images/courses/online/o4.1.png';
import o5 from '../../images/courses/online/o5.png';
import o1_5 from '../../images/courses/online/o5.1.png';
import o6 from '../../images/courses/online/o6.png';
import o1_6 from '../../images/courses/online/o6.1.png';
import o7 from '../../images/courses/online/o7.png';
import o1_7 from '../../images/courses/online/o7.1.png';
import o8 from '../../images/courses/online/o8.png';
import o1_8 from '../../images/courses/online/o8.1.png';
import o9 from '../../images/courses/online/o9.png';
import o1_9 from '../../images/courses/online/o9.1.png';
import o10 from '../../images/courses/online/o10.png';
import o1_10 from '../../images/courses/online/o10.1.png';
import o11 from '../../images/courses/online/o11.png';
import o1_11 from '../../images/courses/online/o11.1.png';
import o12 from '../../images/courses/online/o12.png';
import o1_12 from '../../images/courses/online/o12.1.png';

import successStory from '../../images/stats/successStories.png';
import tutors from '../../images/stats/tutors.png';
import schedules from '../../images/stats/schedule.png';
import courses from '../../images/stats/courses.png';

import company from '../../images/company.png';
import schedule from '../../images/schedule.png';
import analysis from '../../images/analysis.png';
import resume from '../../images/resume.png';
import coverLetter from '../../images/cover-letter.png';
import counselling from '../../images/counselling.png';
import chat from '../../images/chat.png';
import academics from '../../images/academics.png';
import profile from '../../images/profile.png';
import feedback from '../../images/feedback.png';

import learning from '../../images/banner/storytelling.png';
import certificate from '../../images/banner/diploma.png';
import career from '../../images/banner/athlete.png';

import c1 from '../../images/courses/c1.png';
import c2 from '../../images/courses/c2.png';
import c3 from '../../images/courses/c3.png';
import c4 from '../../images/courses/c4.png';
import c5 from '../../images/courses/c5.png';
import c6 from '../../images/courses/c6.png';
import c7 from '../../images/courses/c7.png';
import c8 from '../../images/courses/c8.png';
import c9 from '../../images/courses/c9.png';

import avatar from '../../images/courses/profile.gif';

import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineContacts } from "react-icons/ai";

import avisek from '../../images/team/abhisekh.png';

export const onlineCourses = [
    {
        cover: o1,
        hoverCover: o1_1,
        courseName: "UI/UX Design",
        course: "25 Courses",
    },
    {
        cover: o2,
        hoverCover: o1_2,
        courseName: "Designing",
        course: "25 Courses",
    },
    {
        cover: o3,
        hoverCover: o1_3,
        courseName: "Computer Science",
        course: "25 Courses",
    },
    {
        cover: o4,
        hoverCover: o1_4,
        courseName: "Marketing",
        course: "25 Courses",
    },
    {
        cover: o5,
        hoverCover: o1_5,
        courseName: "Robotics",
        course: "30 Courses",
    },
    {
        cover: o6,
        hoverCover: o1_6,
        courseName: "IT Management",
        course: "25 Courses",
    },
    {
        cover: o7,
        hoverCover: o1_7,
        courseName: "Medical",
        course: "25 Courses",
    },
    {
        cover: o8,
        hoverCover: o1_8,
        courseName: "Accounting",
        course: "25 Courses",
    },
    {
        cover: o9,
        hoverCover: o1_9,
        courseName: "Graphic Design",
        course: "25 Courses",
    },
    {
        cover: o10,
        hoverCover: o1_10,
        courseName: "Music",
        course: "25 Courses",
    },
    {
        cover: o11,
        hoverCover: o1_11,
        courseName: "Business",
        course: "25 Courses",
    },
    {
        cover: o12,
        hoverCover: o1_12,
        courseName: "Web Development",
        course: "25 Courses",
    },
];

export const statCard = [
    {
        imgLink: successStory,
        num: '100',
        title: 'success stories',
    },
    {
        imgLink: tutors,
        num: '300',
        title: 'trusted tutors',
    },
    {
        imgLink: schedules,
        num: '400',
        title: 'schedules',
    },
    {
        imgLink: courses,
        num: '1000',
        title: 'courses',
    },
];

export const buttonsData = [
    {
        imgSrc: company,
        alt: 'Hiring Companies',
        text: 'Discover job openings. Explore descriptions, company profiles, and reviews. Apply to exciting roles.',
        bgColor: 'bg-[#FFB293] bg-opacity-40 border-2 border-orange-300 hover:shadow-[#FFB293]',
        textColor: 'text-[#FF4800]',
        titleColor: 'text-[#AC3100]',
        link: '/ALLJobRole'
    },
    {
        imgSrc: schedule,
        alt: 'Schedule',
        text: 'Effortlessly manage appointments and deadlines. Organize tasks and set reminders for productivity.',
        bgColor: 'bg-[#BFEFFF] bg-opacity-50  border-2 border-blue-300 hover:shadow-[#BFEFFF]',
        textColor: 'text-[#00A8E0]',
        titleColor: 'text-[#256E86]',
        link: '/StudentSchedule'
    },
    {
        imgSrc: analysis,
        alt: 'Analytics and Reporting',
        text: 'Gain insights into performance. Track metrics and visualize data for informed decisions.',
        bgColor: 'bg-[#AFFFAF] bg-opacity-30 border-2 border-green-400 hover:shadow-[#AFFFAF]',
        textColor: 'text-[#00C42C]',
        titleColor: 'text-[#00731A]',
        link: '/analytics-reporting'
    },
    {
        imgSrc: resume,
        alt: 'Resume',
        text: 'Our resume-building tool guides you to create professional documents that stand out to employers.',
        bgColor: 'bg-[#FFF09D] bg-opacity-50 border-2 border-yellow-400 hover:shadow-[#FFF09D]',
        textColor: 'text-[#E09200]',
        titleColor: 'text-[#776F1C]',
        link: '/createResume'
    },
    {
        imgSrc: coverLetter,
        alt: 'Cover Letter',
        text: 'Write persuasive cover letters. Showcase passion, qualifications, and alignment with company values.',
        bgColor: 'bg-[#FFACD5] bg-opacity-30 border-2 border-pink-300 hover:shadow-[#FFACD5]',
        textColor: 'text-[#FA3B9B]',
        titleColor: 'text-[#A30050]',
        link: '/StudentCoverLetter'
    },
    {
        imgSrc: counselling,
        alt: 'Career Counselling',
        text: 'Receive personalized guidance. Explore career paths, seek job search advice, and plan next steps.',
        bgColor: 'bg-[#EC9DFF] bg-opacity-30 border-2 border-violet-300 hover:shadow-[#EC9DFF]', 
        textColor: 'text-[#BA55D3]',
        titleColor: 'text-[#9500BA]',
        link: '/CareerCounselling'
    },
    {
        imgSrc: chat,
        alt: 'Chat',
        text: 'Connect with peers, mentors, and experts. Exchange ideas, ask questions, and build relationships.',
        bgColor: 'bg-[#A3FFF6] bg-opacity-30 border-2 border-cyan-400 hover:shadow-[#A3FFF6]', 
        textColor: 'text-[#10C0AE]',
        titleColor: 'text-[#007569]',
        link: '/chat'
    },
    {
        imgSrc: academics,
        alt: 'Academics',
        text: 'Access study materials and support. Excel in studies with educational resources and tuto services.',
        bgColor: 'bg-[#FFAFA0] bg-opacity-30 border-2 border-pink-300 hover:shadow-[#FFAFA0]', 
        textColor: 'text-[#FF6347]',
        titleColor: 'text-[#B6341B]',
        link: '/student-academics'
    },
    {
        imgSrc: profile,
        alt: 'Profile',
        text: 'Create a comprehensive profile. Highlight skills, experiences, and accomplishments for opportunities.',
        bgColor: 'bg-[#9F90FF] bg-opacity-30 border-2 border-indigo-300 hover:shadow-[#9F90FF]',
        textColor: 'text-[#6A5ACD]',
        titleColor: 'text-[#241396]',
        link: '/StudentProfile'
    },
    {
        imgSrc: feedback,
        alt: 'Feedback',
        text: 'Share thoughts and suggestions. Help improve our platform and enhance user experience.',
        bgColor: 'bg-[#D9FFB1] bg-opacity-30 border-2 border-green-300 hover:shadow-[#D9FFB1]',
        textColor: 'text-[#55BE16]',
        titleColor: 'text-[#00731A]',
        link: '/Feedback'
    }
];

export const aboutUsCardContent = [
    {
        link: learning,
        title: 'interactive learning',
        details: `We understand that each student learns differently. That's why our courses are crafted to be interactive, engaging, and adaptable to various learning styles`,
    },
    {
        link: certificate,
        title: 'earn a certificates',
        details: `At StuMate, our certifications symbolize skill mastery. Beyond marking course completion, they celebrate your expertise and success.`,
    },
    {
        link: career,
        title: 'career advancement',
        details: `Education as Your Career Catalyst. StuMate guides students in bridging the gap between education and professional success.`,
    }
];

export const coursesCard = [
    {
        cover: c1,
        coursesName: "Introducing to Cloud IOT Edge ML",
        joinNowLink :"https://youtu.be/7s-ZHB-l0dk?si=HC11SotVfFWr_VeV",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Dr. Rajiv Mishra",
                totalTime: "24 lectures (150 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c2,
        coursesName: "Introduction to Artificial Intelligence",
        joinNowLink: "https://youtu.be/uB3i-qV6VdM?si=L2LuCJ9NZQ1yOPy3",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Gate Smashers",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c3,
        coursesName: "Graphics Designing With Photoshop",
        joinNowLink: "https://youtu.be/ZByhs9mDtDg?si=wQIkXk8hVaLXk15I",
        courTeacher: [
            {
                dcover: avatar,
                name: "by GFXMentor",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c4,
        coursesName: "Web Development & Designing with WordPress",
        joinNowLink: "https://youtu.be/-6q3Rt1MTtk?si=gBg98q1nX6Ws7Qpi",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Abhisekh Nayek",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c5,
        coursesName: "Frontend Framework with ReactJS",
        joinNowLink: "https://youtu.be/tiLWCNFzThE?si=c0MSEujtDmuwERlB",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Thapa Technical",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c6,
        coursesName: "Learn Network Security & Socket Programming",
        joinNowLink: "https://youtu.be/JFF2vJaN0Cw?si=jG4IErAqXrL2UXsX",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Varun Singla",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c7,
        coursesName: "Frontend Development with HTML, CSS and JS",
        joinNowLink: "https://youtu.be/6mbwJ2xhgzM?si=U5D0XnwcEzL1tMQU",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Code With Harry",
                totalTime: "103 lectures (200 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c8,
        coursesName: "Introduction to SpringBoot (Full Stack)",
        joinNowLink: "https://youtu.be/5PdEmeopJVQ?si=2TmJ5wnRmxp5zfSt",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Free Code Camp Org",
                totalTime: "1 lectures (240 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
    {
        cover: c9,
        coursesName: "Full Stack Development With MERN",
        joinNowLink: "https://www.youtube.com/watch?v=fSmp7Cv-c_0&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=1&t=1s",
        courTeacher: [
            {
                dcover: avatar,
                name: "by Thapa Technical",
                totalTime: "43 lectures (190 hrs)",
            },
        ],
        priceAll: "FREE",
        pricePer: "FREE",
    },
];

export const footerLists = [
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

export const tabs = [
    {text: 'Home', icon: <TiHomeOutline/>, path: '/'},
    {text: 'Courses', icon: <AiOutlineSchedule/>, path: '/courses'},
    {text: 'About Us', icon: <MdOutlineAccountCircle/>, path: '/aboutus'},
    {text: 'Our Team', icon: <RiTeamLine/>, path: '/team'},
    {text: 'Placement', icon: <IoBriefcaseOutline/>, path: '/placement'},
    {text: 'Contact Us', icon: <AiOutlineContacts/>, path: '/contactus'},
];

export const teamMember = [
    {
        name: 'Abhisekh Nayek',
        role: 'Full Stack Developer',
        image: avisek,
        socialLinks: {
            github: 'https://github.com/AbhisekhNayek',
            linkedin: 'https://www.linkedin.com/in/abhisekhnayek1755/',
            portfolio: 'https://abhisekhnayek.github.io/14/',
            mail: 'abhisekhnayek1@gmail.com',
        },
    },
    {
        name: 'Manab Pratim Maity',
        role: 'Back-End Developer',
        image: avisek,
        socialLinks: {
            github: '',
            linkedin: '',
            portfolio: '',
            mail: '',
        },
    },
    {
        name: 'Sekh Mehboob',
        role: 'Front-End Developer',
        image: avisek,
        socialLinks: {
            github: '',
            linkedin: '',
            portfolio: '',
            mail: '',
        },
    },
];

export const barChartData = {
    labels: ['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Tesla', 'Netflix', 'Uber', 'TCS', 'Zomato'],
    datasets: [{
        label: 'Hiring Numbers',
        data: [150, 112, 90, 130, 120, 146, 100, 110, 160, 175],
        backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 205, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
        ],
        borderWidth: 1
    }]
};

export const faq = [
    {
        "question": "How do I enroll in online courses?",
        "answer": "Enrolling in online courses typically involves visiting the institution's website, creating an account, and following the provided instructions for course registration."
    },
    {
        "question": "Where can I find information about course fees and payment methods?",
        "answer": "Information about course fees and payment methods is usually available on the institution's official website or can be obtained by contacting the admissions or finance department."
    },
    {
        "question": "How are online courses structured, and what is the learning format?",
        "answer": "Online courses often include video lectures, readings, assignments, and interactive discussions. The specific format may vary, so it's essential to check the course details for more information."
    },
    {
        "question": "How can I access course materials and resources?",
        "answer": "Course materials are typically accessible through a dedicated online platform or learning management system (LMS). Students receive login details upon enrollment."
    },
    {
        "question": "Are there any scholarships or financial aid options available for students?",
        "answer": "Institutions often offer scholarships or financial aid programs. Details about eligibility criteria and application processes can be obtained from the financial aid office."
    },
    {
        "question": "What academic support services are available for online students?",
        "answer": "Online students usually have access to academic support services, including online tutoring, discussion forums, and virtual office hours with instructors."
    },
    {
        "question": "How are assessments and exams conducted in online courses?",
        "answer": "Assessments and exams in online courses may include quizzes, essays, and timed exams. The specific methods are outlined in the course syllabus."
    },
    {
        "question": "Can I transfer credits from previous academic programs?",
        "answer": "Many institutions allow credit transfers, but the process and criteria vary. Students should contact the admissions or registrar's office for information on credit transfer policies."
    },
    {
        "question": "What technology requirements are needed for online courses?",
        "answer": "Online courses may have specific technology requirements, such as a reliable internet connection, compatible devices, and software. These details are usually provided in the course answerription."
    },
    {
        "question": "How do I contact professors or instructors for academic assistance?",
        "answer": "Contact information for professors or instructors is often available on the institution's website or the course syllabus. Students can use email or virtual office hours for communication."
    }  
];

export const engineeringCourseScopes = [
    {
        department: 'Computer Science',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Introduction to Programming', job: 'Software Developer', difficulty: 'high' },
                    { course: 'Data Structures', job: 'Software Engineer', difficulty: 'high' },
                    { course: 'Database Management Systems', job: 'Database Administrator', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Algorithms', job: 'Algorithm Engineer', difficulty: 'high' },
                    { course: 'Web Development', job: 'Front-end Developer', difficulty: 'medium' },
                    { course: 'Operating Systems', job: 'Systems Administrator', difficulty: 'high' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Computer Networks', job: 'Network Engineer', difficulty: 'high' },
                    { course: 'Software Engineering', job: 'Software Engineer', difficulty: 'medium' },
                    { course: 'Artificial Intelligence', job: 'AI Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Database Systems', job: 'Database Administrator', difficulty: 'medium' },
                    { course: 'Mobile App Development', job: 'Mobile App Developer', difficulty: 'medium' },
                    { course: 'Computer Architecture', job: 'Hardware Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Operating Systems Internals', job: 'Systems Engineer', difficulty: 'high' },
                    { course: 'Software Testing', job: 'Quality Assurance Engineer', difficulty: 'medium' },
                    { course: 'Data Science', job: 'Data Scientist', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Web Technologies', job: 'Web Developer', difficulty: 'medium' },
                    { course: 'Machine Learning', job: 'Machine Learning Engineer', difficulty: 'high' },
                    { course: 'Cloud Computing', job: 'Cloud Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Network Security', job: 'Security Engineer', difficulty: 'high' },
                    { course: 'Software Project Management', job: 'Project Manager', difficulty: 'medium' },
                    { course: 'Computer Graphics', job: 'Graphics Programmer', difficulty: 'high' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Big Data Analytics', job: 'Big Data Engineer', difficulty: 'high' },
                    { course: 'Cybersecurity', job: 'Cybersecurity Analyst', difficulty: 'high' },
                    { course: 'Natural Language Processing', job: 'NLP Engineer', difficulty: 'high' },
                ],
            },
        ],
    }, 
    {
        department: 'Electrical Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Introduction to Electrical Engineering', job: 'Electrical Engineer', difficulty: 'medium' },
                    { course: 'Circuit Analysis', job: 'Circuit Design Engineer', difficulty: 'high' },
                    { course: 'Digital Logic Design', job: 'Digital Design Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Electromagnetic Theory', job: 'Electromagnetic Engineer', difficulty: 'high' },
                    { course: 'Power Systems', job: 'Power Systems Engineer', difficulty: 'high' },
                    { course: 'Electronic Devices and Circuits', job: 'Electronic Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'medium' },
                    { course: 'Power Electronics', job: 'Power Electronics Engineer', difficulty: 'high' },
                    { course: 'Digital Signal Processing', job: 'DSP Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Microprocessors and Microcontrollers', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                    { course: 'Renewable Energy Systems', job: 'Renewable Energy Engineer', difficulty: 'high' },
                    { course: 'Communication Systems', job: 'Communication Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'VLSI Design', job: 'VLSI Engineer', difficulty: 'high' },
                    { course: 'Electrical Machine Design', job: 'Machine Design Engineer', difficulty: 'medium' },
                    { course: 'Power System Protection', job: 'Protection Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'High Voltage Engineering', job: 'High Voltage Engineer', difficulty: 'high' },
                    { course: 'Digital Communication', job: 'Digital Communication Engineer', difficulty: 'medium' },
                    { course: 'Industrial Automation', job: 'Automation Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Optimization Techniques', job: 'Optimization Engineer', difficulty: 'medium' },
                    { course: 'Power System Analysis', job: 'Power System Analyst', difficulty: 'high' },
                    { course: 'Embedded Systems', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Smart Grids', job: 'Smart Grid Engineer', difficulty: 'high' },
                    { course: 'Artificial Intelligence in Power Systems', job: 'AI Engineer', difficulty: 'high' },
                    { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                ],
            },
        ],
    },
    {
        department: 'Electronics Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Electronic Devices', job: 'Electronics Engineer', difficulty: 'medium' },
                    { course: 'Analog Circuit Design', job: 'Analog Design Engineer', difficulty: 'high' },
                    { course: 'Digital System Design', job: 'Digital System Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Signals and Systems', job: 'Signal Processing Engineer', difficulty: 'medium' },
                    { course: 'Microprocessors and Interfacing', job: 'Embedded Systems Engineer', difficulty: 'high' },
                    { course: 'Electronic Circuits', job: 'Electronic Circuits Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Digital Signal Processing', job: 'DSP Engineer', difficulty: 'high' },
                    { course: 'Communication Systems', job: 'Communication Engineer', difficulty: 'high' },
                    { course: 'VLSI Design', job: 'VLSI Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Embedded Systems', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                    { course: 'Power Electronics', job: 'Power Electronics Engineer', difficulty: 'high' },
                    { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Microwave Engineering', job: 'Microwave Engineer', difficulty: 'high' },
                    { course: 'Optoelectronics', job: 'Optoelectronics Engineer', difficulty: 'medium' },
                    { course: 'Digital Image Processing', job: 'Image Processing Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Wireless Communication', job: 'Wireless Communication Engineer', difficulty: 'high' },
                    { course: 'Robotics and Automation', job: 'Robotics Engineer', difficulty: 'medium' },
                    { course: 'Digital VLSI Design', job: 'Digital VLSI Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Network Analysis and Synthesis', job: 'Network Engineer', difficulty: 'medium' },
                    { course: 'Antenna and Wave Propagation', job: 'Antenna Engineer', difficulty: 'high' },
                    { course: 'FPGA-based System Design', job: 'FPGA Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Embedded System Design', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                    { course: 'VLSI Testing and Verification', job: 'VLSI Testing Engineer', difficulty: 'high' },
                    { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                ],
            },
        ],
    },
    {
        department: 'Civil Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Engineering Mechanics', job: 'Civil Engineer', difficulty: 'medium' },
                    { course: 'Building Materials and Construction', job: 'Construction Engineer', difficulty: 'high' },
                    { course: 'Surveying', job: 'Survey Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Strength of Materials', job: 'Structural Engineer', difficulty: 'high' },
                    { course: 'Concrete Technology', job: 'Concrete Technologist', difficulty: 'medium' },
                    { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                    { course: 'Structural Analysis', job: 'Structural Analyst', difficulty: 'high' },
                    { course: 'Transportation Engineering', job: 'Transportation Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Design of Concrete Structures', job: 'Concrete Design Engineer', difficulty: 'high' },
                    { course: 'Environmental Engineering', job: 'Environmental Engineer', difficulty: 'medium' },
                    { course: 'Surveying-II', job: 'Survey Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                    { course: 'Design of Steel Structures', job: 'Structural Engineer', difficulty: 'high' },
                    { course: 'Hydraulic Structures', job: 'Hydraulic Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Construction Management', job: 'Construction Manager', difficulty: 'medium' },
                    { course: 'Town Planning', job: 'Town Planner', difficulty: 'medium' },
                    { course: 'Project Estimation and Costing', job: 'Cost Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Structural Dynamics', job: 'Structural Dynamics Engineer', difficulty: 'high' },
                    { course: 'Transportation Planning and Management', job: 'Transportation Planner', difficulty: 'high' },
                    { course: 'Finite Element Analysis', job: 'FEA Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Construction Technology', job: 'Construction Technologist', difficulty: 'medium' },
                    { course: 'Project Planning and Control', job: 'Project Planner', difficulty: 'medium' },
                    { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                ],
            },
        ],
    },
    {
        department: 'Mechanical Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Engineering Mechanics', job: 'Mechanical Engineer', difficulty: 'high' },
                    { course: 'Thermodynamics', job: 'Thermal Engineer', difficulty: 'high' },
                    { course: 'Machine Design', job: 'Design Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                    { course: 'Heat Transfer', job: 'Heat Transfer Engineer', difficulty: 'high' },
                    { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Engineering Materials', job: 'Materials Engineer', difficulty: 'medium' },
                    { course: 'Manufacturing Processes', job: 'Manufacturing Engineer', difficulty: 'medium' },
                    { course: 'CAD/CAM', job: 'CAD/CAM Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Machine Tools', job: 'Machine Tool Engineer', difficulty: 'medium' },
                    { course: 'Refrigeration and Air Conditioning', job: 'HVAC Engineer', difficulty: 'high' },
                    { course: 'Automotive Engineering', job: 'Automotive Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Robotics and Automation', job: 'Robotics Engineer', difficulty: 'high' },
                    { course: 'Power Plant Engineering', job: 'Power Plant Engineer', difficulty: 'high' },
                    { course: 'Finite Element Analysis', job: 'FEA Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Advanced Manufacturing', job: 'Advanced Manufacturing Engineer', difficulty: 'medium' },
                    { course: 'Industrial Engineering', job: 'Industrial Engineer', difficulty: 'medium' },
                    { course: 'Engineering Economics', job: 'Engineering Economist', difficulty: 'low' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Mechanical Vibrations', job: 'Vibration Analyst', difficulty: 'high' },
                    { course: 'Composite Materials', job: 'Composite Engineer', difficulty: 'high' },
                    { course: 'Quality Control', job: 'Quality Control Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Renewable Energy Systems', job: 'Renewable Energy Engineer', difficulty: 'high' },
                    { course: 'Industrial Safety', job: 'Safety Engineer', difficulty: 'medium' },
                    { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                ],
            },
        ],
    },
    {
        department: 'Chemical Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Introduction to Chemical Engineering', job: 'Chemical Engineer', difficulty: 'medium' },
                    { course: 'Chemical Process Calculations', job: 'Process Engineer', difficulty: 'high' },
                    { course: 'Chemical Thermodynamics', job: 'Thermodynamics Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                    { course: 'Heat Transfer', job: 'Heat Transfer Engineer', difficulty: 'high' },
                    { course: 'Mass Transfer', job: 'Mass Transfer Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Chemical Reaction Engineering', job: 'Reaction Engineer', difficulty: 'high' },
                    { course: 'Process Control', job: 'Process Control Engineer', difficulty: 'medium' },
                    { course: 'Chemical Engineering Thermodynamics', job: 'Chemical Thermodynamics Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Unit Operations', job: 'Unit Operations Engineer', difficulty: 'medium' },
                    { course: 'Separation Processes', job: 'Separation Engineer', difficulty: 'high' },
                    { course: 'Chemical Engineering Design', job: 'Design Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Process Simulation', job: 'Simulation Engineer', difficulty: 'high' },
                    { course: 'Chemical Process Safety', job: 'Process Safety Engineer', difficulty: 'high' },
                    { course: 'Polymer Engineering', job: 'Polymer Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Environmental Engineering', job: 'Environmental Engineer', difficulty: 'medium' },
                    { course: 'Petroleum Refining Engineering', job: 'Petroleum Engineer', difficulty: 'high' },
                    { course: 'Biochemical Engineering', job: 'Biochemical Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Process Optimization', job: 'Optimization Engineer', difficulty: 'high' },
                    { course: 'Nanotechnology in Chemical Engineering', job: 'Nanotechnology Engineer', difficulty: 'medium' },
                    { course: 'Chemical Plant Design and Economics', job: 'Plant Design Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Industrial Internship', job: 'Industrial Intern', difficulty: 'medium' },
                    { course: 'Seminar and Project', job: 'Project Engineer', difficulty: 'high' },
                    { course: 'Advanced Topics in Chemical Engineering', job: 'Advanced Engineer', difficulty: 'high' },
                ],
            },
        ],
    },
    {
        department: 'Environmental Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Introduction to Environmental Engineering', job: 'Environmental Engineer', difficulty: 'medium' },
                    { course: 'Environmental Chemistry', job: 'Environmental Chemist', difficulty: 'high' },
                    { course: 'Water and Wastewater Treatment', job: 'Water Treatment Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Air Pollution Control Engineering', job: 'Air Pollution Control Engineer', difficulty: 'high' },
                    { course: 'Solid Waste Management', job: 'Waste Management Engineer', difficulty: 'medium' },
                    { course: 'Environmental Microbiology', job: 'Environmental Microbiologist', difficulty: 'high' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Hydrology and Watershed Management', job: 'Hydrologist', difficulty: 'medium' },
                    { course: 'Soil and Groundwater Remediation', job: 'Remediation Engineer', difficulty: 'high' },
                    { course: 'Environmental Impact Assessment', job: 'Environmental Assessor', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Ecology and Environmental Systems', job: 'Ecologist', difficulty: 'medium' },
                    { course: 'Environmental Law and Policy', job: 'Environmental Policy Analyst', difficulty: 'high' },
                    { course: 'Sustainability and Green Design', job: 'Sustainability Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Renewable Energy Systems', job: 'Renewable Energy Engineer', difficulty: 'high' },
                    { course: 'Climate Change Adaptation', job: 'Climate Change Specialist', difficulty: 'high' },
                    { course: 'Industrial Ecology', job: 'Industrial Ecologist', difficulty: 'medium' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Environmental Modeling', job: 'Environmental Modeler', difficulty: 'high' },
                    { course: 'Risk Assessment and Management', job: 'Risk Assessment Engineer', difficulty: 'high' },
                    { course: 'Environmental Economics', job: 'Environmental Economist', difficulty: 'medium' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Advanced Water Treatment Technologies', job: 'Advanced Water Treatment Engineer', difficulty: 'high' },
                    { course: 'Environmental Monitoring and Analysis', job: 'Environmental Analyst', difficulty: 'medium' },
                    { course: 'Green Building Design', job: 'Green Building Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Internship in Environmental Engineering', job: 'Environmental Engineering Intern', difficulty: 'medium' },
                    { course: 'Capstone Project', job: 'Environmental Engineering Project Manager', difficulty: 'high' },
                    { course: 'Advanced Topics in Environmental Engineering', job: 'Advanced Environmental Engineer', difficulty: 'high' },
                ],
            },
        ],
    },
    {
        department: 'Civil Engineering',
        semesters: [
            {
                semester: 1,
                courses: [
                    { course: 'Engineering Mechanics', job: 'Civil Engineer', difficulty: 'medium' },
                    { course: 'Building Materials and Construction', job: 'Construction Engineer', difficulty: 'high' },
                    { course: 'Surveying', job: 'Survey Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 2,
                courses: [
                    { course: 'Strength of Materials', job: 'Structural Engineer', difficulty: 'high' },
                    { course: 'Concrete Technology', job: 'Concrete Technologist', difficulty: 'medium' },
                    { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 3,
                courses: [
                    { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                    { course: 'Structural Analysis', job: 'Structural Analyst', difficulty: 'high' },
                    { course: 'Transportation Engineering', job: 'Transportation Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 4,
                courses: [
                    { course: 'Design of Concrete Structures', job: 'Concrete Design Engineer', difficulty: 'high' },
                    { course: 'Environmental Engineering', job: 'Environmental Engineer', difficulty: 'medium' },
                    { course: 'Surveying-II', job: 'Survey Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 5,
                courses: [
                    { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                    { course: 'Design of Steel Structures', job: 'Structural Engineer', difficulty: 'high' },
                    { course: 'Hydraulic Structures', job: 'Hydraulic Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 6,
                courses: [
                    { course: 'Construction Management', job: 'Construction Manager', difficulty: 'medium' },
                    { course: 'Town Planning', job: 'Town Planner', difficulty: 'medium' },
                    { course: 'Project Estimation and Costing', job: 'Cost Engineer', difficulty: 'medium' },
                ],
            },
            {
                semester: 7,
                courses: [
                    { course: 'Structural Dynamics', job: 'Structural Dynamics Engineer', difficulty: 'high' },
                    { course: 'Transportation Planning and Management', job: 'Transportation Planner', difficulty: 'high' },
                    { course: 'Finite Element Analysis', job: 'FEA Engineer', difficulty: 'high' },
                ],
            },
            {
                semester: 8,
                courses: [
                    { course: 'Construction Technology', job: 'Construction Technologist', difficulty: 'medium' },
                    { course: 'Project Planning and Control', job: 'Project Planner', difficulty: 'medium' },
                    { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                ],
            },
        ],
    },        
];
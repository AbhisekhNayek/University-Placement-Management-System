import React from 'react';
import { 
    TableContainer,  
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography 
} from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
import { engineeringCourseScopes } from '../../common/DummyData';

const EngineeringCourseTable = ({  }) => {
    const headerRow = ['Semester', 'Course', 'Job Opportunity', 'Difficulty'];

    return (
        <div className=' sm:px-[3rem] lg:px-[5rem] xl:px-[10rem] py-[2rem] space-y-3'>
            {engineeringCourseScopes.map((departmentData) => (
                <Accordion key={departmentData.department}
                sx={{
                    backgroundColor: '#F2FEFF',
                    '&:hover': {
                        backgroundColor: '#E4FAFF',
                    }
                }}>
                    <AccordionSummary 
                    expandIcon={
                        <FaAngleDown className='text-2xl text-blue-800'/>    
                    } 
                    aria-controls="panel1a-content" 
                    id="panel1a-header">
                        <span className=' font-mavenPro font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-400'>
                            {departmentData.department}
                        </span>
                    </AccordionSummary>

                    <AccordionDetails>
                        <TableContainer
                        sx={{
                            margin: '10px',
                            width: '95%',
                            borderBottom: '1px solid black',
                            backgroundColor: '#EFFDF5',
                        }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headerRow.map((val, indx) => (
                                            <TableCell
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#008C37',
                                                border: `2px solid #3E8C5F`
                                            }}
                                            key={indx}>
                                                <span className='text-[14px] sm:text-[16px] md:text-[17px] xl:text-[18px] font-montserrat'>
                                                    {val}
                                                </span>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                    {departmentData.semesters.map((semesterData, indx) => (
                                        <React.Fragment key={semesterData.semester + indx}>
                                            {semesterData.courses.map((courseData, index) => (
                                                <TableRow key={index}
                                                sx={{
                                                    borderBottom: index === semesterData.courses.length - 1 ? `2px solid #3E8C5F` : 'none',
                                                }}>
                                                    {index === 0 ? (
                                                        <TableCell 
                                                        rowSpan={semesterData.courses.length}>
                                                            <div className='text-[1.5rem] font-bold font-mavenPro'>
                                                                {semesterData.semester}
                                                            </div>
                                                        </TableCell>
                                                    ) : null}

                                                    <TableCell>
                                                        <div className='text-[.8rem] md:text-[.9rem] xl:text-[1rem] font-bold font-robotoMono'>
                                                            {courseData.course}
                                                        </div>
                                                    </TableCell>
                                                    
                                                    <TableCell>
                                                        <div className='text-[.8rem] md:text-[.9rem] xl:text-[1rem] font-bold font-robotoMono'>
                                                            {courseData.job}
                                                        </div>
                                                    </TableCell>
                                                    
                                                    <TableCell>
                                                        <div className='text-[.8rem] md:text-[.9rem] xl:text-[1rem] font-bold font-lato capitalize'>
                                                            {courseData.difficulty}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default EngineeringCourseTable;

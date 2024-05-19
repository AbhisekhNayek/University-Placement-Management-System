
import React, { Component, useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Table,Dropdown } from 'react-bootstrap'

const StudentSlotSelection = () => {

    const [interviews, setInterviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [disableButtons, setDisableButtons] = useState({});
    const usn = localStorage.getItem('token')
    useEffect(() => {
        // Fetch interview data from the backend API
        fetch(`http://localhost:1337/api/inveriewSlotAvailability/${localStorage.getItem('token')}`)
            .then((response) => response.json())
            .then((data) => {
                setInterviews(data);
                console.log(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch interview data', error);
                setLoading(false);
            });
    }, []);

    const handleApplyClick = (id, did, date, time, companyEmail, meetingLink) => {
        setDisableButtons((prevState) => ({
            ...prevState,
            [id]: true,
        }));
        console.log(did)



        fetch('http://localhost:1337/api/finalScheduleSelection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                did,
                date,
                time,
                usn,
                meetingLink,
                companyEmail
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // Handle the response from the backend
                console.log(responseData);
            })
            .catch((error) => {
                console.error('Failed to send the data', error);
            });
    };

    return (
        <div>
             <Navbar bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="StudentHome">Home</Nav.Link>
                            <Nav.Link href="StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="createResume">Resume</Nav.Link>
                        </Nav>


                        <div className="col-md-6 mx-auto" >
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </div>
                        <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Collapse>
                </Container>
            
            </Navbar>
            <br></br>
            <br></br>
            <h1 class="container text-center">Slot Sletection</h1>
            <br></br>
            <br></br>
            <div class="container ">
                {interviews?.map((posting) =>
                    <Table striped bordered hover key={posting.id}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Company Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posting.date1 !== '-' && (
                                <tr>
                                    <td>{posting.date1}</td>
                                    <td>{posting.time1}</td>
                                    <td>{posting.companyEmail}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            disabled={disableButtons[posting.id]}
                                            onClick={() => handleApplyClick(posting.id, posting._id, posting.date1, posting.time1, posting.companyEmail, posting.meetingLink)}
                                        >
                                            Apply
                                        </Button>
                                    </td>
                                </tr>
                            )}
                            {posting.date2 !== '-' && (
                                <tr>
                                    <td>{posting.date2}</td>
                                    <td>{posting.time2}</td>
                                    <td>{posting.companyEmail}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            disabled={disableButtons[posting.id]}
                                            onClick={() => handleApplyClick(posting.id, posting._id, posting.date1, posting.time1, posting.companyEmail, posting.meetingLink)}
                                        >
                                            Apply
                                        </Button>
                                    </td>
                                </tr>
                            )}
                            {posting.date3 !== '-' && (
                                <tr>
                                    <td>{posting.date3}</td>
                                    <td>{posting.time3}</td>
                                    <td>{posting.companyEmail}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            disabled={disableButtons[posting.id]}
                                            onClick={() => handleApplyClick(posting.id, posting._id, posting.date1, posting.time1, posting.companyEmail, posting.meetingLink)}
                                        >
                                            Apply
                                        </Button>
                                    </td>
                                </tr>
                            )}
                            {posting.date4 !== '-' && (
                                <tr>
                                    <td>{posting.date4}</td>
                                    <td>{posting.time4}</td>
                                    <td>{posting.companyEmail}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            disabled={disableButtons[posting.id]}
                                            onClick={() => handleApplyClick(posting.id, posting._id, posting.date1, posting.time1, posting.companyEmail, posting.meetingLink)}
                                        >
                                            Apply
                                        </Button>
                                    </td>
                                </tr>
                            )}
                            {posting.date5 !== '-' && (
                                <tr>
                                    <td>{posting.date5}</td>
                                    <td>{posting.time5}</td>
                                    <td>{posting.companyEmail}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            disabled={disableButtons[posting.id]}
                                            onClick={() => handleApplyClick(posting.id, posting._id, posting.date1, posting.time1, posting.companyEmail, posting.meetingLink)}
                                        >
                                            Apply
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                )}
            </div>
            <br></br>
            <br></br>
            <br></br>


        </div>
    );
}

export default StudentSlotSelection;
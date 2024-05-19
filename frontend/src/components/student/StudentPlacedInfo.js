import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table } from 'react-bootstrap'



const StudentPlacedInfo = () => {
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
                            navbarScroll>
                            <Nav.Link href="StudentHome">Home</Nav.Link>
                            <Nav.Link href="StudentSchedule">Job Posting</Nav.Link>
                            <Nav.Link href="StudentResume">Interviews</Nav.Link>
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
                                <Dropdown.Item href="/StudentLogIn">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <br></br>

            <h1 class="container text-center">Placed Students</h1>
            <br></br>
            <div class="container ">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Company Name</th>
                            <th>Job Role</th>
                            <th>CTC</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Date of Selection</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2734</td>
                            <td>Google</td>
                            <td>Software Developer</td>
                            <td>9LPA</td>
                            <td type="email">google@gmail.com</td>
                            <td>Hyderabad</td>
                            <td>09/04/23</td>

                        </tr>
                        <tr>
                            <td>9304</td>
                            <td>Synthesis</td>
                            <td>Software Developer</td>
                            <td>8LPA</td>
                            <td type="email">synthesis@gmail.com</td>
                            <td>Bangalore</td>
                            <td>11/05/23</td>
                           
                        </tr>
                        
                    </tbody>
                </Table>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default StudentPlacedInfo;

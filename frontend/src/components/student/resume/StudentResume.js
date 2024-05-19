import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card } from 'react-bootstrap'

const StudentResume = () => {
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
                            <Nav.Link href="StudentResume">Resume</Nav.Link>
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
                        <Button variant="outline-dark">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                        </Button>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href='/'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/resume-icon-vector-job-application-cv-sign-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-resume-icon-215388315.jpg" />
                                    <Card.Body>
                                        <Card.Title>Download Resume</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                        <a href='/'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem', height: '22rem' }}>
                                    <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/job-search-logo-unique-vector-260nw-787885846.jpg"  height="300" />
                                    <Card.Body>
                                        <Card.Title>Upload Resume</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                    </div>
                </div>
                <br></br>

            </div>
        </div>
    );
}

export default StudentResume;
import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button ,Dropdown} from 'react-bootstrap'

const AdminCompanyView = () => {
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
                            <Nav.Link href="/AdminHome">Home</Nav.Link>
                            <Nav.Link href="/AdminJobPosting">Job Posted</Nav.Link>
                            <Nav.Link href="/AdminPlacedStudent">Placed Students</Nav.Link>
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

                <div class="container text-center">
                    <br></br>
                    <br></br>
                    <h1 class="container text-center">Google</h1>

                    <br></br>
                    <h5 class="container text-justify" align="left">
                        <img align="right" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png" height="180" width="171" />

                        <b>Website Link:</b>   <a href="">Website Link</a>
                        <br></br>
                        <br></br>
                        <b>Email:</b> google@gmail.com
                        <br></br>
                        <br></br>
                        <b>Location:</b> Bangalore
                        <br></br>
                        <br></br>
                        <b>Contact Number:</b> 2930748930
                        <br></br>
                        <br></br>
                        <b>Company Description:</b>
                        <br></br>
                        <br></br>
                        Google Search is a fully-automated search engine that uses software known as web crawlers that explore the web regularly to find pages to add to our index. In fact, the vast majority of pages listed in our results aren't manually submitted for inclusion, but are found and added automatically when our web crawlers explore the web.
                        This document explains the stages of how Search works in the context of your website. Having this base knowledge can help you fix crawling issues, get your pages indexed, and learn how to optimize how your site appears in Google Search.
                        <ul>
                            <li>Google helps small businesses in many ways: Google Business Profile builds customer awareness, while Google Ads generates web traffic and direct leads.</li>
                            <li>Google Analytics is a free tool that shows website traffic reports so you can create more content that visitors like and fix issues that are not working.</li>
                            <li>Google Workspace is a suite of web-based software and productivity tools that you can use for collaboration.</li>
                            <li>This article is for small business owners who want to leverage Google’s free tools for marketing and productivity.</li>
                        </ul>
                        Google has partnered with thousands of cities and local organizations to help businesses build their websites, stay on top of Google search results, and be seen by customers. Resources include free custom websites, a step-by-step guide to using Google Business Profile, diagnostic tools to measure your website’s performance, training programs and business workshops.
<br></br>
<br></br>
<Button variant="dark" type="submit">Accept </Button>


                    </h5>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>

);
}
 
export default AdminCompanyView;

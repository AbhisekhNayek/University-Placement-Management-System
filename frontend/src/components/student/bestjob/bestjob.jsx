import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col } from 'reactstrap';

const BestJob = () => {
    const [jobMatches, setJobMatches] = useState([]);
    const [bestJob, setBestJob] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const usn = localStorage.getItem('token');

    useEffect(() => {
        const fetchBestJob = async () => {
            try {
                // student profile
                const response = await axios.get(`http://localhost:1337/api/StudentProfile/${usn}`);
                const studentDetails = response.data;

       
                const Importanttext = {
                    text: `${studentDetails.keySkills},${studentDetails.education1},${studentDetails.course1}`
                };

                // Parse resume
                const resumeParseResponse = await axios.post('http://127.0.0.1:5000/parse_resume', Importanttext);
                const resumeData = resumeParseResponse.data;

                // Fetch job postings
                const responsej = await axios.get('http://localhost:1337/api/getAllJobPosted');
                const jobRequirement = responsej.data;
                const jobDescriptions = jobRequirement.AllJobPostings.map(job => job.JobDescription);

          
                const matchJobRequestData = {
                    resumeData,
                    jobDescriptions
                };
                const jobMatchResponse = await axios.post('http://127.0.0.1:5000/match_job', matchJobRequestData);

                // Process job matches
                const processedJobs = jobMatchResponse.data.map((matchingValue, index) => ({
                    matchingValue,
                    ...jobRequirement.AllJobPostings[index]
                }));

                // max matching value
                const bestJob = processedJobs.reduce((maxJob, currentJob) => {
                    return currentJob.matchingValue > maxJob.matchingValue ? currentJob : maxJob;
                });

               
                setJobMatches(processedJobs);
                setBestJob(bestJob); 
                setLoading(false);
            } catch (error) {
                console.log('Error fetching best job:', error);
                setError('Error fetching data. Please try again.');
                setLoading(false);
            }
        };

        fetchBestJob();
    }, [usn]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const cardStyle = {
        backgroundColor: '#e3f2fd', 
        border: '1px solid #90caf9' 
    };

    const bestJobCardStyle = {
        backgroundColor: '#e0f7fa', 
        border: '1px solid #80deea' 
    };


    return (

    <Container>
    <h4><i>Best Matched Job</i></h4>
    {bestJob && (
        <Card className="mb-4" style={bestJobCardStyle}>
            <CardBody>
                <CardTitle tag="h5" className="job-title">{bestJob.jobRole}</CardTitle>
                <CardText className="job-description"><b>{bestJob.JobDescription}</b></CardText>
                <CardText className="job-qualification"><b>{bestJob.Qualification}</b></CardText>
                <CardText className="matching-value"><b><i>{(bestJob.matchingValue * 100).toFixed(2)}% Matching</i></b></CardText>
            </CardBody>
        </Card>
    )}

    <h4><i>All Jobs </i></h4>
    <Row>
        {jobMatches.map((job, index) => (
            <Col sm="12" md="6" lg="4" key={index} className="mb-4">
                <Card style={cardStyle}>
                    <CardBody>
                        <CardTitle tag="h5" className="job-title">{job.jobRole}</CardTitle>
                        <CardText className="job-description"><b>{job.JobDescription}</b></CardText>
                        <CardText className="job-qualification"><b>{job.Qualification}</b></CardText>
                        <CardText className="matching-value"><b><i>{(job.matchingValue * 100).toFixed(2)}% Matching</i></b> </CardText>
                        <Button href={job.applyLink} color="primary">Apply Now</Button>
                    </CardBody>
                </Card>
            </Col>
        ))}
    </Row>
</Container>
    );
};

export default BestJob;

import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from "react-router-dom";

const InterviewScheduler = () => {
  const location=useLocation();
  const [schedule, setSchedule] = useState([]);
  const [meetingLink, setMeetingLink] = useState('');
  const usn = location.state.usn;
  const companyEmail = localStorage.getItem('token')
  const navigate = useNavigate();

  async function handleSubmit(e) {
        e.preventDefault();
    console.log('Button Pressed')

    const response = await fetch('http://localhost:1337/api/scheduleInterviewCompany', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        usn, companyEmail, meetingLink, schedule
      }),

    })

    const data = await response.json();

    console.log(data)
  
      alert(data.message)
      
  // 
};

const handleAddSlot = () => {
  if (schedule.length < 5) {
    setSchedule([...schedule, { date: '', time: '' }]);
  }
};

const handleRemoveSlot = (index) => {
  const updatedSchedule = [...schedule];
  updatedSchedule.splice(index, 1);
  setSchedule(updatedSchedule);
};

const handleDateChange = (index, value) => {
  const updatedSchedule = [...schedule];
  updatedSchedule[index].date = value;
  setSchedule(updatedSchedule);
};

const handleTimeChange = (index, value) => {
  const updatedSchedule = [...schedule];
  updatedSchedule[index].time = value;
  setSchedule(updatedSchedule);
};

const handleMeetingLinkChange = (value) => {
  setMeetingLink(value);
};

return (
  <Container>
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Interview Scheduler</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Meeting Link:</Form.Label>
            <Form.Control
              type="text"
              value={meetingLink}
              onChange={(e) => handleMeetingLinkChange(e.target.value)}
              required
            />
          </Form.Group>

          {schedule.map((slot, index) => (
            <div key={index}>
              <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={slot.date}
                  onChange={(e) => handleDateChange(index, e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Time:</Form.Label>
                <Form.Control
                  type="time"
                  value={slot.time}
                  onChange={(e) => handleTimeChange(index, e.target.value)}
                  required
                />
              </Form.Group>

              {index > 0 && (
                <Button variant="danger" onClick={() => handleRemoveSlot(index)}>
                  Remove
                </Button>
              )}
            </div>
          ))}

          <Button variant="primary" onClick={handleAddSlot}>
            Add Time Slot
          </Button>

          <Button variant="primary" type="submit" disabled={schedule.length === 0 || !meetingLink}>
            Schedule Interviews
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
};

export default InterviewScheduler;

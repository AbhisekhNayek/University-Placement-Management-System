import React, { useEffect, useState } from 'react';

const App = () => {
  const [interviews, setInterviews] = useState([]);
  const usn=localStorage.getItem('token')

  useEffect(() => {
    fetch(`http://localhost:1337/api/companySechdule/${usn}`)
      .then(response => response.json())
      .then(data => {
        setInterviews(data);
      })
      .catch(error => {
        console.error('Error fetching interview data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Interviews</h1>
      {interviews?.map((interview) => 
        <div key={interview._id}>
          <p>USN: {interview.usn}</p>
          <p>Date: {interview.date}</p>
          <p>Time: {interview.time}</p>
          <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer">
            <button>Join</button>
          </a>
          <hr />
        </div>
      )}
    </div>
  );
};

export default App;

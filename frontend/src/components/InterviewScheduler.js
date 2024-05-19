// InterviewScheduler.js
import React from 'react';

const InterviewScheduler = ({ interviews, handleTimeSlotSelection }) => {
  return (
    <div>
      <h2>Select a Time Slot</h2>
      <div>
        {interviews.map((interview, index) => (
          <div key={index}>
            <h3>Interview {index + 1}</h3>
            <p>USN: {interview.usn}</p>
            <p>Company Email: {interview.companyEmail}</p>
            <p>Meeting Link: {interview.meetingLink}</p>
            <ul>
              {Array.from(Array(5), (_, i) => i + 1).map((num) => (
                <li key={num}>
                  <button
                    onClick={() =>
                      handleTimeSlotSelection(
                        { date: interview[`date${num}`], time: interview[`time${num}`] },
                        index,
                        interview.usn,
                        interview.meetingLink,
                        interview.companyEmail
                      )
                    }
                  >
                    {interview[`date${num}`]} - {interview[`time${num}`]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewScheduler;

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
    const usn=localStorage.getItem('usn')
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedback, setFeedback] = useState('');

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    console.log("hi")
    // Send feedback to the server
    // Replace `/api/feedback` with your server endpoint to handle feedback submission
    fetch(`http://localhost:1337/api/resume/feedback/${usn}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usn, feedback })
    })
    
  };

  return (
    <div>
      <Document
        file={`http://localhost:1337/api/getResume/${usn}`} // Replace `/api/pdf` with your server route to fetch the PDF
        onLoadSuccess={handleDocumentLoadSuccess}
      >
        <Page pageNumber={currentPage} />
      </Document>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage <= 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage >= numPages}>
          Next Page
        </button>
      </div>
      <div>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
            rows={4}
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default PDFViewer;

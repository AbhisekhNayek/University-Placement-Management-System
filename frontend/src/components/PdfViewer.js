import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './PDFViewer.css';

const PDFViewer = () => {
  const location=useLocation()
  const [pdfUrl, setPdfUrl] = useState('');
  const {usn}=location.state
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/getResume/${usn}`); // Replace with your backend API endpoint to fetch the PDF
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        } else {
          console.log('Error fetching PDF');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPDF();
  }, []);

  return (
    <div className="pdf-viewer-container">
      <iframe className="pdf-frame" src={pdfUrl} title="PDF Viewer"></iframe>
    </div>
  );
};

export default PDFViewer;

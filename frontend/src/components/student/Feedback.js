import React, { useEffect, useState } from 'react';

const FeedbackTable = () => {
    const [feedback, setFeedback] = useState([]);
    const usn = localStorage.getItem('token');

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/getfeedback/${usn}`);
                const data = await response.json();
                setFeedback(data);
            } catch (error) {
                console.error('Error getting feedback:', error);
            }
        })();
    }, [usn]);

    const feedbackColumns = [
        { key: 'company', title: 'Company' },
        { key: 'title', title: 'Title' },
        { key: 'content', title: 'Content' },
    ];

    return (
        <div className="flex justify-center py-12 bg-gray-800 h-screen w-full">
            <div className="w-full max-w-lg bg-gray-900 rounded-lg shadow-lg">
                <div className="p-3 border-b-4 border-gray-800">
                    <span className="text-xl font-semibold font-mavenPro text-gray-100">Feedback</span>
                </div>
                
                <div className="p-4">
                    <table className="w-full text-sm bg-gray-800">
                        <thead className=''>
                            <tr>
                                {feedbackColumns.map((column) => (
                                    <th key={column.key} className="py-2 px-4 bg-gray-700 text-gray-100 text-left rounded-lg font-robotoMono ml-2">{column.title}</th>
                                ))}
                            </tr>
                        </thead>
                        
                        <tbody>
                            {feedback.map((item) => (
                                <tr key={item._id} className="border-b border-gray-700">
                                    {feedbackColumns.map((column) => (
                                        <td key={column.key} className="py-2 px-4 text-gray-200">{item[column.key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeedbackTable;


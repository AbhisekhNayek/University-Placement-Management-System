const nodemailer = require('nodemailer');

// Create a transporter object for sending emails
const transporter = nodemailer.createTransport({
  // Configure your email provider details here
  // For example, using SMTP settings
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password'
  }
});

// Function to send an email to a student
const sendEmailToStudent = async (studentEmail, subject, message) => {
  try {
    // Define email options
    const mailOptions = {
      from: 'Your Name <your-email@example.com>',
      to: studentEmail,
      subject: subject,
      text: message
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};

module.exports = {
  sendEmailToStudent
};

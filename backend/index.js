const express = require('express')
const cors = require('cors')
const multer = require('multer');
const app = express()
const dotenv = require('dotenv')
const { Student, Company, Posting, AppliedCandidate, Resume, ChatMessage, CompanyInterview, StudentInterview, Feedback, Admin, Template } = require('./models')
// const {Student, Company, Posting, AppliedCandidate, Admin} = require('./models')
const email = require('./emailservice')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const studentProfileModel = require('./studentprofile')
const jwt = require('jsonwebtoken')
dotenv.config()
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connection open");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(cors())
app.use(express.json())
const upload = multer();

app.get('/api/studentProfile', async (req, res) => {

  const data = studentProfileModel.getData()
  res.json(data)

})

app.put('/api/updateProfile/:usn', async (req, res) => {
  const usn = req.params.usn;
  const updatedData = req.body;

  try {
    
    const result = await Student.findOneAndUpdate({ usn }, updatedData, {
      new: true,
    });

    if (result) {
      res.status(200).json({ message: 'Profile updated successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

app.get('/api/sechdule/:usn', async (req, res) => {
  const usn = req.params.usn
  StudentInterview.find({ usn: usn })
    .then(interviews => res.json(interviews))
    .catch(error => {
      console.error('Error fetching interview data', error);
      res.status(500).json({ message: 'Failed to fetch interview data' });
    });
})

app.post('/api/finalScheduleSelection', async (req, res) => {
  console.log(req.body);

  const studentInterview = new StudentInterview({
    usn: req.body.usn,
    meetingLink: req.body.meetingLink,
    companyEmail: req.body.companyEmail,
    date: req.body.date,
    time: req.body.time,
  });

  try {
    await studentInterview.save();
    const jobId = req.body.did;

    try {
      const result = await CompanyInterview.deleteOne({ _id: jobId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Job posting not found' });
      }

      res.json({ message: 'Job posting deleted successfully' });
    }
    catch (error) {
      console.log(error)
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to schedule interview' });
  }
});

app.get('/api/appliedcandidatesadmin', async (req, res) => {

  try {
    const appliedCandidates = await AppliedCandidate.find();
    const formattedCandidates = [];

    for (let i = 0; i < appliedCandidates.length; i++) {
      const { _id, usn, jobid, status } = appliedCandidates[i];
      const student = await Student.findOne({ usn });
      const company = await Posting.findOne({ _id: jobid });
      console.log(company)

      const formattedCandidate = {
        appliedid: _id,
        studentName: student.firstName + ' ' + student.lastName,
        studentEmail: student.email,
        usn: student.usn,
        branch: student.branch,
        ctc: company.Package,
        jobRole: company.jobRole,
        companyName: company.Name,
        jobId: company._id,
        status: status
      };

      formattedCandidates.push(formattedCandidate);
    }

    res.json(formattedCandidates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/companySechdule/:companyEmail', async (req, res) => {

  const { companyEmail } = req.params;
  try {
    const schedule = await StudentInterview.find({ companyEmail })
    const scheduleInterview = [];
    for (let i = 0; i < schedule.length; i++) {
      const { usn, meetingLink, companyEmail, date, time } = schedule[i]
      const student = await Student.findOne({ usn });
      const scheduleInterviews = {
        usn: usn,
        date: date,
        time: time,
        studentName: student.firstName + ' ' + student.lastName,
        studentEmail: student.email,
        meetingLink: meetingLink,
        companyEmail: companyEmail,

      }
      scheduleInterview.push(scheduleInterviews)

    }
    console.log(scheduleInterview)
    res.json(scheduleInterview)
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
  // .then((interviews) => {
  //   console.log(interviews);
  //   res.json(interviews);
  // })
  // .catch((error) => {
  //   console.error('Error fetching interview data', error);
  //   res.status(500).json({ message: 'Failed to fetch interview data' });
  // });
});

app.get('/api/companysechdule/:email', (req, res) => {

  StudentInterview.find({ usn: usn })
    .then(interviews => res.json(interviews))
    .catch(error => {
      console.error('Error fetching interview data', error);
      res.status(500).json({ message: 'Failed to fetch interview data' });
    });
});

app.post('/api/scheduleInterviewCompany', (req, res) => {

  const { usn, companyEmail, meetingLink, schedule } = req.body;

  const companyInterview = new CompanyInterview({
    usn,
    companyEmail,
    meetingLink
  });

  // Process the schedule array dynamically
  schedule.forEach((slot, index) => {
    const dateField = `date${index + 1}`;
    const timeField = `time${index + 1}`;
    companyInterview[dateField] = slot.date;
    companyInterview[timeField] = slot.time;
  });

  companyInterview.save()
    .then(() => {
      res.status(200).json({ message: 'Interview scheduled successfully' });
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error: 'Failed to schedule interview' });
    });
});

app.post('/api/sendMessage', (req, res) => {
  const { sender, message } = req.body;
  console.log(req.body)
  // Create a new chat message
  const chatMessage = new ChatMessage({
    sender: sender,
    message: message,
  });

  // Save the chat message to the database
  chatMessage.save()
    .then((savedMessage) => {
      console.log("Save")
      res.json({ sender: savedMessage.sender, messages: message });
    })
    .catch((error) => {
      console.error('Error saving chat message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    });
});

app.get('/api/getAllMessages', (req, res) => {

  ChatMessage.find()
    .then((messages) => {
      res.json(messages);
    })
    .catch((error) => {
      console.error('Error retrieving chat messages:', error);
      res.status(500).json({ error: 'Failed to retrieve messages' });
    });
});

app.get('/api/getResume/:usn', async (req, res) => {
  const usn = req.params.usn
  console.log("Req")
  try {
    const usnPdf = await Resume.findOne({ usn: usn });

    if (!usnPdf || !usnPdf.resume.data) {

      console.log(usnPdf)
      console.log(usnPdf.resume.data)
      return res.status(404).send('File not found');
    }

    const { data, contentType } = usnPdf.resume;


    res.set('Content-Type', contentType);

    // Send the file data as the response
    res.send(data);
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).send('An error occurred while fetching the file');
  }
});
app.post('/api/createresume/:usn', async (req, res) => {
  console.log(req.body)
  console.log(req.params)
  res.status(200)
})

app.get('/api/getfeedback/:usn', async (req, res) => {
  const usn = req.params.usn;
  console.log(usn);

  try {
    const feedback = await Feedback.find({ usn });

    res.send(feedback);
  } catch (error) {
    console.error('Error getting feedback:', error);
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
});


app.post('/api/Resumeupload', upload.single('pdf'), async (req, res) => {
  try {
    console.log(req.body);
    const { usn } = req.body;
    const pdfData = req.file.buffer;
    console.log(pdfData)
    const contentType = req.file.mimetype;

    const existingResume = await Resume.findOne({ usn });

    if (existingResume) {
      existingResume.resume = {
        data: pdfData,
        contentType
      };
      await existingResume.save();
    } else {
      const newResume = new Resume({
        usn,
        resume: {
          data: pdfData,
          contentType
        }
      });
      await newResume.save();
    }

    res.status(201).json({ message: 'USN and PDF stored successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while storing USN and PDF' });
  }

});
app.put('/api/updateApplicationStatus/:id', async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  console.log(id)
  console.log(status)
  try {
    // Find the job posting by ID and update the status
    const updatedJobPosting = await AppliedCandidate.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );
    console.log("updated")
    res.status(200).json(updatedJobPosting);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update the job posting.' });
  }
});


app.post('/api/newJobApplied', async (req, res) => {
  console.log(req.body)
  const newPosting = await AppliedCandidate.create(req.body)
  const posting = await newPosting.save()
  res.status(200).json({ status: "ok" })
})

app.get('/api/getCandidateList/:id', async (req, res) => {
  const jobId = req.params.id;
  console.log("HI")
  try {
    const list = await AppliedCandidate.find({ jobid: jobId })
    res.status(200).json(list);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve job postings.' });
  }
})

app.get('/api/getJobPosted/:id', async (req, res) => {
  console.log(req.params.id)
  const companyemail = req.params.id;
  try {
    const jobPostings = await Posting.find({ companyEmail: companyemail });
    console.log(jobPostings)
    res.status(200).json(jobPostings);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve job postings.' });
  }
})

app.post('/api/sendFeedback', async (req, res) => {
  try {
    const { usn, company, title, content } = req.body;

    // Create a new feedback instance
    const feedback = new Feedback({
      usn,
      company,
      title,
      content,
    });

    // Save the feedback to the database
    await feedback.save();

    res.status(201).json({ message: 'Feedback stored successfully' });
  } catch (error) {
    console.log('Error storing feedback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/api/getallcompany', async (req, res) => {
  Company.find()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    })
})
app.get('/api/getallstudent', async (req, res) => {
  Student.find()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    })
})



// Get applied candidates with student, job, and company details


app.delete('/api/deleteCandidate/:appliedid', (req, res) => {
  const appliedid = req.params.appliedid;
  console.log("Hiiiiiii")
  AppliedCandidate.deleteOne({ _id: appliedid })
    .then(() => {
      res.json({ success: true, message: 'Candidate record deleted successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    });
});
app.get('/api/getposting', async (req, res) => {
  try {
    const acceptedJobs = await Posting.find({ Status: 'accepted' });
    res.send(acceptedJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})
app.get('/api/getadminposting', async (req, res) => {
  Posting.find()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    })
})

app.post('/api/studentRegister', async (req, res) => {
  try {
    const studentData = req.body;
    const student = new Student(studentData);
    await student.save();
    res.status(201).json({ message: 'ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/studentLogin', async (req, res) => {

  const { usn, password } = req.body;

  try {

    const student = await Student.findOne({ usn });

    if (!student) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    // const isPasswordValid = await compare(password, student.password);

    if (password != student.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    // const token = jwt.sign({ usn: student.usn }, 'secretKey'); // Replace 'secretKey' with your own secret key

    res.json({ "token": req.body.usn, "status": "ok", "usn": req.body.usn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to log in' });
  }
});


app.put('/api/students/:usn', async (req, res) => {
  const usn = req.params.usn;
  const updateData = req.body;

  try {
    // Find the student by USN
    const student = await Student.findOne({ usn });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update individual elements of the student data
    Object.assign(student, updateData);

    // Save the updated student data
    const updatedStudent = await student.save();

    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update student data' });
  }
});

app.get('/api/StudentProfile/:id', async (req, res) => {
  const usn = req.params.id;
  console.log(usn)
  try {
    const student = await Student.findOne({ usn: usn });
    console.log(student)
    res.send(student)
  }
  catch (err) {
    console.log('err')
    console.log(err)
    res.send("Couldn't fetch")

  }
})

app.put('/api/studentProfile/:usn', async (req, res) => {
  console.log("Profile Not Found")
  const usn = req.params.usn;
  const updatedProfile = req.body;

  try {
    // Find the student profile by USN and update it
    const profile = await StudentProfile.findOneAndUpdate(
      { usn: usn },
      updatedProfile,
      { new: true }
    );

    if (!profile) {
      console.log("Profile Not Found")
      return res.status(404).json({ error: 'Student profile not found' });
    }

    return res.status(200).json({ message: 'Student profile updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/registerCompany', async (req, res) => {

  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newCompany = await Company.create({

      name: req.body.companyName,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      website: req.body.companyWebsite,
      contact: {
        email: req.body.email,
        phone: req.body.contactNumber

      }


    })

    const company = await newCompany.save()


    res.status(201).json({ message: 'ok' });
  } catch (err) {
    console.log(err);
  }

  // res.status(206).send("ok")
})

app.get('/api/inveriewSlotAvailability/:usn', async (req, res) => {
  console.log(req.params.usn)
  usn = req.params.usn;
  console.log(usn)

  // Find the interview data in the MongoDB collection by USN
  CompanyInterview.find({ usn: usn })
    .then((interview) => {
      if (!interview) {
        return res.status(404).json({ message: 'Interview not found' });
      }

      res.json(interview);
    })
    .catch((error) => {
      console.error('Error fetching interview data', error);
      res.status(500).json({ message: 'Failed to fetch interview data' });
    });

})

app.post('/api/companyLogin', async (req, res) => {
  console.log(req.body)
  try {
    const company = await Company.findOne({ email: req.body.email })
    // !company && res.status(404).json("Company not found")
    !company && res.status(404).json({ status: 'Company not found' })

    const validPassword = await bcrypt.compare(req.body.password, company.password)
    !validPassword && res.status(400).json("invalid password")

    const token = jwt.sign(
      {
        name: company.name,
        email: req.body.email,
      },
      'secret123'
    )

    res.status(200).json({ status: 'ok', user: req.body.email, name: company.name, id: company._id })
  } catch (err) {
    console.log(err);
  }
})

app.post('/api/newJobPosting', async (req, res) => {
  console.log(req.body)
  try {

    const newJobPosting = new Posting(req.body);

    // Save the job posting to the database
    const savedJobPosting = await newJobPosting.save();


    res.status(201).json({status:"ok"});

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

//delete a job
app.delete('/api/jobPostings/:id', async (req, res) => {
  try {
    const jobId = req.params.id;


    const jobPosting = await Posting.findOne(jobId);

    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }

    // Delete the job posting document
    await jobPosting.remove();

    res.json({ message: 'Job posting deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//update the job
app.put('/api/jobPostings/:id', async (req, res) => {
  try {
    const jobId = req.params.id;


    const jobPosting = await Posting.findOne(jobId);

    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }


    jobPosting.jobRole = req.body.jobRole;
    jobPosting.JobDescription = req.body.JobDescription;
    jobPosting.Package = req.body.Package;
    jobPosting.Qualification = req.body.Qualification;
    jobPosting.Eligibility = req.body.Eligibility;
    jobPosting.Specialization = req.body.Specialization;
    jobPosting.Experiance = req.body.Experiance;
    jobPosting.JobLocation = req.body.JobLocation;
    jobPosting.LastDate = req.body.LastDate;
    jobPosting.DriveFrom = req.body.DriveFrom;
    jobPosting.DriveTO = req.body.DriveTO;
    jobPosting.Venue = req.body.Venue;


    const updatedJobPosting = await jobPosting.save();

    res.json(updatedJobPosting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

//status of candidates
app.get('/status/:jobId/:usn', async (req, res) => {
  const jobId = req.params.jobId;
  const usn = req.params.usn;

  try {
    // Find the job posting
    const jobPosting = await Posting.findOne(jobId);

    if (!jobPosting) {
      return res.status(404).json({ error: 'Job posting not found' });
    }

    // Find the applied candidate for the job posting and USN
    const appliedCandidate = await AppliedCandidate.findOne({
      jobid: jobId,
      usn: usn
    });

    if (!appliedCandidate) {
      return res.status(404).json({ error: 'Candidate not found for the job' });
    }

    res.json(appliedCandidate.status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve candidate status' });
  }
});

//track job applications
app.get('/applications/:jobId', async (req, res) => {
  const jobId = req.params.jobId;

  try {
    // Find the job posting
    const jobPosting = await Posting.findOne({ companyEmail: jobId });

    if (!jobPosting) {
      return res.status(404).json({ error: 'Job posting not found' });
    }

    // Find all the applied candidates for the job posting
    const appliedCandidates = await AppliedCandidate.find({ jobid: jobPosting.companyEmail });

    res.json(appliedCandidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve job applications' });
  }
});

// Schedule an interview
app.post('/interviews', async (req, res) => {
  try {
    const { usn, date, time, location } = req.body;

    // Create a new interview
    const interview = new Interview({
      usn,
      date,
      time,
      location
    });

    // Save the interview
    await interview.save();
    const student = await Student.findOne({ usn: req.body.usn });
    const studentEmail = student.email;
    const subject = 'Interview Scheduled';
    const message = 'An interview has been scheduled. Check your interview details for more information.';

    await sendEmailToStudent(studentEmail, subject, message);
    res.json(interview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to schedule interview' });
  }
});

app.put('/api/companyUpdate', async (req, res) => {
  const { name, email, password, address, website, contact } = req.body;
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  try {
    const updatedCompany = await Company.findOneAndUpdate(
      { email },
      { name, hashedPassword, address, website, contact },
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }


    await updatedCompany.save();

    res.json(updatedCompany);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/changeJobStatus', async (req, res) => {
  // Extract jobId and status from the request body
  const { jobId, status } = req.body;

  try {
    // Find the job by jobId
    const job = await Posting.findById(jobId);
    console.log(job)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Update the job status
    job.Status = status;
    job.Experience = job.Experience;
    job.companyEmail = job.companyEmail;
    await job.save();

    // Send a success response
    res.status(200).json({ message: 'Job status changed successfully.' });
  } catch (error) {
    // Handle error
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/api/registerAdmin', async (req, res) => {
  console.log(req.body)
  const { username, email, password } = req.body;

  try {

    const existingAdmin = await Admin.findOne().or([{ username }, { email }]);

    if (existingAdmin) {
      return res.status(409).json({ error: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ username, password: hashedPassword, email });


    const savedAdmin = await admin.save();

    res.status(201).json({status:"ok"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register admin' });
  }

})
app.post('/api/adminLogin', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  try {

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }



    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to authenticate' });
  }
});


//resume feedback

app.post('/api/ Upload', async (req, res) => {
  const { usn, resumeData } = req.body;

  try {
    // Check if the resume already exists
    const existingResume = await Resume.findOne({ usn });

    if (existingResume) {
      return res.status(400).json({ error: 'Resume already exists' });
    }

    // Create a new resume
    const newResume = new Resume({
      usn,
      resume: {
        data: resumeData,
        contentType: 'application/pdf'
      }
    });

    // Save the resume to the database
    const savedResume = await newResume.save();

    res.status(201).json(savedResume);
  } catch (error) {
    console.error('Failed to upload resume:', error);
    res.status(500).json({ error: 'Failed to upload resume' });
  }
});
app.post('/api/checkApplicationStatus', async (req, res) => {
  try {
    const { usn, jobid } = req.body;

    // Find the application
    const application = await AppliedCandidate.findOne({ usn, jobid });

    if (application) {
      res.json({ applied: true, status: application.status });
    } else {
      res.json({ applied: false, status: null });
    }
  } catch (error) {
    console.error('Error checking application status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//get resume templates
app.get('/api/resume-templates', async (req, res) => {
  try {
    const resumeTemplates = await Template.find();
    res.json(resumeTemplates);
  } catch (error) {
    console.error('Error fetching resume templates:', error);
    res.status(500).json({ error: 'Failed to fetch resume templates' });
  }
});
//post resume templates
app.post('/api/resume-templates', async (req, res) => {
  try {
    const { downloadUrl } = req.body;

    // Create a new instance of ResumeTemplate model
    const resumeTemplate = new Template({
      downloadUrl
    });

    // Save the resume template to the database
    const savedTemplate = await Template.save();

    res.status(201).json(savedTemplate);
  } catch (error) {
    console.error('Error posting resume template:', error);
    res.status(500).json({ error: 'Failed to post resume template' });
  }
});


app.listen(1337, () => {
  console.log('Server Started')
})
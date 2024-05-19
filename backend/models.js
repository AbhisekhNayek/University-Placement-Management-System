const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  usn: { type: String, required: true,unique: true, },
  currentSemester: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: String },
  country: { type: String },
  state: { type: String },
  city: { type: String },
  zip: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  careerObjective: { type: String },
  schoolName1: { type: String },
  education1: { type: String },
  course1: { type: String },
  address1: { type: String },
  score1: { type: String },
  yearOfCompletion1: { type: String },
  schoolName2: { type: String },
  education2: { type: String },
  course2: { type: String },
  address2: { type: String },
  score2: { type: String },
  yearOfCompletion2: { type: String },
  collegeName: { type: String },
  education3: { type: String },
  course3: { type: String },
  specialization: { type: String },
  address3: { type: String },
  score3: { type: String },
  courseDuration: { type: String },
  keySkills: { type: String },
  careerPreferences: { type: String },
});



const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
    
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  companyLogo: {
    type: String
  },
  companyDescription: {
    type: String
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
});

const ChatSchema = new mongoose.Schema({
  sender: String,
  message: String,
});



const JobPostingSchema = new mongoose.Schema({
  companyEmail: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true
  },
  JobDescription : {
    type: String,
    required: true
  },
  Package: {
    type: String,
    required: true
  },
  Qualification: {
    type: String,
    required: true
  },
  Eligibility: {
    type: String,
    required: true
  },
  Specialization: {
    type: String,
    required: true
  },
  Experience: {
    type: String,
    
  },
  
  JobLocation: {
    type: String,
    required: true
  },
  LastDate: {
    type: Date,
    required: true
  },
  DriveFrom: {
    type: Date,
    required: true
  },
  DriveTO: {
    type: Date,
    required: true
  },
  Venue: {
    type: String,
    required: true
  },
  Name:{
    type:String,
    required:true
  },
  Status:{
    type: String,
    enum: ['pending', 'accepted'],
    default: 'pending'
  }
  

});

const AppliedCandidateSchema = new mongoose.Schema({ 
  usn:{
    type:String,
    required:true,
    ref: 'Student'
  },
  jobid:{
    type:String,
    required:true,
    ref: 'Posting'
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'accepted'],
    default: 'pending'
  }

})


const CompanyInterviewSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    ref: 'Student'
  },
  companyEmail:{
    type:String,
    require:true
  },
  meetingLink:String,
  date1:{
    type:String,
    default:"-"
  },
  time1:{
    type:String,
    default:"-"
  },
  date2:{
    type:String,
    default:"-"
  },
  time2:{
    type:String,
    default:"-"
  },
  date3:{
    type:String,
    default:"-"
  },
  time3:{
    type:String,
    default:"-"
  },
  date4:{
    type:String,
    default:"-"
  },
  time4:{
    type:String,
    default:"-"
  },
  date5:{
    type:String,
    default:"-"
  },
  time5:{
    type:String,
    default:"-"
  },
});

const StudentInterview = new mongoose.Schema({
  usn:String,
  meetingLink:String,
  companyEmail:String,
  date:String,
  time:String

})

const FeedbackSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    
  },
  company:{
    type:String,
    required:true
  },
  title:{
    type:String,
  },
  content:{
    type:String
  }

});


const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const ResumeSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true
  },
  resume: {
    data: Buffer,
    contentType: {
      type: String,
      required: true,
      default: 'application/pdf'
    }
}
});

const ResumeFeedbackSchema = new mongoose.Schema({
  resumeId: {
    type: String,
    required: true,
    ref: 'Resume'
  },
  feedback: {
    type: [
      {
        company: {
          type: String,
          required: true
        },
        feedback: {
          type: String
        }
      }
    ],
    default: []
  }
});

const ResumeTemplateSchema = new mongoose.Schema({
  downloadUrl: {
    type: String,
    required: true
  }
});

// Export the models
module.exports = {
  Student: mongoose.model('student', StudentSchema),
  Company: mongoose.model('company', CompanySchema),
  Posting: mongoose.model('jobposting', JobPostingSchema),
  Resume:mongoose.model('resume',ResumeSchema),
  ResumeFeedback : mongoose.model('resumefeedback', ResumeFeedbackSchema),
  AppliedCandidate: mongoose.model('appliedCandidateSchema',AppliedCandidateSchema),
  CompanyInterview:mongoose.model('cmpanyInterview',CompanyInterviewSchema),
  StudentInterview:mongoose.model('studentIntervew',StudentInterview),
  Admin: mongoose.model('admin',AdminSchema),
  Template: mongoose.model('template',ResumeTemplateSchema),
  Feedback : mongoose.model('feedback', FeedbackSchema),
  ChatMessage:mongoose.model('ChatMessage', ChatSchema)
};

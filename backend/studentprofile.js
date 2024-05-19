const {Student} = require('./models')

const studentData = {
    firstName: 'John',
    lastName: 'Doe',
    usn: '1CD20CS001',
    skills: ['JavaScript', 'React'],
    class10: {
      schoolName: 'ABC School',
      board: 'CBSE',
      marks: '90%',
      passingYear: 2015
    },
    class12: {
      schoolName: 'XYZ School',
      board: 'CBSE',
      marks: '95%',
      passingYear: 2017
    }
  };

  const studentProfile = new Student(studentData);

  module.exports = {
    getData: function() {
      return studentProfile;
    }
  };
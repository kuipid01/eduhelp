import * as mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  // Add more fields as needed
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export { Teacher };

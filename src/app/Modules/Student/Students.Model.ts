import { Schema, model } from 'mongoose';
import { Student, StudentName } from './Student.interface';

const StudentNameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'Maximum length is 20 character'],
    minlength: [2, 'Minimum length is 2 character'],
  },
  middleName: {
    type: String,
    required: false,
    trim: true,
    maxlength: [20, 'Maximum length is 20 character'],
    minlength: [2, 'Minimum length is 2 character'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [20, 'Maximum length is 20 character'],
    minlength: [2, 'Minimum length is 2 character'],
  },
});

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true, trim: true, unique: true },
  name: { type: StudentNameSchema, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  phone: { type: String, required: true, trim: true, unique: true },
  emergencyContact: { type: String, required: true, trim: true, unique: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'Female', 'Others'],
      message: '{VALUE} is not supported',
    },
    required: true,
    trim: true,
  },
  dateOfBirth: { type: Date, required: true, trim: true },
  address: {
    state: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    street: { type: String, required: true, trim: true },
  },
  BloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: false,
    trim: true,
  },
  profileImage: { type: String, required: false, trim: true },
  isActive: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
    trim: true,
  },
});

export const StudentModel = model<Student>('Student', StudentSchema);

import { Schema, model } from 'mongoose';
import { Student, StudentName } from './Student.interface';

const StudentNameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
});

const StudentSchema = new Schema<Student>({
  name: StudentNameSchema,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: ['male', 'Female'],
  dateOfBirth: { type: Date, required: true },
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
  },
  BloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  profileImage: { type: String, required: false },
  isActive: ['Active', 'Inactive'],
});

export const StudentModel = model<Student>('Student', StudentSchema);

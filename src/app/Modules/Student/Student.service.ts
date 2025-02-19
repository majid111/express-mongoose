import { Student } from './Student.interface';
import { StudentModel } from './Students.Model';

const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentDB,
};

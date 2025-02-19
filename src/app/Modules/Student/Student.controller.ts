import { Request, Response } from 'express';
import { StudentServices } from './Student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentServices.createStudentDB(student);
    res.status(200).json({
      Success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

export const StudentController = {
  createStudent,
};

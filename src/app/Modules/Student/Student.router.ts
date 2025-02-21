import express from 'express';
import { StudentController } from './Student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);

export const StudentRoutes = router;

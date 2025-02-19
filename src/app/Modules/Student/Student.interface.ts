export type StudentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  name: StudentName;
  email: string;
  phone: string;
  gender: 'male' | 'Female';
  dateOfBirth: Date;
  address: {
    state: string;
    city: string;
    street: string;
  };
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  profileImage?: string;
  isActive: 'Active' | 'Inactive';
};

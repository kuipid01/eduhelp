export type StudentFormData = {
    name: string; // Required
    age: number; // Required, must be a positive integer
    grade: string; // Required
    address: string; // Required
    contact: string; // Required
    guardian: string; // Required
    dateOfBirth: Date; // Required
    image?: string; // Optional
  };
  

import * as yup from "yup"
export const studentSchema = yup.object({
    name: yup.string().required(),
    
    age: yup.number().positive().integer().required(),
    grade: yup.string().required(),
    address: yup.string().required(),
    contact: yup.string().required(),
    guardian: yup.string().required(),
    dateOfBirth: yup.date().required(),
    image:yup.string(),
    // You may add more fields and validations as needed
  }).required();
  
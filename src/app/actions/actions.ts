import connectDB from "../config/server"

import { Student } from "../lib/models/schoolModel";
import { revalidatePath } from 'next/cache';

export const addNewStudent = async (formData: FormData) => {
  try {
    // Connect to the database
    // await connectDB();

    // Extract form data with type safety (assuming FormData fields match Student properties)
    const name = formData.get("name")
    const age = formData.get("age")
    const address = formData.get("address")
    const contact = formData.get("contact")
    const guardian = formData.get("guardian")
    const image = formData.get("image")
    const dateOfBirth = formData.get("dateOfBirth")
    // Create a new Student instance
    const newStudent = new Student({
      name,
      age,
      address,
      contact,
      guardian,
      image,
      dateOfBirth,
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();

    // Revalidate cached data (optional)
    if (process.env.NODE_ENV === 'production') {
      await revalidatePath('/students'); // Replace with the actual path if different
    }

    // Return a success response
    return { message: 'Student added successfully', student: savedStudent }; // Include saved student data if needed
  } catch (error) {
    console.error('Error adding student:', error);

    // Return an error response with appropriate status code (e.g., 500)
    return { message: 'Failed to add student', error };
  }
};

import mongoose, { ConnectOptions } from 'mongoose';



const connectDB = async () => {
  try {
    const connectionString = 'mongodb+srv://kuipid01:kuipid01@cluster1.2zgyyng.mongodb.net/?retryWrites=true&w=majority&appName=eduHelp';
    await mongoose.connect(connectionString, {});
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    throw error; // Re-throw the error for proper handling elsewhere
  }
};

export default connectDB;

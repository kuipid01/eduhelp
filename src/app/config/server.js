import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const options = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   // Add other connection options if needed
    };
    await mongoose.connect(uri, options);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process on failure
  }
};
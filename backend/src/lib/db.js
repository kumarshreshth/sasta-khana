import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connection successful');
  } catch (error) {
    console.log('Error while connecting ', error);
  }
};

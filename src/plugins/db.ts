import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('🔥 Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to mongo db:', error);
    process.exit(1);
  }
}

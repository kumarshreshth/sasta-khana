import { config } from 'dotenv';
import { connectDb } from '../lib/db.js';
import User from '../models/user.model.js';

config();

const seedUser = [
  {
    name: 'Ankit Sharma',
    phoneNumber: '9876543210',
    email: 'ankit.sharma@example.com',
    password: 'StrongPass123',
  },
  {
    name: 'Priya Mehta',
    phoneNumber: '9123456789',
    email: 'priya.mehta@example.com',
    password: 'MySecurePwd456',
  },
  {
    name: 'Rohit Verma',
    phoneNumber: '9988776655',
    email: 'rohit.verma@example.com',
    password: 'Password@2025',
  },
  {
    name: 'Neha Kapoor',
    phoneNumber: '9090909090',
    email: 'neha.kapoor@example.com',
    password: 'NehaRules789!',
  },
  {
    name: 'Aman Yadav',
    phoneNumber: '9871122334',
    email: 'aman.yadav@example.com',
    password: 'AmanSecurePwd1',
  },
];

const seedDatabase = async () => {
  try {
    await connectDb();
    await User.insertMany(seedUser);
    console.log('Data added');
  } catch (error) {
    console.log('Error', error);
  }
};

seedDatabase();

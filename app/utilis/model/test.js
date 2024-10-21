import mongoose, { Schema, model, models } from 'mongoose';

const TestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false, // Username is optional
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
});

const Test = models.Test || model('Test', TestSchema);
export default Test;

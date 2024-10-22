import mongoose, { Schema, model, models } from 'mongoose';

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'], // Username is optional
  },
  description: {
    type: String,
    required: [true, 'Test Description is required!'],
  },
  year: {
    type: String,
    required: [true, 'Test year is required!'],
  },
  totalquestions: {
    type: String,
    required: [true, 'Test Totalquestions is required!'],
  },
  hours: {
    type: String,
    required: [true, 'Test Hours is required!'],
  },
});

const Test = models.Test || model('Test', TestSchema);
export default Test;

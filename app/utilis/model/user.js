import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false, // Username is optional
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    default: false, // Default value for verified is false
  },
  isAdmin: {
    type: Boolean,
    default: false, // Default value for isAdmin is false
  },
  phoneNumber: {
    type: String,
    required: false, // Phone number is optional
  },
  // Add other fields as necessary
});

const User = models.User || model('User', UserSchema);
export default User;

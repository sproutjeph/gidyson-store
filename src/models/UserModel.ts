import bcrypt from "bcryptjs";
import validator from "validator";
import mongoose, { Document } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  comparePassword: (userPassword: string) => boolean;
}

interface IUserModel extends IUser, Document {}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please provide a name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "please provide a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
      unique: true,
    },
  },

  password: {
    type: String,
    required: [true, " Plesae provide your password"],
    minlength: 6,
  },
  isAdmin: { type: Boolean, required: true, default: false },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = async function (userPassword: string) {
  const isMatch = await bcrypt.compare(userPassword, this.password);

  return isMatch;
};

const UserModal =
  mongoose.models.User || mongoose.model<IUserModel>("User", userSchema);

export default UserModal;

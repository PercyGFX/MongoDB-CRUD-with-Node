import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Document, Model, Schema, model } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// Define the user model interface
interface IUser extends Document {
  username: string;
  password: string;
  type: string;
  verifyPassword(password: string): Promise<boolean>;
}

// verify password method for
UserSchema.methods.verifyPassword = async function (
  password: string
): Promise<boolean> {
  try {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  } catch (err) {
    return false;
  }
};

const UserModel: Model<IUser> = model<IUser>("User", UserSchema);

export default UserModel;

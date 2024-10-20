import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "USER",
  },

  createAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

const User = models.User || model("User", userSchema);
export default User;

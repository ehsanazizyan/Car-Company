import { Schema, models, model } from "mongoose";

const ProfileSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    realState: {
      type: String,
      require: true,
    },
    constructionDate: {
      type: Date,
      require: true,
    },
    category: {
      type: String,
      enum: ["villa", "apertment", "office", "store"],
      require: true,
    },
    rules: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;

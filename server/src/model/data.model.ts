import mongoose, { Schema } from "mongoose";

export interface IData {
  id: number;
  title: string;
  desc: string;
  price: number;
}

const dataSchema = new Schema<IData>(
  {
    id: Number,
    title: {
      type: String,
      required: true,
    },
    desc: String,
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const dataModel = mongoose.model("data", dataSchema);

export default dataModel;

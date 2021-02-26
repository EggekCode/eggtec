import { Schema, model } from 'mongoose';

const Projects = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tecnology: [
      {
        type: String,
        required: true,
      }
    ],
    thumbnail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Projects', Projects);

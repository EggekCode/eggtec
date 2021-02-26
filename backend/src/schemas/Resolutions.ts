import { Schema, model } from 'mongoose';

const Resolutions = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Projects',
    },
  },
  {
    timestamps: true,
  },
);

export default model('Resolutions', Resolutions);

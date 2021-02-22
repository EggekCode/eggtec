import { Schema, model } from 'mongoose';

const Users = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    job: {
      name: {
        type: String,
        required: true,
      },
    },
    techs: [
      {
        name: String,
      },
    ],
    favorites: {
      project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects',
      },
      finished: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default model('Users', Users);

import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  job: string;
  techs: string[];
}

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
      type: String,
      required: true,
    },
    techs: [
      {
        name: {
          type: String,
        },
      },
    ],
    favorites: [
      {
        project: {
          type: Schema.Types.ObjectId,
          ref: 'Projects',
        },
        finished: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model<IUser>('Users', Users);

import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const person=mongoose.model('Person',personSchema)

export {person}

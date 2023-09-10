const mongoose = require("mongoose");

const questionSchema = new mognoose.Schema({
  questionText: {
    type: String,
    trim: true,
    required: true,
  },
  options: [
    {
      optionText: String,
    },
  ],
});

const formSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      default: "",
      maxLength: 300,
    },
    questions: [questionSchema],
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

module.exports = { Form };

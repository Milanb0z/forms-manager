const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    trim: true,
    required: true,
  },
  options: [
    {
      optionText: { type: String, trim: true, required: true },
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

// [{questionText: Favorite Color?, options: [{optionText: "red"}, {optionText: "blue"}, {optionText: "yellow"}]}]

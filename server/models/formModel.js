const mongoose = require("mongoose");

const QUESTION_TEXT_TYPE = ["SHORT", "PARAGRAPH"];
const QUESTION_OPTION_TYPE = ["MULTIPLE", "RADIO"];
const QUESTION_UPLOAD_TYPE = ["UPLOAD"];

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    enum: [...QUESTION_OPTION_TYPE, ...QUESTION_TEXT_TYPE],
    required: true,
  },
  answer: {
    type: String,
    required: isValid(QUESTION_TEXT_TYPE),
  },
  options: {
    type: [String],
    required: isValid(QUESTION_OPTION_TYPE),
  },
});

function isValid(allowedTypes) {
  if (allowedTypes.indexOf(this.type) > -1) {
    return true;
  }
  return false;
}

const formSchema = new mongoose.Schema(
  {
    customId: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isOpen: {
      type: Boolean,
      default: true,
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

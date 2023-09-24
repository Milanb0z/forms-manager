const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },

    response: [
      {
        questionId: String,
        optionValue: String,
      },
    ],
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", responseSchema);

module.exports = { Response };

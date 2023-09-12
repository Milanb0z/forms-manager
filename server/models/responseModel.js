var mongoose = require("mongoose");

var responseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },

    response: [
      {
        questionId: String,
        optionId: String,
      },
    ],
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;

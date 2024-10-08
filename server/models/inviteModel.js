const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema(
  {
    isSolved: {
      type: Boolean,
      default: false,
    },
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },
    response: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Response",
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invite = mongoose.model("Invite", inviteSchema);

module.exports = { Invite };

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const questionTypes = [
  {
    label: "Multiple Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.MULTIPLE,
    },
  },

  {
    label: "Single Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.RADIO,
    },
  },

  {
    label: "Short Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.SHORT,
    },
  },

  {
    label: "Paragraph Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.PARAGRAPH,
    },
  },

  {
    label: "Upload FIle Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.UPLOAD,
    },
  },
];

export { QUESTION_TYPES, questionTypes };

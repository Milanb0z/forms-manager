const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const getAnsSchema = (questions) => {
  console.log([...questions]);

  let questionsAns = questions.map((que) => {
    let data = "";

    switch (que.type) {
      case QUESTION_TYPES.MULTIPLE:
      case QUESTION_TYPES.RADIO:
        data = [];
        break;

      case QUESTION_TYPES.SHORT:
      case QUESTION_TYPES.PARAGRAPH:
        data = "";
        break;

      default:
        data = "";
        break;
    }
    return {
      questionId: que._id,
      data,
    };
  });

  console.log(questionsAns);

  return questionsAns;
};

export default getAnsSchema;

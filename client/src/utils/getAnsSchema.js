import QUESTION_TYPES from "./questionTypes";

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

const getResponsesSorted = (forms) => {
  let sortedList = [];
  let chartData = {};

  //Joining Responses
  forms.forEach(({ responses, name }) => {
    if (responses.length > 0) {
      responses.forEach((r) =>
        sortedList.push({ createdAt: r.createdAt, name })
      );
    }
  });

  //Sorting by date
  sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return sortedList;
};

const getChartData = (forms) => {
  console.log("caht");
  const sortedList = getResponsesSorted(forms);

  const groups = sortedList.reduce((groups, response) => {
    const date = response.createdAt.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(response);
    return groups;
  }, {});

  // Edit: to add it in the array format instead

  console.log({ groups });
};

export { getAnsSchema, getResponsesSorted, getChartData };

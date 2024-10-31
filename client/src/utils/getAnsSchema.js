import { compileString } from "sass";
import QUESTION_TYPES from "./questionTypes";

const getAnsSchema = (questions) => {
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

  return questionsAns;
};

const getResponsesSorted = (forms) => {
  let sortedList = [];

  //Joining Responses
  forms.forEach(({ responses, name }) => {
    if (responses.length > 0) {
      responses.forEach((r) =>
        sortedList.push({ createdAt: r.createdAt, name, id: r._id })
      );
    }
  });

  //Sorting by date
  sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return sortedList;
};

const getChartData = (forms) => {
  let staticData = {};
  forms.forEach(({ name }) => {
    let newObj = { ...staticData, [name.split(" ").join("_")]: 0 };
    staticData = { ...newObj };
  });

  // Builded Schema
  const chartData = [];

  for (let daysAgo = 0; daysAgo <= 6; daysAgo++) {
    const today = new Date();
    chartData.push({
      name: new Date(today.setDate(today.getDate() - daysAgo)).toDateString(),
      ...staticData,
    });
  }

  let responses = getResponsesSorted(forms);

  chartData.forEach((item, index) => {
    responses.forEach((res) => {
      let selector = res.name.split(" ").join("_");
      if (item.name === new Date(res.createdAt).toDateString()) {
        chartData[index][selector] += 1;
      }
    });
  });
  return { chartData, bars: Object.keys(staticData) };
};

export { getAnsSchema, getResponsesSorted, getChartData };

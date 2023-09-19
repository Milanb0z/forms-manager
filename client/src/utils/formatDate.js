import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const FromatedDate = (timeCreated) => {
  return dayjs().to(dayjs(timeCreated));
};

export default FromatedDate;

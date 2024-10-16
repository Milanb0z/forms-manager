import { Link } from "react-router-dom";

import {
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import { Card, Button } from "@ui";

import classes from "./MainDashboard.module.scss";
import { useGetProfileQuery } from "@store/authSlice";

import { getResponsesSorted, getChartData } from "@utils/getAnsSchema";
import FromatedDate from "@utils/formatDate";
import CHART_COLORS from "@utils/chartColors";

const SurveysCard = ({ forms }) => {
  return (
    <Card>
      <h5>Created Surveys</h5>

      {forms?.length > 0 ? (
        <div className={classes.list}>
          {forms.map((form) => (
            <Link key={form._id} to={`/dashboard/invite/${form._id}`}>
              <div className={classes.list_item}>
                <h4>{form.name}</h4>
                <span>{form.isOpen ? "Active" : "Closed"}</span>
              </div>
            </Link>
          ))}
          <div className={classes.new}>
            <h4>Create New Form</h4>
          </div>
        </div>
      ) : (
        <div className={classes.noForm}>
          <p>No Forms found</p>
          <Link to="/dashboard/form/new">
            <Button>Create Form</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

const ResultsCard = ({ forms }) => {
  const transformedRes = getResponsesSorted(forms);
  console.log(transformedRes);
  return (
    <Card>
      <h5>Latest Results</h5>

      {transformedRes?.length > 0 ? (
        <div className={classes.list}>
          {transformedRes.map((rsp) => (
            <Link key={rsp._id} to={`/dashboard/results/${rsp.id}`}>
              <div className={classes.list_submit}>
                <h4>{rsp.name}</h4>
                <p>
                  Submited: <span>{FromatedDate(rsp.createdAt)}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={classes.noForm}>
          <p>No Forms found</p>
          <Link to="/dashboard/form/new">
            <Button>Create Form</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

const SolvedChart = ({ formsData }) => {
  let transtformedChart = getChartData(formsData);
  console.log(transtformedChart);
  return (
    <Card className={classes.charts}>
      <h3>Forms Activitiy (Last 7 Days)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={transtformedChart.chartData}>
          <CartesianGrid strokeDasharray="5 5 2" />

          <Tooltip />
          <XAxis reversed hide dataKey="name" />
          <Legend
            className={classes.legend}
            formatter={(value) => value.split("_").join(" ")}
          />
          {transtformedChart.bars.map((bar, index) => (
            <Bar
              key={bar}
              dataKey={bar}
              fill={CHART_COLORS[index % 5].stroke}
              activeBar={<Rectangle {...CHART_COLORS[index % 5]} />}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

const MainDashboard = () => {
  const { data: user } = useGetProfileQuery();

  return (
    <div className={classes.grid}>
      <SolvedChart formsData={user.createdForms} />
      <ResultsCard forms={user.createdForms} />
      <Card className={classes.invites}>
        <h3>Lorem, ipsum.</h3>
      </Card>

      <SurveysCard forms={user.createdForms} />
    </div>
  );
};

export default MainDashboard;

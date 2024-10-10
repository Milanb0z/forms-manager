import { Link } from "react-router-dom";

import {
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Card, Button } from "@ui";

import classes from "./MainDashboard.module.scss";
import { useGetProfileQuery } from "@store/authSlice";
import { getResponsesSorted, getChartData } from "@utils/getAnsSchema";
import FromatedDate from "@utils/formatDate";

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

const data = [
  {
    name: "2.3",
    uv: 6,
    uy: 6,
    pv: 2,
    amt: 1,
  },
  {
    name: "1.2",
    uv: 3,
    pv: 1,
    amt: 2,
  },
  {
    name: "1.2",
    uv: 2,
    pv: 2,
    amt: 4,
  },
  {
    name: "1.2",
    uv: 2,
    pv: 3,
    amt: 2,
  },
  {
    name: "1.2",
    uv: 1,
    pv: 2,
    amt: 1,
  },
  {
    name: "1.2",
    uv: 2,
    pv: 3,
    amt: 5,
  },
  {
    name: "1.2",
    uv: 2,
    pv: 4,
    amt: 4,
  },
];

const ResultsCard = ({ forms }) => {
  const transformedRes = getResponsesSorted(forms);
  console.log(transformedRes);
  return (
    <Card>
      <h5>Latest Results</h5>

      {transformedRes?.length > 0 ? (
        <div className={classes.list}>
          {transformedRes.map((rsp) => (
            <Link key={rsp._id} to={`/dashboard/form/edit/${rsp._id}`}>
              <div className={classes.list_item}>
                <h4>{FromatedDate(rsp.createdAt)}</h4>
                <p>{rsp.name}</p>
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

const SolvedChart = () => {
  return (
    <Card className={classes.charts}>
      <h3>Forms Activitiy</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="5 5 2" />

          <Tooltip
            labelClassName={classes.label}
            wrapperClassName={classes.tooltip}
          />
          <Legend />
          <Bar
            dataKey="amt"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

const MainDashboard = () => {
  const { data: user } = useGetProfileQuery();

  console.log(getResponsesSorted(user.createdForms));
  console.log(getChartData(user.createdForms));

  return (
    <div className={classes.grid}>
      <SolvedChart formsData={user.createdForms} />
      <ResultsCard forms={user.createdForms} />
      <Card />
      <SurveysCard forms={user.createdForms} />
    </div>
  );
};

export default MainDashboard;

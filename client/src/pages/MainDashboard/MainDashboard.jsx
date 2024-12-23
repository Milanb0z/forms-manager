import { Link } from "react-router-dom";

import {
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  ResponsiveContainer,
  XAxis,
  Cell,
  Pie,
} from "recharts";

import { Card, Button } from "@ui";

import classes from "./MainDashboard.module.scss";
import { useGetProfileQuery } from "@store/authSlice";

import { getResponsesSorted, getChartData } from "@utils/getAnsSchema";
import FromatedDate from "@utils/formatDate";
import CHART_COLORS from "@utils/chartColors";

const SurveysCard = ({ forms }) => {
  return (
    <Card className={classes.surveys}>
      <h3>Created Surveys</h3>

      {forms?.length > 0 ? (
        <div className={classes.list}>
          {forms.map((form) => (
            <Link key={form._id} to={`/dashboard/invite/${form._id}`}>
              <div className={classes.list_item}>
                <h4>{form.name}</h4>
                <p
                  style={{
                    color: form.isOpen
                      ? "var(--color-green)"
                      : "var(--color-red)",
                  }}
                >
                  {form.isOpen ? "Active" : "Closed"}
                </p>
              </div>
            </Link>
          ))}
          <Link to="/dashboard/form/new" className={classes.new}>
            <h4>Create New Form</h4>
          </Link>
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

  return (
    <Card className={classes.results}>
      <h3>Latest Results</h3>

      {transformedRes?.length > 0 ? (
        <div className={classes.list}>
          {transformedRes.map((rsp, index) => (
            <Link key={index} to={`/dashboard/results/${rsp.id}`}>
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

  return (
    <Card className={classes.charts}>
      <h3>Forms Activitiy (Last 7 Days)</h3>
      <ResponsiveContainer
        className={classes.charts_content}
        width="100%"
        height="100%"
      >
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

const inviteData = [
  { name: "Group A", value: 400, fill: "#b8fd8e" },
  { name: "Group B", value: 300, fill: "#343434" },
];

const InviteStatic = () => {
  return (
    <Card className={classes.invites}>
      <h3>Invites</h3>
      <div className={classes.invites_content}>
        <ResponsiveContainer>
          <PieChart className={classes.invites_chart}>
            <Pie
              cy="100%"
              data={inviteData}
              innerRadius={60}
              outerRadius={120}
              startAngle={180}
              endAngle={0}
              fill="red"
              dataKey="value"
            >
              {inviteData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={classes.invites_info}>
          <div className={classes.invites_info_card}>
            <h2>12</h2>
            <p>Answered:</p>
          </div>

          <div className={classes.invites_info_card}>
            <h2>12</h2>
            <p>Total Invites:</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const MainDashboard = () => {
  const { data: user } = useGetProfileQuery();

  return (
    <div className={classes.grid}>
      <SolvedChart formsData={user.createdForms} />
      <ResultsCard forms={user.createdForms} />
      <InviteStatic />
      <Card className={classes.dummy}>
        <h3>sdsd</h3>
      </Card>
      <SurveysCard forms={user.createdForms} />
    </div>
  );
};

export default MainDashboard;

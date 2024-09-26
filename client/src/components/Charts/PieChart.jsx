import { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import classes from "./PieChart.module.scss";

const CustomPieChart = ({ data }) => {
  return (
    <ResponsiveContainer aspect={1} className={classes.container}>
      <PieChart className={classes.pie}>
        <Pie
          className={classes.item}
          data={data}
          innerRadius="40%"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              className={classes.cell}
              key={`cell-${index}`}
              fill={entry.color}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default memo(CustomPieChart);

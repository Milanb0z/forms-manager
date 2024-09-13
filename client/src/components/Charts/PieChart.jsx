import React, { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import classes from "./PieChart.module.scss";

const CustomPieChart = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer>
      <PieChart className={classes.pie} width={205} height={205}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          startAngle={180}
          endAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default memo(CustomPieChart);

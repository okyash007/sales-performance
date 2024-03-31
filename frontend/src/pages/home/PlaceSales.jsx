import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PlaceSales = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-[#ffffff1a] flex-grow p-5 rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="totalAmountSpent"
            nameKey="_id"
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlaceSales;

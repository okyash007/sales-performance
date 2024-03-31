import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PlaceSales = ({ data }) => {
  return (
    <div className="bg-[#ffffff1a] p-5 flex-grow rounded-lg min-w-[20rem]">
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

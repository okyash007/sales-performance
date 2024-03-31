import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CategorySales = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await makeGetRequest(
      `${backendUrl}/order/categoryWise?category=Electronics`
    );
    const combineData = res.xAxisData.map((label, index) => ({
      name: label,
      value: res.yAxisData[0][index],
    }));
    setData(combineData);
  }

  useEffect(() => {
    getData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#ffffff1a] p-5 rounded-lg w-1/2">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySales;

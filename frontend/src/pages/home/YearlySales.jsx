import React, { useEffect, useState } from "react";
import CardWrapper from "../../components/CardWrapper";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const YearlySales = () => {
  const [data, setData] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  async function getOrdersYearly() {
    const res = await makeGetRequest(`${backendUrl}/order/yearWise?year=2023`);
    const combineData = res.xAxisData.map((label, index) => ({
      name: label,
      value: res.yAxisData[0][index],
    }));
    setData(combineData);
  }

  useEffect(() => {
    getOrdersYearly();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#ffffff1a] rounded-lg p-5">
      <div className="flex justify-between">
        <h1>Yearly Sales</h1>
        <div className="relative">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            2024
          </button>
          {dropDown && (
            <div className="absolute right-0 bg-[#ffffff5a] rounded-lg">
              <p className="p-2">2024</p>
              <p className="p-2">2023</p>
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="value" stroke="#ffffff" />
          <CartesianGrid stroke="#ffffff1a" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlySales;

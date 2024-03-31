import React, { useEffect, useState } from "react";
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
import DropDown from "../../components/DropDown";

const YearlySales = ({ uniqueYears }) => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("Yearly");

  async function getOrdersYearly() {
    const res = await makeGetRequest(
      `${backendUrl}/order/yearWise?year=${filter}`
    );
    const combineData = res.xAxisData.map((label, index) => ({
      name: label,
      value: res.yAxisData[0][index],
    }));
    setData(combineData);
  }

  useEffect(() => {
    getOrdersYearly();
  }, [filter]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#ffffff1a] rounded-lg p-5">
      <div className="flex justify-between px-4 pb-3">
        <h1 className="text-2xl">Yearly Sales</h1>
        <DropDown
          button={
            <button className="bg-[#ffffff2a] px-3 py-2 rounded-lg hover:ring-white hover:ring-2 transition-all">
              {filter}
            </button>
          }
        >
          <div className="absolute right-0 mt-2 bg-[#ffffff2a] py-2 z-10 rounded-md backdrop-blur-sm">
            <p
              className="hover:bg-slate-500 px-3 cursor-pointer py-1"
              onClick={() => {
                setFilter("Yearly");
              }}
            >
              Yearly
            </p>
            {uniqueYears.map((m) => (
              <p
                className="hover:bg-slate-500 py-1 px-3 cursor-pointer leading-5"
                key={m._id}
                onClick={() => {
                  setFilter(m._id);
                }}
              >
                {m._id}
              </p>
            ))}
          </div>
        </DropDown>
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

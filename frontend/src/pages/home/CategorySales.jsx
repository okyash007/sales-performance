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
import DropDown from "../../components/DropDown";

const CategorySales = ({ uniqueCategories }) => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("Electronics");

  async function getData() {
    const res = await makeGetRequest(
      `${backendUrl}/order/categoryWise?category=${encodeURIComponent(filter)}`
    );
    const combineData = res.xAxisData.map((label, index) => ({
      name: label,
      value: res.yAxisData[0][index],
    }));
    setData(combineData);
  }

  useEffect(() => {
    getData();
  }, [filter]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#ffffff1a] flex-grow p-5 box-border rounded-lg w-1/2 max-md:w-full">
      <div className="flex justify-between pl-4 pr-1 pb-3">
        <h1 className="text-2xl">Category Sales</h1>
        <DropDown
          button={
            <button className="bg-[#ffffff2a] px-3 py-2 rounded-lg hover:ring-white hover:ring-2 transition-all">
              {filter}
            </button>
          }
        >
          <div className="absolute right-0 mt-2 bg-[#ffffff2a] py-2 z-10 rounded-md backdrop-blur-sm w-max">
            {uniqueCategories.map((m) => (
              <p
                className="hover:bg-slate-500 py-1 px-3 cursor-pointer leading-5"
                key={m}
                onClick={() => {
                  setFilter(m);
                }}
              >
                {m}
              </p>
            ))}
          </div>
        </DropDown>
      </div>
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

import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";
import { calculatePercentageChange } from "../../utils/helper";

const SalesCompare = () => {
  const [mothSales, setMonthSales] = useState(null);
  const presentData = new Date();

  async function getOrdersYearly() {
    const res = await makeGetRequest(`${backendUrl}/order/yearWise?year=2024`);
    setMonthSales(res.yAxisData[0]);
  }

  useEffect(() => {
    getOrdersYearly();
  }, []);

  if (mothSales === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 bg-[#ffffff1a] rounded-lg">
      <h1>Monthly Sales</h1>
      <div className="flex items-end gap-2">
        <p className="text-5xl">₹ {mothSales[presentData.getMonth()]}</p>
        <p>
          {calculatePercentageChange(
            mothSales[presentData.getMonth() - 1],
            mothSales[presentData.getMonth()]
          )}
        </p>
      </div>
    </div>
  );
};

export default SalesCompare;

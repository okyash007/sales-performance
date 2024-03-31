import React, { useEffect, useState } from "react";
import YearlySales from "./YearlySales";
import CategorySales from "./CategorySales";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";
import PlaceSales from "./PlaceSales";
import StatsCard from "../../components/StatsCard";
import SalesCompare from "./SalesCompare";

const Home = () => {
  const [allData, setAllData] = useState(null);

  console.log(allData);

  async function getData() {
    const res = await makeGetRequest(`${backendUrl}/order`);
    setAllData(res);
  }

  useEffect(() => {
    getData();
  }, []);

  if (allData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="px-2 pt-16 flex flex-wrap gap-2">
        {allData.stats.map((m) => (
          <StatsCard key={m.label} info={m} />
        ))}
        <SalesCompare />
      </div>
      <div className="flex gap-2 px-2 pt-2 max-md:flex-col">
        <PlaceSales data={allData.stateWise} />
        <CategorySales uniqueCategories={allData.uniqueCategories} />
      </div>
      <div className="p-2">
        <YearlySales uniqueYears={allData.uniqueYears} />
      </div>
    </>
  );
};

export default Home;

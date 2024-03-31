import React, { useEffect, useState } from "react";
import YearlySales from "./YearlySales";
import CategorySales from "./CategorySales";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";
import PlaceSales from "./PlaceSales";

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
      <div className="flex gap-2 px-2">
        <PlaceSales data={allData.stateWise} />

        <CategorySales />
      </div>
      <div className="p-2">
        <YearlySales />
      </div>
    </>
  );
};

export default Home;

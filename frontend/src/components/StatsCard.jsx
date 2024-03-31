import React from "react";

const StatsCard = ({ info }) => {
  return (
    <div className="bg-[#ffffff1a] w-max p-4 rounded-lg">
      <p>{info.label}</p>
      <p className="text-5xl">{info.value}</p>
    </div>
  );
};

export default StatsCard;

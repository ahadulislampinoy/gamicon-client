import React from "react";

const LargeSpinner = ({ height = "h-0" }) => {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <div className="w-14 h-14 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
    </div>
  );
};

export default LargeSpinner;

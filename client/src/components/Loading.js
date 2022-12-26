import React from "react";
import CustomSpinner from "./CustomSpinner";
const Loading = () => {
  return (
    <h2 className="text-center">
      読み込み中
      <CustomSpinner animation="border" variant="primary" />
    </h2>
  );
};

export default Loading;

import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      {data.map((i) => (
        <h1>{i}</h1>
      ))}
    </div>
  );
};

export default Table;

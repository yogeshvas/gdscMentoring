import React from "react";

const Student = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <h1>{i}</h1>
      ))}
    </>
  );
};

export default Student;

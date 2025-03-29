import React,{memo} from "react";

const Child = ({count}) => {
  console.log("Child component called");
  return <div>Child component....{count}</div>;
};

export default memo(Child);

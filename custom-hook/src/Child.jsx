import React , {memo} from "react";

const Child = ({count1}) => {
  console.log("Child calling......");
  return <div>Child calling......{count1}</div>;
};

export default memo(Child);

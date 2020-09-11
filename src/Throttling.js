import React from "react";

const Throttling = () => {
  const throttling = (fn, delay) => {
    //console.log("click");
    let flag = true;
    return () => {
      if (!flag) return;
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay);
    };
  };
  const myFunc = () => {
    console.log("Clicked!!");
  };
  return (
    <div>
      <button onClick={(e) => throttling(myFunc, 5000)()}>Click</button>
    </div>
  );
};

export default Throttling;

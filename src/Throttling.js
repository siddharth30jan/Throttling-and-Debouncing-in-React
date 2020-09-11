import React, { useEffect, useState } from "react";

const Throttling = ({}) => {
  const [magic, fmagic] = useState();
  const throttling = (fn, delay) => {
    console.log("click");
    let flag = true;
    return (...args) => {
      if (flag === false) return;
      flag = false;
      fn(args);
      setTimeout(() => {
        flag = true;
      }, delay);
    };
  };
  const myFunc = (X, Y) => {
    console.log("Clicked!!", X, Y);
  };
  useEffect(() => {
    let magicX = throttling(myFunc, 5000);
    fmagic({ X: magicX });
  }, []);

  return (
    <div>
      <button onClick={(e) => magic.X("SId", 45)}>Click</button>
    </div>
  );
};

export default Throttling;

import React, { useEffect, useState } from "react";

const Throttling = ({}) => {
  const [magic, fmagic] = useState();
  const throttling = (fn, delay) => {
    console.log("click");
    let flag = true;
    return () => {
      if (flag === false) return;
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
  useEffect(() => {
    let magicX = throttling(myFunc, 5000);
    fmagic({ X: magicX });
  }, []);

  return (
    <div>
      <button onClick={(e) => magic.X()}>Click</button>
    </div>
  );
};

export default Throttling;

import React from "react";

const Debouncing = () => {
  const debounce = (fn, delay) => {
    //console.log("click");
    let id;
    return () => {
      if (id) clearTimeout(id);
      id = setTimeout(() => {
        fn();
      }, delay);
    };
  };
  const myFunc = () => {
    console.log("Clicked!!");
  };
  return (
    <div>
      <button onClick={(e) => debounce(myFunc, 5000)()}>Click</button>
    </div>
  );
};

export default Debouncing;

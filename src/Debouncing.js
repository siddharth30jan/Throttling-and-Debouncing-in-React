import React from "react";
const { useState, useEffect } = React;
const Debouncing = () => {
  const [magic, fmagic] = useState();
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
  useEffect(() => {
    let magicX = debounce(myFunc, 5000);
    fmagic({ X: magicX });
  }, []);
  return (
    <div>
      <button onClick={(e) => magic.X()}>Click</button>
    </div>
  );
};

export default Debouncing;

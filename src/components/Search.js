import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Images from "./Images";

const Search = () => {
  const [text, setText] = useState("");
  const [no, setNo] = useState(10);
  const [dat, setDat] = useState([]);
  console.log(text);

  useEffect(() => {
    if (text) {
      fetch(
        `https://pixabay.com/api/?key=14389422-1516ddb52972800199d983bec&q=${text}&per_page=${no}&pretty=true`
      )
        .then(res => res.json())
        .then(data => {
          setDat(data.hits);
          console.log(dat);
        });
    } else setDat([]);
  }, [text, no]);
  return (
    <div>
      <TextField
        id="standard-basic"
        label="GO FIND YOUR IMAGE"
        style={{ marginTop: 20 }}
        onChange={e => setText(e.target.value)}
      />
      <br />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={no}
        onChange={e => setNo(e.target.value)}
        style={{ marginTop: 20 }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <br />
      <Images data={dat} />
    </div>
  );
};

export default Search;

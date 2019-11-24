import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const Images = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [curImage, setCurImage] = useState({});
  console.log("Image running");
  return (
    <div>
      <GridList cellHeight={200} col={3}>
        {data.map(title => (
          <GridListTile key={title.id}>
            <img src={title.largeImageURL} alt="IMG" />
            <GridListTileBar
              title={title.tags}
              subtitle={<span>by: {title.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about img`}
                  onClick={e => {
                    setOpen(true);
                    setCurImage(title);
                  }}
                >
                  <p>CLICK</p>
                </IconButton>
              }
            />
          </GridListTile>
        ))}

        <Dialog
          aria-labelledby="INFO"
          open={open}
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={curImage.largeImageURL}
            alt="IMG"
            style={{ width: "100%",height: "100%" }}
          />

          <Button color="primary" onClick={e => setOpen(false)}>
            CLOSE
          </Button>
        </Dialog>
      </GridList>
    </div>
  );
};
export default Images;

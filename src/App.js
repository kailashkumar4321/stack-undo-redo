import React from "react";
import Actions from "./Actions";
import Stack from "./Stack";
import { makeStyles } from "@mui/styles";
import StackView from "./StackView";
import { Typography } from "@mui/material";
const undo = new Stack();
const redo = new Stack();

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#d5f3f5',
    width: "100vw",
    height: '100vh',
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stackView: {
    display: "flex",
    justifyContent: "space-around",
    width: "1000px",
    marginTop: "10vh"
  },
  stacks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  current: {
    backgroundColor: '#90d2d6',
    minWidth: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px"
  },
  headings: {
    marginBottom: "3vh !important"
  }
}))
function App() {
  const classes = useStyles()
  const [current, setCurrent] = React.useState('');
  return (
    <div className={classes.root}>
      <Actions current={current} setCurrent={setCurrent} undo={undo} redo={redo} />
      <div className={classes.stackView}>
        <span className={classes.stacks}>
          <Typography className={classes.headings}>Undo Stack</Typography>
          <StackView content={undo.reverseContent()} />
        </span>
        <span className={classes.stacks}>
          <Typography className={classes.headings}>Current State</Typography>
          <Typography className={classes.current}>{current}</Typography>
        </span>
        <span className={classes.stacks}>
          <Typography className={classes.headings}>Redo Stack</Typography>
          <StackView content={redo.reverseContent()} />
        </span>
      </div>
    </div>
  );
}

export default App;

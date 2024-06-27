import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    actionMenu: {
        backgroundColor: '#90d2d6',
        marginTop: "5vh",
        display: 'flex',
        alignItems: 'center',
        borderRadius: "10px",
        width: "700px",
        justifyContent: "space-between"
    },
    input: {
        display: "flex",
        alignItems: "center"
    },
    textField: {
        width: "40px",
        height: "40px"
    }
}))

function Actions(props) {

    const classes = useStyles();
    const { current, setCurrent, undo, redo } = props;
    const [input, setInput] = React.useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleUndo = () => {
        redo.push(current)
        setCurrent(undo.pop())
    }

    const handleRedo = () => {
        undo.push(current)
        setCurrent(redo.pop())
    }

    const handleWrite = () => {
        undo.push(current)
        if (redo.size()) {
            if (redo.peek() === (current + input)) {
                redo.pop()
            } else {
                redo.clear()
            }
        }
        setCurrent(current + input)
        setInput('')
    }

    return (
        <div className={classes.actionMenu}>
            <Button disabled={!undo.size()} onClick={handleUndo}>Undo</Button>
            <span className={classes.input}>
                <TextField className={classes.textField} value={input} onChange={handleInput} maxLength={1} size="small" InputProps={{ inputProps: { maxLength: 1 } }} />
                <Button disabled={!input.length} onClick={handleWrite}>Write</Button>
            </span>
            <Button disabled={!redo.size()} onClick={handleRedo}>Redo</Button>
        </div>
    )
}

export default Actions;
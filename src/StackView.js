import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    cell: {
        border: '3px solid #90d2d6 !important',
        borderTop: '0px !important',
        width: "40px",
        height: "40px",
        display: "flex !important",
        alignItems: "center",
        justifyContent: "space-around"
    }
}))

function StackView(props) {
    const classes = useStyles();
    const { content = [] } = props;

    return (
        <div>
            <Table>
                <TableBody>
                    {
                        content.map(item => {
                            return (
                                <TableRow>
                                    <TableCell className={classes.cell}>{item}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default StackView
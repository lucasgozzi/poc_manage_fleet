import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import React from 'react';

const useStyles = makeStyles(theme => ({
    clickable: {
        cursor: 'pointer',
    }
}));

export default function MyTable(props) {
    const { header, data, rowClick } = props;
    const classes = useStyles();

    function renderCel(id, text) {
        return (
            <TableCell key={id}>
                {text}
            </TableCell>)
    }
    function resolveVariable(row, key) {
        const headerActual = header[key];
        let obj = headerActual.var;
        if (headerActual.delete) {
            obj = (<Button onClick={(e) => headerActual.onClick(e, row.id)}> <DeleteForeverSharpIcon /></Button>);
        } else {
            const array = obj.split('.');
            obj = row;
            array.forEach(element => {
                obj = obj[element];
            });
        }
        return obj;
    }

    function renderRowCels(row, index1) {
        let arr = [];
        Object.keys(header).map((key, index2) => {
            arr.push(renderCel(`cel${index1}${index2}`, resolveVariable(row, key)));
            return null;
        })
        return arr;
    }
    function renderRows() {
        const arrRows = [];
        data.map((row, index1) => {
            var component = <TableRow
                className={classes.clickable}
                onClick={() => rowClick.event(row[rowClick.value])}
                key={`row${index1}`}>{renderRowCels(row, index1)}</TableRow>;
            arrRows.push(component);
            return null;
        })
        return arrRows;
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {header.map((header, index) => (
                            <TableCell key={index} {...header.props}>{header.title}</TableCell>)
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderRows()}

                </TableBody>
            </Table>
        </TableContainer>
    );
}

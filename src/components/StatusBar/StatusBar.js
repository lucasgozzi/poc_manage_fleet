import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export default function StatusBar(props) {
    const { type, msg, propShow, closeRef } = props;
    if (propShow) {
        setTimeout(() => {
            closeRef();
        }, 4000);
    }
    return (
        <Snackbar open={propShow} >
            <MuiAlert elevation={6} variant="filled" severity={type}>
                {type === 'success' ? 'Operação realizada com sucesso!' : msg}
            </MuiAlert>
        </Snackbar>
    )
}

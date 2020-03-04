import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, TextField, FormHelperText } from '@material-ui/core';


export default function ConfirmationDialog(props) {
    const [open, setOpen] = React.useState(true);
    const [description, setDescription] = React.useState("");
    const { okFunction, cancelFunction, hasDescription, info } = props;

    const handleClose = () => {
        setOpen(false);
        cancelFunction();
    };

    const handleOk = () => {
        if (hasDescription)
            okFunction(description);
        else
            okFunction();
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{info}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        {hasDescription &&
                            <>
                                <FormControl fullWidth>
                                    <TextField variant="outlined" label="Descrição" fullWidth={true} id="name"
                                        aria-describedby="name-hint"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} />
                                    <FormHelperText id="name-hint">* Opcional - Descrição da reserva</FormHelperText>
                                </FormControl>
                            </>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOk} color="primary" autoFocus>
                        Ok
                    </Button>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

import React from 'react'
import { Grid, Button } from '@material-ui/core';
import './styles.css'

export default function FormActionButtons(props) {
    const { handleBack, handleNext } = props;
    return (
        <Grid item xs={12}>
            <div className="actions">
                <Button onClick={handleBack}
                    variant="contained"
                    color="secondary"> Cancelar</Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                >
                    Salvar
                </Button>
            </div>
        </Grid>
    )
}

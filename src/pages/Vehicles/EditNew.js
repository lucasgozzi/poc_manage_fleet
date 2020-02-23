import { Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FormActionButtons from '../../components/FormActionButtons/FormActionButtons';

export default function EditNewBranch(props) {
    let { id } = useParams();
    const { showStatus } = props;
    const history = useHistory();

    useEffect(() => {
    }, [])

    const back = () => {
        showStatus('error', 'msg generica para demonstracao');
        // history.push('/branches');
    };
    const save = () => {
        showStatus('success');
        history.push('/vehicles');
    };


    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3">
                Veículos
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Descrição" fullWidth={true} id="description"
                            aria-describedby="description-hint" />
                        <FormHelperText id="description-hint">Descrição do Veículo</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Placa" fullWidth={true} id="plate"
                            aria-describedby="plate-hint" />
                        <FormHelperText id="plate-hint">Placa do Veículo</FormHelperText>
                    </FormControl>
                </Grid>
                <FormActionButtons
                    handleNext={save}
                    handleBack={back} />
            </Grid>
        </Container>
    )
}

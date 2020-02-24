import { Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import FormActionButtons from '../../components/FormActionButtons/FormActionButtons';
import { Creators as VehicleActions } from "../../store/ducks/vehicles";

export default function EditNewBranch(props) {
    let { id } = useParams();
    const { showStatus } = props;
    const [description, setDescription] = useState('');
    const [plate, setPlate] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
    }, [])

    const back = () => {
        showStatus('error', 'msg generica para demonstracao');
        // history.push('/branches');
    };
    const save = () => {
        if (id) {
            dispatch(VehicleActions.updateVehicle(id, { id, description, plate }));
        } else {
            dispatch(VehicleActions.addVehicle(5, { id, description, plate }));
        }
        setDescription('');
        setPlate('');
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
                            aria-describedby="description-hint" onChange={(e) => setDescription(e.target.value)} />
                        <FormHelperText id="description-hint">Descrição do Veículo</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Placa" fullWidth={true} id="plate"
                            aria-describedby="plate-hint" onChange={(e) => setPlate(e.target.value)} />
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

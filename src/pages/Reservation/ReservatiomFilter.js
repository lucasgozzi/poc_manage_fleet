import { Container, FormControl, FormHelperText, Grid, Typography, Button, TextField } from '@material-ui/core';
import MyDatePicker from '../../components/DatePicker/MyDatePicker';
import React from 'react';


export default function ReservatiomFilter() {
    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3">
                Reservar um veículo
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Filial" fullWidth={true} id="plate"
                            aria-describedby="plate-hint" />
                        <FormHelperText id="plate-hint">Filial</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <MyDatePicker />
                        <FormHelperText id="description-hint">Data da reserva</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained"
                        onClick={() => { }}
                        color="primary">Buscar</Button>
                </Grid>
            </Grid>

        </Container>
    )
}

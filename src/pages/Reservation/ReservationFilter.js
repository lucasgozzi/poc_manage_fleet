import { Button, Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyDatePicker from '../../components/DatePicker/MyDatePicker';
import ReservationCardList from '../../components/ReservationCardList/ReservationCardList';
import { Creators } from "../../store/ducks/reservations";

const ReservationFilter = (props) => {
    const reservations = useSelector(state => state.reservations);
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

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
                        onClick={() => {
                            dispatch(Creators.filterReservations('', ''));
                        }}
                        color="primary">Buscar</Button>
                </Grid>
            </Grid>
            <ReservationCardList reservations={reservations} />
        </Container>
    )
}


export default ReservationFilter;
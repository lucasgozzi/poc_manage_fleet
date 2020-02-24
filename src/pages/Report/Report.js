import { Grid, Container, Typography, Button, FormControl, FormHelperText } from '@material-ui/core';
import React, { useState } from 'react';
import MyDatePicker from '../../components/DatePicker/MyDatePicker';
import MyTable from '../../components/Table/MyTable';

export default function Report() {
    const [reservations, setReservations] = useState([])
    const filteredState = [{
        id: 1,
        date: new Date(),
        user: { id: 1, name: "Pedro Gozzi", email: "pedro@email.com" },
        vehicle: { id: 1, description: "Gol Quadrado", plate: "UMA-1234" },
    }, {
        id: 2,
        date: new Date(),
        user: { id: 1, name: "Luana Gozzi", email: "luana@email.com" },
        vehicle: { id: 1, description: "Vectra GTI", plate: "DIA-1234" },
        canDelete: false,
    }, {
        id: 3,
        date: new Date(),
        user: { id: 1, name: "Luana Gozzi", email: "luana@email.com" },
        vehicle: { id: 1, description: "Vectra GTI", plate: "DIA-1234" },
    }, {
        id: 4,
        date: new Date(),
        user: { id: 1, name: "Luana Gozzi", email: "luana@email.com" },
        vehicle: { id: 1, description: "Vectra GTI", plate: "DIA-1234" },
    }];

    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3">
                Relatório
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <MyDatePicker />
                        <FormHelperText id="plate-hint">Data início</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <MyDatePicker />
                        <FormHelperText id="description-hint">Data fim</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <Button variant="contained"
                        onClick={() => {
                            setReservations(filteredState);
                        }}
                        color="primary">Buscar</Button>
                </Grid>
            </Grid>
            <MyTable header={[
                { props: null, title: 'id', var: 'id' },
                { props: null, title: 'Data', var: 'date' },
                { props: null, title: 'Quem', var: 'user.name' },
                { props: null, title: 'E-mail', var: 'user.email' },
                { props: null, title: 'Veículo', var: 'vehicle.description' },
                { props: null, title: 'Placa', var: 'vehicle.plate' },
            ]}
                data={reservations}>

            </MyTable>
        </Container>
    )
}

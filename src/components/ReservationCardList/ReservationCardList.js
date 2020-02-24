import { Grid } from '@material-ui/core';
import React from 'react';
import ReservationCard from './ReservationCard';

export default function ReservationCardList(props) {
    if (props.reservations)
        return (
            <Grid container spacing={3}>
                {props.reservations.map((reservation, index) => (
                    <ReservationCard key={`reserv_${index}`} reservation={reservation} />
                ))}
            </Grid>
        );
    else
        return null;
}

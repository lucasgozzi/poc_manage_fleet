import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { Creators as ReservationActions } from "../../store/ducks/reservations";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    vehicle: {
        fontSize: '14px'
    },
    plate: {
        fontSize: '12px',
        textAlign: 'right'
    },
    box: {
        borderRadius: "10px"
    },
    free: {
        cursor: "pointer",
        borderRadius: "10px",
        background: "linear-gradient(0deg, #efefef 68%, #99ff99 32%)"
    },
    busy: {
        borderRadius: "10px",
        background: "linear-gradient(0deg, #ccc 68%, #ff6666 32%)"
    },
    deleteIcon: {
        float: 'right',
        top: "25px",
        right: "25px"
    }
}));

export default function ReservationCard(props) {
    const { reservation } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    function removeReservation() {
        dispatch(ReservationActions.removeReservation(reservation.id));
    }

    function addReservation(e) {
        if (reservation.user)
            return null;
        else {
            console.log({ id: 5, name: 'user da reserva', email: 'user@autozone.com' }, ReservationActions);
            dispatch(ReservationActions.addReservation(reservation.id, {
                id: 5, name: 'user da reserva', email: 'user@autozone.com'
            }));
        }

    }

    return (

        <Grid item xs={3} xm={6}>

            {reservation.canDelete && <Button
                onClick={() => removeReservation()}
                className={classes.deleteIcon}> <DeleteForeverSharpIcon /> </Button>}
            <Box
                boxShadow={3}
                m={3}
                p={2}
                className={reservation.user ? classes.busy : classes.free}
                onClick={() => addReservation()}
            >
                <Typography className={classes.vehicle}>
                    {reservation.vehicle.plate}
                </Typography>
                <Typography className={classes.plate}>
                    {reservation.vehicle.description}

                </Typography>
                {reservation.user ?
                    <>
                        <Typography>
                            {reservation.user.name}
                        </Typography>
                        <Typography>
                            {reservation.user.email}
                        </Typography>
                    </> :
                    <>
                        <Typography>
                            &nbsp;
                        </Typography>
                        <Typography>
                            Clique para agendar
                        </Typography>
                    </>}
            </Box>
        </Grid>
    )
}

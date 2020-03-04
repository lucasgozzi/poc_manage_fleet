import { Grid, Box, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { Creators as ReservationActions } from "../../store/ducks/reservations";
import { useDispatch } from 'react-redux';
import ConfirmationDialog from '../../components/Dialogs/ConfirmationDialog';

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
    const [showConfirmationAdd, setShowAdd] = useState(false);
    const [showConfirmationRemove, setShowRemove] = useState(false);
    function removeReservation() {
        dispatch(ReservationActions.removeReservation(reservation.id));
    }

    function addReservation(descricao) {
        dispatch(ReservationActions.addReservation(reservation.id, {
            id: 5, name: 'user da reserva', email: 'user@autozone.com'
        }));
    }

    function confirm(e) {
        if (reservation.user)
            return null;
        else {
            setShowAdd(true);
        }
    }

    function confirmRemove(e) {
        if (!reservation.user)
            return null;
        else {
            setShowRemove(true);
        }
    }

    return (

        <Grid item xs={3} xm={6}>
            {showConfirmationAdd && <ConfirmationDialog okFunction={addReservation}
                cancelFunction={() => setShowAdd(false)}
                hasDescription={true}
                info={"Reservar este carro? "} />}
            {showConfirmationRemove && <ConfirmationDialog okFunction={removeReservation}
                cancelFunction={() => setShowRemove(false)}
                hasDescription={false}
                info={"Remover esta reserva? "} />}
            {reservation.canDelete && <Button
                onClick={() => confirmRemove()}
                className={classes.deleteIcon}> <DeleteForeverSharpIcon /> </Button>}
            <Box
                boxShadow={3}
                m={3}
                p={2}
                className={reservation.user ? classes.busy : classes.free}
                onClick={() => confirm()}
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

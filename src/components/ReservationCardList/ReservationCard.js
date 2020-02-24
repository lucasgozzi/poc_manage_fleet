import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

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
        borderRadius: "10px",
        background: "linear-gradient(0deg, #efefef 80%, #99ff99 20%)"
    },
    busy: {
        borderRadius: "10px",
        background: "linear-gradient(0deg, #ccc 80%, #ff6666 20%)"
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
    return (

        <Grid item xs={3}>

            {reservation.canDelete && <Button className={classes.deleteIcon}> <DeleteForeverSharpIcon /> </Button>}
            <Box
                boxShadow={3}
                m={3}
                p={6}
                className={reservation.user ? classes.busy : classes.free}
            >
                <Typography className={classes.vehicle}>
                    {reservation.vehicle.description}
                </Typography>
                <Typography className={classes.plate}>
                    {reservation.vehicle.plate}
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

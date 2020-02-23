import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import MyTable from '../../components/Table/MyTable';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as VehicleActions } from "../../store/ducks/vehicles";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({

    title: {
        flexGrow: 1,
    },
    addButton: {
        marginBottom: '20px'
    }
}));

const ListVehicles = props => {
    const classes = useStyles();
    const history = useHistory();
    const del = (e, id) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        props.removeVehicle(id);
        props.showStatus('success');
    }
    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3" className={classes.title}>
                Veículos
            </Typography>
            <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => history.push('/vehicles/new')}
                color="primary">Novo</Button>
            <MyTable header={[
                { props: null, title: 'id', var: 'id' },
                { props: null, title: 'Descrição', var: 'description' },
                { props: null, title: 'Placa', var: 'plate' },
                { props: null, delete: true, onClick: del },
            ]}
                data={props.vehicles}
                rowClick={{
                    event: (value) => history.push(`/vehicles/${value}`),
                    value: 'id'
                }}>

            </MyTable>
        </Container>
    )
}

const mapStateToProps = state => ({
    vehicles: state.vehicles
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(VehicleActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListVehicles);
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import MyTable from '../../components/Table/MyTable';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/users";
import { useHistory } from 'react-router-dom';
import ConfirmationDialog from '../../components/Dialogs/ConfirmationDialog';

const useStyles = makeStyles(theme => ({

    title: {
        flexGrow: 1,
    },
    addButton: {
        marginBottom: '20px'
    }
}));

const ListUsers = props => {
    const classes = useStyles();
    const history = useHistory();
    const [idToDel, setIdToDel] = useState(null);
    const confirmDel = () => {
        props.removeUser(idToDel);
        props.showStatus('success');
        setIdToDel(null);
    }
    const del = (e, id) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setIdToDel(id);
    }
    const cancel = () => setIdToDel(null);
    return (
        <Container component="main" maxWidth="lg">
            {idToDel && <ConfirmationDialog okFunction={confirmDel}
                cancelFunction={cancel}
                hasDescription={false}
                info={"Remover este item? "} />}
            <Typography variant="h3" className={classes.title}>
                Usuários
            </Typography>
            <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => history.push('users/new')}
                color="primary">Novo</Button>
            <MyTable header={[
                { props: null, title: 'id', var: 'id' },
                { props: null, title: 'Perfil', var: 'profile.name' },
                { props: null, title: 'Nome', var: 'name' },
                { props: null, title: 'E-mail', var: 'email' },
                { props: null, delete: true, onClick: del },
            ]}
                data={props.users}
                rowClick={{
                    event: (value) => history.push(`/users/${value}`),
                    value: 'id'
                }}>

            </MyTable>
        </Container>
    )
}

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUsers);
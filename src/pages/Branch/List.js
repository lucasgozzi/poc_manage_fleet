import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import MyTable from '../../components/Table/MyTable';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as BranchActions } from "../../store/ducks/branches";
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

const ListBranches = props => {
    const classes = useStyles();
    const history = useHistory();
    const [idToDel, setIdToDel] = useState(null);
    const confirmDel = () => {
        props.removeBranch(idToDel);
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
                Filial
            </Typography>
            <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => history.push('branches/new')}
                color="primary">Novo</Button>
            <MyTable header={[
                { props: null, title: 'id', var: 'id' },
                { props: null, title: 'Descrição', var: 'name' },
                { props: null, delete: true, onClick: del },
            ]}
                data={props.branches}
                rowClick={{
                    event: (value) => history.push(`/branches/${value}`),
                    value: 'id'
                }}>

            </MyTable>
        </Container>
    )
}

const mapStateToProps = state => ({
    branches: state.branches
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(BranchActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBranches);
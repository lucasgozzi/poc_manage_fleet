import { Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { bindActionCreators } from "redux";
import FormActionButtons from '../../components/FormActionButtons/FormActionButtons';
import { Creators as BranchActions } from "../../store/ducks/branches";



const EditNewBranch = (props) => {
    let { id } = useParams();
    const [name, setName] = useState('');
    const { showStatus } = props;
    const history = useHistory();

    useEffect(() => {
    }, [])

    const back = () => {
        showStatus('error', 'msg generica para demonstracao');
        // history.push('/branches');
    };
    const save = () => {
        if (id) {
            props.updateBranch(id, { id, name });
        } else {
            props.addBranch({ id: "4353", name });
        }
        setName('');
        showStatus('success');
        history.push('/branches');
    };


    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3">
                Filial
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Nome" fullWidth={true} id="name"
                            aria-describedby="name-hint"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <FormHelperText id="name-hint">Descrição/Nome da filial</FormHelperText>
                    </FormControl>
                </Grid>
                <FormActionButtons
                    handleNext={save}
                    handleBack={back} />
            </Grid>
        </Container>
    )
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(BranchActions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(EditNewBranch);

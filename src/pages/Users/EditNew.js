import { Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FormActionButtons from '../../components/FormActionButtons/FormActionButtons';

export default function EditNewUser(props) {
    let { id } = useParams();
    const { showStatus } = props;
    const history = useHistory();

    useEffect(() => {
    }, [])

    const back = () => {
        showStatus('error', 'msg generica para demonstracao');
        // history.push('/branches');
    };
    const save = () => {
        showStatus('success');
        history.push('/users');
    };


    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h3">
                Usuários
            </Typography>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField variant="outlined" label="E-mail" fullWidth={true} id="email"
                        aria-describedby="email-hint" />
                    <FormHelperText id="email-hint">E-mail do usuário</FormHelperText>
                </FormControl>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Nome" fullWidth={true} id="name"
                            aria-describedby="name-hint" />
                        <FormHelperText id="name-hint">Nome do usuário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Perfil" fullWidth={true} id="profile"
                            aria-describedby="profile-hint" />
                        <FormHelperText id="profile-hint">Perfil do usuário</FormHelperText>
                    </FormControl>
                </Grid>
                <FormActionButtons
                    handleNext={save}
                    handleBack={back} />
            </Grid>
        </Container>
    )
}

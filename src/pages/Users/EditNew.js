import { Container, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import FormActionButtons from '../../components/FormActionButtons/FormActionButtons';
import { Creators as UserActions } from "../../store/ducks/users";

export default function EditNewUser(props) {
    let { id } = useParams();
    const { showStatus } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    const back = () => {
        showStatus('error', 'msg generica para demonstracao');
        // history.push('/branches');
    };
    const save = () => {
        if (id) {
            dispatch(UserActions.updateUser(id, { id, name, email, profile: { id: 1, name: profile } }));
        } else {
            dispatch(UserActions.addUser(5, { id, name, email, profile: { id: 1, name: profile } }));
        }
        setName('');
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
                        aria-describedby="email-hint" onChange={(e) => setEmail(e.target.value)} />
                    <FormHelperText id="email-hint">E-mail do usuário</FormHelperText>
                </FormControl>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Nome" fullWidth={true} id="name"
                            aria-describedby="name-hint" onChange={(e) => setName(e.target.value)} />
                        <FormHelperText id="name-hint">Nome do usuário</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" label="Perfil" fullWidth={true} id="profile"
                            aria-describedby="profile-hint" onChange={(e) => setProfile(e.target.value)} />
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

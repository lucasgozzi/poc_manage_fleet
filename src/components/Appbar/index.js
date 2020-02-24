import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Creators as SecurityActions } from "../../store/ducks/security";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logout: {
        color: '#F00',
        fontWeight: 'bold'
    }
}));

const Menu = props => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Autozone
                    </Typography>
                {props.token && (
                    <>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => history.push('/branches')}>
                            <Typography className={classes.title}>
                                Unidades
                            </Typography>
                        </IconButton>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => history.push('/vehicles')}>
                            <Typography className={classes.title}>
                                Veiculos
                            </Typography>
                        </IconButton>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => history.push('/users')}>
                            <Typography className={classes.title}>
                                Usuários
                            </Typography>
                        </IconButton>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => history.push('/reservations')}>
                            <Typography className={classes.title}>
                                Reservas
                            </Typography>
                        </IconButton>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => history.push('/report')}>
                            <Typography className={classes.title}>
                                Relatórios
                            </Typography>
                        </IconButton>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => {
                                props.logout();
                                history.push('/login');
                            }}>
                            <Typography variant="h6" className={classes.logout}>
                                Logout
                            </Typography>
                        </IconButton>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    token: state.security.token
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(SecurityActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
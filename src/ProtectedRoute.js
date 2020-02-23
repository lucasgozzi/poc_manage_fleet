import React from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SecurityActions } from "./store/ducks/security";

const ProtectedRoute = (props) => {
    //const { ...rest } = props;
    if (props.token)
        return (
            <Route {...props}></Route>
        )
    else
        return (<h1>Sua sessão expirou e você não
            está mais logado. Faça login em <Link to='/login'>/login</Link> </h1>)
    // return <Redirect to={{
    //     pathname: "/login",
    //     state: props.location
    // }} />
}

const mapStateToProps = state => ({
    token: state.security.token
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(SecurityActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProtectedRoute);
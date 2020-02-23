import { createActions, createReducers } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    login: ["token"],
    logout: []
});

/**
 * Handlers
 */
const INITIAL_STATE = [];

const login = (state = INITIAL_STATE, action) => { };

const logout = (state = INITIAL_STATE) => { };

export default createReducers(INITIAL_STATE, {
    [Types.LOGIN]: login,
    [Types.LOGOUT]: logout
});

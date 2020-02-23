import { createActions, createReducer } from "reduxsauce";


/**
 * Handlers
 */
const INITIAL_STATE = { token: null };

const login = (state = INITIAL_STATE, action) => ({ token: action.token });

const logout = (state = INITIAL_STATE) => ({ token: null })


/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  login: ["token"],
  logout: []
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout
});

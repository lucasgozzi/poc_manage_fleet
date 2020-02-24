import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    addUser: ["object"],
    updateUser: ["id", "object"],
    removeUser: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE = [{
    id: 1,
    name: 'Pedro Gozzi',
    email: 'pedro.gozzi@autozone.com.br',
    active: true,
    profile: { id: '123', name: 'Admin' }
}, {
    id: 2,
    name: 'Admin master',
    email: 'adm@autozone.com.br',
    active: true,
    profile: { id: '123', name: 'Admin' }
}, {
    id: 3,
    name: 'Luana Gozzi',
    email: 'lu.gozzi@neoviasolutions.com',
    active: true,
    profile: { id: '124', name: 'Usuário' }
}, {
    id: 4,
    name: 'José Nilton',
    email: 'josé.nilton@autozone.com.br',
    active: true,
    profile: { id: '124', name: 'Usuário' }
}];

const add = (state = INITIAL_STATE, action) => [
    ...state,
    action.object
];

const update = (state = INITIAL_STATE, action) => state.map(
    user => {
        const newObj = user.id.toString() === action.id.toString() ? { ...user, ...action.object } : user;
        return newObj;
    }
);

const remove = (state = INITIAL_STATE, action) => state.filter(obj => obj.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.ADD_USER]: add,
    [Types.UPDATE_USER]: update,
    [Types.REMOVE_USER]: remove
});

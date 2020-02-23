import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    addBranch: ["object"],
    updateBranch: ["id", "object"],
    removeBranch: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE = [{
    id: 1,
    name: 'Filial Campinas'
}, {
    id: 2,
    name: 'Filial Paulínia'
}, {
    id: 3,
    name: 'Filial Americana'
}];

const add = (state = INITIAL_STATE, action) => [
    ...state,
    action.object
];

const update = (state = INITIAL_STATE, action) => state.map(
    branch => {
        const newObj = branch.id === action.id ? { ...branch, ...action.object } : branch;
        return newObj;
    }
);

const remove = (state = INITIAL_STATE, action) => state.filter(obj => obj.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.ADD_BRANCH]: add,
    [Types.UPDATE_BRANCH]: update,
    [Types.REMOVE_BRANCH]: remove
});

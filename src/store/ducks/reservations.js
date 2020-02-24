import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    filterReservations: ["date", "branch"],
    addReservation: ["id", "user"],
    removeReservation: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE = [];

const FILTERED_STATE = [{
    id: 1,
    date: new Date(),
    user: { id: 1, name: "Pedro Gozzi", email: "pedro@email.com" },
    vehicle: { id: 1, description: "Gol Quadrado", plate: "UMA-1234" },
    canDelete: true,
}, {
    id: 2,
    date: new Date(),
    user: { id: 1, name: "Luana Gozzi", email: "luana@email.com" },
    vehicle: { id: 1, description: "Vectra GTI", plate: "DIA-1234" },
    canDelete: false,
}, {
    id: 3,
    date: new Date(),
    user: null,
    vehicle: { id: 1, description: "Vectra GTI", plate: "DIA-1234" },
    canDelete: false,
}];

const add = (state = INITIAL_STATE, action) => state.map(obj => {
    const a = obj.id === action.id ?
        { ...obj, user: action.user, canDelete: true } : obj;
    console.log(a);
    return a;
});


const filter = (state = INITIAL_STATE, action) => [
    ...FILTERED_STATE
];

const removeReservation = (state = INITIAL_STATE, action) => state.map(obj => obj.id === action.id ?
    { ...obj, user: null, canDelete: false } : obj);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.ADD_RESERVATION]: add,
    [Types.FILTER_RESERVATIONS]: filter,
    [Types.REMOVE_RESERVATION]: removeReservation
});

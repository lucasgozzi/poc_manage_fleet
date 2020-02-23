import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    addVehicle: ["object"],
    updateVehicle: ["id", "object"],
    removeVehicle: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE = [{
    id: 1,
    description: 'Gol 94',
    plate: 'FMV-1826'
}, {
    id: 2,
    description: 'Vectra 2010 GTI',
    plate: 'FMV-1826'
}, {
    id: 3,
    description: 'Palio Sedan 20XX',
    plate: 'FMV-1826'
}];

const add = (state = INITIAL_STATE, action) => [
    ...state,
    action.object
];

const update = (state = INITIAL_STATE, action) => state.map(
    vehicle => {
        const newObj = vehicle.id === action.id ? { ...vehicle, ...action.object } : vehicle;
        return newObj;
    }
);

const remove = (state = INITIAL_STATE, action) => state.filter(obj => obj.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.ADD_VEHICLE]: add,
    [Types.UPDATE_VEHICLE]: update,
    [Types.REMOVE_VEHICLE]: remove
});

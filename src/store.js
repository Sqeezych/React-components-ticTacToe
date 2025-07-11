import { appReducer, initialState } from "./reducer";

function createStore (reducer, initialState) {
    let state = initialState;

    return {
        dispatch: (action) => {
            state = reducer(state, action);
        },
        getState: () => state,
    }
}

export const store = createStore(appReducer, initialState)
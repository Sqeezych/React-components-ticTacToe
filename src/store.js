import { createStore } from "redux";
import { reducer } from "./reducer";

// function createStore (reducer) {
//     let state;

//     return {
//         dispatch: (action) => {
//             state = reducer(action, state);
//         },
//         getState: () => state,
//     }
// }

export const store = createStore(reducer);
import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../actions/types";

// index.js - store.getState() returns state on reducer function
const performReducerAction = (state = { num: 0 }, action) => {
    switch (action.type) {
        case INCREMENT_NUMBER:
            console.log(
                "►► INCREMENT ACTION performed on reducer - settingsReducer.js ◄◄"
            );
            console.log(
                "►► Reducer actionType (Last Known Value before Updated) -",
                action
            );
            return {
                num: state.num + 1
            };
        case DECREMENT_NUMBER:
            console.log(
                "►► DECREMENT ACTION performed on reducer - settingsReducer.js ◄◄"
            );
            return {
                num: state.num - 1
            };
        default:
            return state;
    }
};

export default performReducerAction;

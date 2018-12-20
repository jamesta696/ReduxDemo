import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "./types";

export const incrementNumber = num => {
    return {
        type: INCREMENT_NUMBER,
        num
    };
};

export const decrementNumber = num => {
    return {
        type: DECREMENT_NUMBER,
        num
    };
};

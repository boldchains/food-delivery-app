import { INIT_STATE, INPUT_FIELD } from '../types';

export const initState = () => {
    return {
        type: INIT_STATE
    };
}

export const inputField = (state, value) => {
    return {
        type: INPUT_FIELD,
        payload: {
            state: state,
            value: value,
        }
    };
}
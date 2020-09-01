import { INIT_STATE, INPUT_FIELD, INIT_USER, CARD_EXPIRED_DATE } from '../types';
import { EXPIRE_DATE_ERROR } from '../../config/errorMessages';

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

export const initUser = user => {
    return {
        type: INIT_USER,
        payload: user
    };
}

export const cardExpiredDate = date => {
    return {
        type: EXPIRE_DATE_ERROR,
        payload: date
    };
}
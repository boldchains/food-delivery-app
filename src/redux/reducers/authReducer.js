import { INIT_STATE, INPUT_FIELD, INIT_USER, expired_date } from '../types';
import { EXPIRE_DATE_ERROR } from '../../config/errorMessages';

const initialState = {
    userID: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    photo: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
    expired_date: "",
    isDefault: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_STATE:
            return {
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                phone: "",
                photo: ""
            };

        case INPUT_FIELD:
            return {
                ...state,
                [action.payload.state]: action.payload.value
            };

        case INIT_USER:
            return {
                ...state,
                userID: action.payload.userID,
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phoneNumber,
                photo: action.payload.userPhoto,
                password: "",
                confirmPassword: ""
            }

        case EXPIRE_DATE_ERROR:
            return {
                ...state,
                expired_date: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;
import { INIT_STATE, INPUT_FIELD, INIT_USER } from '../types';

const initialState = {
    userID: "",
    email: "123",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
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
                phone: ""
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
                phone: action.payload.phoneNumber
            }
        default:
            return state;
    }
}

export default authReducer;
import { INIT_STATE, INPUT_FIELD } from '../types';

const initialState = {
    email: "",
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
        case INIT_STATE: {
            return {
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                phone: ""
            };
        }

        case INPUT_FIELD:
            return {
                ...state,
                [action.payload.state]: action.payload.value
            };

        default:
            return state;
    }
}

export default authReducer;
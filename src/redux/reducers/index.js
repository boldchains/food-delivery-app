import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import PaymentReducer from './paymentReducer';

export default combineReducers({
    auth: AuthReducer,
    payment: PaymentReducer,
});
import CoreService from './CoreService';

export default class AuthService extends CoreService {

    login = user => {
        return this.makeRequest('user_login', {
            method: "post",
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        });
    }

    signUp = user => {
        return this.makeRequest('user_signup', {
            method: 'post',
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                fullname: user.name,
                phonenumber: user.phone
            })
        });
    }
}
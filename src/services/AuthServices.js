import CoreService from './CoreService';

export default class AuthService extends CoreService {

    checkUser = () => {
        return this.makeRequest('user/me');
    }

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

    update = info => {
        console.log('=====update');
        return this.makeRequest('user/update', {
            method: 'post',
            body: JSON.stringify({
                code: info.code,
                data: {
                    addres: info.address,
                    city: info.city,
                    state: info.state,
                    zip: info.zip
                }
            })
        });
    }
}
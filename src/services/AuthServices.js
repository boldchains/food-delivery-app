import CoreService from './CoreService';
import config from '../config/server';
import axios from 'axios'

export default class AuthService extends CoreService {

    async login(user, callback) {
        var user_login = config.urlUser + 'user_login';
        axios.post(user_login, user)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async signUp(user, callback) {
        var user_signup = config.urlUser + 'user_signup';
        axios.post(user_signup, user)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async update(update, callback) {
        var update_profile = config.urlUser + 'user_update_profile';
        axios.post(update_profile, update)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }

    async getUserDetails(userID, callback) {
        var user_details = config.urlUser + 'user_detail';
        axios.post(user_details, userID)
            .then(res => {
                const data = res.data;
                if (data) {
                    callback({ isSuccess: true, response: data, message: '' });
                } else {
                    callback({ isSuccess: false, response: data, message: 'Failed to authentication' });
                }
            }).catch(error => {
                callback({ isSuccess: false, response: error, message: 'Failed to get response' });
            });
    }
}
import CoreService from './CoreService';

export default class AuthService extends CoreService {

    addCard = card => {
        return this.makeRequest('user_add_paymentmethod', {
            method: "post",
            body: JSON.stringify({
                userID: card.userID,
                account_name: card.account_name,
                card_number: card.card_number,
                expire_date: card.expired_date,
                cvv: card.cvv,
                is_default: "YES"
            })
        });
    }

}
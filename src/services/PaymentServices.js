import CoreService from './CoreService';

export default class AuthService extends CoreService {

    addCard = card => {
        return this.makeRequest('user_add_paymentmethod', {
            method: "post",
            body: JSON.stringify({
                userID: 1,
                account_name: card.name,
                card_number: card.card_number,
                expire_date: card.expired_date,
                cvv: card.cvv
            })
        });
    }

}
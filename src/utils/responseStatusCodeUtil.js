import { EMAIL_DUPLICATE, USER_NOT_FOUND, INVALID_PASSWORD } from '../config/errorMessages';

export const response = code => {
    console.log("pozvana funkcija za kodove! ", code);
    switch (code) {
        case 601: {
            return EMAIL_DUPLICATE;
        }
        case 602: {
            console.log("Pogresna lozinka");
            return INVALID_PASSWORD;
        }
        case 603: {
            console.log("korisnik nije pronadjen");
            return USER_NOT_FOUND;
        }
    }
}
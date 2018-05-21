import { IVM } from './IVM'

export class LoginVM implements IVM {

    email: string;
    password: string;
    remember: boolean;

    constructor() {
        this.email = "";
        this.password = "";
    }

    public validate(): string {
        // if (!this.validateEmail(this.email))
        //     return 'Please enter a correct email address';
        if (this.password.length < 8)
            return 'Please enter a valid password | Minimum 8 characters';
        else
            return 'valid';
    }

    private validateEmail(email) {
        var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(email);
    }
    private validatePassword(password) {
        //Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
        var regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        return regx.test(password);
    }
}
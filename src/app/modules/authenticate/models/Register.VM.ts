import { IVM } from './IVM'

export class RegisterVM implements IVM {

    UserName: string;
    Password: string;
    ConfirmPassword: string;
    agree: boolean;
    constructor() {
        this.UserName = "";
        this.Password = "";
        this.ConfirmPassword = "";
        this.agree = true;
    }

    public validate(): string {
        if (!this.validateEmail(this.UserName))
            return 'Invalid email';
        if (this.Password.length < 8)
            return 'Invalid Password (Minimum 8 characters )';
        if (this.ConfirmPassword.length < 8)
            return 'Invalid Confirm Password (Minimum 8 characters)';
        if (this.ConfirmPassword != this.Password)
            return 'Password mismatch';
        if (!this.agree)
            return 'Please check the Terms and condition';
        else
            return 'valid';
    }

    private validateEmail(username) {
        //    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //  return regx.test(email);
        return true;
    }

    private validatePassword(password) {
        //Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
        var regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        return regx.test(password);
    }
}
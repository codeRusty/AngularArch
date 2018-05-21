import { IVM } from './IVM'

export class GoogleSignInRegisterVM implements IVM {
    ID: String;
    Name: string;
    Image: string;
    Email: string;
    constructor() {
        this.ID = "";
        this.Name = "";
        this.Image = "";
        this.Email = "";
    }

    public validate(): string {
        if (!this.validateDaffodilDomainEmail(this.Email))
            return 'Invalid email';

    }

    private validateDaffodilDomainEmail(email) {
        if (email != null && email != undefined && email.includes('daffodilsw.com'))
            return true;
        else
            return false;
    }
}
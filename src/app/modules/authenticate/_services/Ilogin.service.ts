export interface ILoginService {

    login(email: string, password: string);
    isUserLoggedIn(): boolean;

}

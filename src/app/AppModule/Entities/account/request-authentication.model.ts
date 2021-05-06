export class RequestAuthentication {
   
    token: string;
    expiration: Date;
    userName: string;
    
    constructor(
        token: string,
        expiration: Date,
        userName: string
    ) {
        this.token = token;
        this.expiration = expiration;
        this.userName = userName;
    }
}

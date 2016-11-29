export class User {

    constructor(
        public login: string,
        public name: string,
        public company: string,
        public id: number,
        public avatar: string,
        public isAdmin: boolean
    ) {}

}

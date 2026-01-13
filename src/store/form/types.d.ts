interface IUser {
    userName:string
    email:string
    password:string
}

interface IUserState {
    user:IUser | null
    authenticated: boolean
    showPass:boolean
}
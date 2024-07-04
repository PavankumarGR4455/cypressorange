class logininfo{

    usernameinput(){
        return 'input[name="username"]'
    }
    passwordinput(){

        return 'input[name="password"]'
    }
    loginbutton(){
        return 'button[type="submit"]'
    }

    loginerror = "Invalid credentials"

}

const login= new logininfo()

export default login


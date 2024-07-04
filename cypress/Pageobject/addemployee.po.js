class addemployee{

    firstname(){
        return 'input[name="firstName"]'
    }
    middlename(){
        return 'input[name="middleName"]'
    }
    lastname(){
        return 'input[name="lastName"]'
    }
    employeeid(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    savebtn(){

        return 'button[type="submit"]'
    }
}

const Addemployee = new addemployee()

export default Addemployee
import {User} from './user';

export class UserPayment{
    constructor(public user: User, public customAmount: number, public pays: number){}
}

export class Expense{
    public payers: UserPayment[];
    public description: string;
    public amount: number;
    
    constructor(){
        this.payers = new Array<UserPayment>();
    }

    addUsers(users: User[]){
        users.forEach(user=>this.payers.push(new UserPayment(user, 0, 0)));
    }
    changeTotalAmount(amount: number): void{
        this.amount = amount;
    }
    addUserPayment(payer: UserPayment): void{
        this.payers.push(payer);
    }
    deleteUser(user: User): void{
        this.deleteUserById(user.id);
    }
    deleteUserById(id: string): void{
        this.payers = this.payers.filter(payer=>payer.user.id !== id);
        this.calculateAmounts();
    }
    calculateAmounts(): boolean{
        if(this.amount>0){
            let customAmounts: number = 0;
            this.payers.forEach(payer=>customAmounts+=payer.customAmount);
            if (customAmounts <= this.amount){
                this.payers.forEach(payer=>payer.pays=(((this.amount-customAmounts)/this.payers.length) + payer.customAmount));
                return true;
            }
        }
        return false;
    }
}
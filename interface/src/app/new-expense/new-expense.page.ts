import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../data/user';
import { Expense } from '../data/expense';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {

  expense: Expense;
  splitEqually: boolean;
  loaded: boolean;
  constructor(public modalController: ModalController, public userService: UserService) {  this.splitEqually = true; this.loaded = false; this.expense=new Expense();}

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.userService.getUsers().subscribe(data=>{this.loaded=true; this.expense.addUsers(data)});
    }, 500);
  }

  removeUser(userId){
    console.log("removing id: "+userId);
    this.expense.deleteUserById(userId);
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}

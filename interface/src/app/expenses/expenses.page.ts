import {
  Component
} from '@angular/core';
import {
  ModalController
} from '@ionic/angular';
import {
  NewExpensePage
} from '../new-expense/new-expense.page'

@Component({
  selector: 'app-expenses',
  templateUrl: 'expenses.page.html',
  styleUrls: ['expenses.page.scss']
})
export class ExpensesPage {

  constructor(public modalController: ModalController) {}
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentAddExpensePrompt() {
    const modal = await this.modalController.create({
      component: NewExpensePage
    });
    return await modal.present();
  }

}
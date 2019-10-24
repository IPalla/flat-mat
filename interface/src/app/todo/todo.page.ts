import { Component } from '@angular/core';

@Component({
  selector: 'app-Todo',
  templateUrl: 'Todo.page.html',
  styleUrls: ['Todo.page.scss']
})
export class TodoPage {
  isChecked: boolean;
  constructor() {this.isChecked = false;}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  e() {
    console.log(this.isChecked);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewExpensePage } from './new-expense.page';
import { UserService } from '../services/user.service';

const routes: Routes = [
  {
    path: '',
    component: NewExpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserService,
    RouterModule.forChild(routes)
  ],
  declarations: [NewExpensePage]
})
export class NewExpensePageModule {}

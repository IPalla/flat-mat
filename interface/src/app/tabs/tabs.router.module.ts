import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'expenses',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../expenses/expenses.module').then(m => m.ExpensesPageModule)
          }
        ]
      },
      {
        path: 'todo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../todo/todo.module').then(m => m.TodoPageModule)
          }
        ]
      },
      {
        path: 'members',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../members/members.module').then(m => m.MembersPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/expenses',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/expenses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

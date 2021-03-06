import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'new-expense', loadChildren: './new-expense/new-expense.module#NewExpensePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'google-redirect', loadChildren: './goole-redirect/goole-redirect.module#GooleRedirectPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

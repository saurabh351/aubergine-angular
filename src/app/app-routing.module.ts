import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./components/auth/login/login.module`).then(l => l.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import(`./components/auth/login/login.module`).then(l => l.LoginModule),
  },
  {
    path: 'users/:id',
    loadChildren: () => import(`./components/modules/users/users.module`).then(u => u.UsersModule),
  },
  {
    path: 'questions',
    loadChildren: () => import(`./components/modules/questions/questions.module`).then(q => q.QuestionsModule)
  },
  {
    path: '**',
    loadChildren: () => import(`./components/auth/login/login.module`).then(l => l.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

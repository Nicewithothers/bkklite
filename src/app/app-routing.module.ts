import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'menetrend',
    loadChildren: () => import('./pages/menetrend/menetrend.module').then(m => m.MenetrendModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'newpass', loadChildren: () => import('./pages/newpass/newpass.module').then(m => m.NewpassModule) },
  { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./pages/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: 'menetrend',
    loadChildren: () => import('./pages/menetrend/menetrend.module').then(m => m.MenetrendModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  { path: 'newpass',
    loadChildren: () => import('./pages/newpass/newpass.module').then(m => m.NewpassModule),
  },
  { path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule) },
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

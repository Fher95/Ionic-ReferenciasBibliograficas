import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    // redirectTo: 'lista-referencias',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lista-referencias',
    loadChildren: () => import('./lista-referencias/lista-referencias.module').then( m => m.ListaReferenciasPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verificar-email',
    loadChildren: () => import('./verificar-email/verificar-email.module').then( m => m.VerificarEmailPageModule)
  },
  {
    path: 'verificar-email/:registrado',
    loadChildren: () => import('./verificar-email/verificar-email.module').then( m => m.VerificarEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'add-referencia',
    loadChildren: () => import('./add-referencia/add-referencia.module').then( m => m.AddReferenciaPageModule)
  },
  {
    path: 'add-referencia/:id',
    loadChildren: () => import('./add-referencia/add-referencia.module').then( m => m.AddReferenciaPageModule)
  },
  {
    path: 'detail-referencia:id',
    loadChildren: () => import('./detail-referencia/detail-referencia.module').then( m => m.DetailReferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

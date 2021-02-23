import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'tutorial',
  //   loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  // }
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  // },
  // {
  //   path: 'support',
  //   loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule),
    // canLoad: [CheckTutorial]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

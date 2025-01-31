import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then( m => m.WelcomePageModule)
  },
  { 
    path: '**', 
    redirectTo: '/welcome', 
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

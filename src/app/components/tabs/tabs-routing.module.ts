import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      { 
        path: '', 
        redirectTo: '/tabs/login', 
        pathMatch: 'full' ,
      },
    ]
  },
  { 
    path: '', 
    redirectTo: '/tabs/login', 
    pathMatch: 'full' ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

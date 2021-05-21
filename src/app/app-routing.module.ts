import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from '../app/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../app/tab-info/tab-info.module').then(m => m.TabInfoPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../app/tab-question/tab-question.module').then(m => m.TabQuestionPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../app/tab-data/tab-data.module').then(m => m.TabDataPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

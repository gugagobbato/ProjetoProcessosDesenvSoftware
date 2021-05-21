import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab-info/tab-info.module').then(m => m.TabInfoPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab-question/tab-question.module').then(m => m.TabQuestionPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab-data/tab-data.module').then(m => m.TabDataPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

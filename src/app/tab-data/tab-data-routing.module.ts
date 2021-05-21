import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDataPage } from './tab-data.page';

const routes: Routes = [
  {
    path: '',
    component: TabDataPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabDataPageRoutingModule { }

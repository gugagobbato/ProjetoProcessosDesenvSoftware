import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabQuestionPage } from './tab-question.page';

const routes: Routes = [
  {
    path: '',
    component: TabQuestionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabQuestionPageRoutingModule { }

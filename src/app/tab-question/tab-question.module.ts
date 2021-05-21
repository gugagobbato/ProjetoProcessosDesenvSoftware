import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabQuestionPage } from './tab-question.page';
import { TabQuestionPageRoutingModule } from './tab-question-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabQuestionPageRoutingModule
  ],
  declarations: [TabQuestionPage]
})
export class TabQuestionPageModule { }

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabDataPage } from './tab-data.page';
import { TabDataPageRoutingModule } from './tab-data-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabDataPage }]),
    TabDataPageRoutingModule,
  ],
  declarations: [TabDataPage]
})
export class TabDataPageModule { }

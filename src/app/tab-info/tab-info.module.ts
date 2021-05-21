import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabInfoPage } from './tab-info.page';
import { TabInfoPageRoutingModule } from './tab-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabInfoPageRoutingModule
  ],
  declarations: [TabInfoPage]
})
export class TabInfoPageModule { }

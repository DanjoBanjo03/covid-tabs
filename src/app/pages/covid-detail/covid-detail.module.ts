import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidDetailPageRoutingModule } from './covid-detail-routing.module';

import { CovidDetailPage } from './covid-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidDetailPageRoutingModule
  ],
  declarations: [CovidDetailPage]
})
export class CovidDetailPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListComponentModule } from '../components/item-list/item-list.module';
import { SplashPageRoutingModule } from './spash-page-routing.module';
import { SplashPage } from './splash-page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SplashPageRoutingModule,
    ItemListComponentModule,
  ],
  declarations: [SplashPage],
})
export class SplashPageModule {}

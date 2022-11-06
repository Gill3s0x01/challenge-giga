import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MalePage } from './male.page';

import { MalePageRoutingModule } from './male-routing.module';
import { ItemListComponentModule } from '../components/item-list/item-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MalePageRoutingModule,
    ItemListComponentModule,
  ],
  declarations: [MalePage],
})
export class MalePageModule {}

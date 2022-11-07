import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MalePage } from './male.page';

import { MalePageRoutingModule } from './male-routing.module';
import { ItemListComponentModule } from '../components/item-list/item-list.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    MalePageRoutingModule,
    ItemListComponentModule,
  ],
  declarations: [MalePage],
})
export class MalePageModule {}

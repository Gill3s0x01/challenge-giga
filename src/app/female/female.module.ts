import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FemalePage } from './female.page';

import { FemalePageRoutingModule } from './female-routing.module';
import { ItemListComponentModule } from '../components/item-list/item-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemListComponentModule,

    FemalePageRoutingModule,
  ],
  declarations: [FemalePage],
})
export class FemalePageModule {}

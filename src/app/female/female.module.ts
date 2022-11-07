import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FemalePage } from './female.page';

import { FemalePageRoutingModule } from './female-routing.module';
import { ItemListComponentModule } from '../components/item-list/item-list.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ItemListComponentModule,

    FemalePageRoutingModule,
  ],
  declarations: [FemalePage],
})
export class FemalePageModule {}

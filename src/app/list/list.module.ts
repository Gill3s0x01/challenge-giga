import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';

import { ListPageRoutingModule } from './list-routing.module';
import { ItemListComponentModule } from '../components/item-list/item-list.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ItemListComponentModule,
    ListPageRoutingModule,
  ],
  declarations: [ListPage],
})
export class ListPageModule {}

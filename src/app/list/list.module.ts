import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';

import { ListPageRoutingModule } from './list-routing.module';
import { ItemListComponent } from '../item-list/item-list.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ListPageRoutingModule],
  declarations: [ListPage, ItemListComponent],
})
export class ListPageModule {}

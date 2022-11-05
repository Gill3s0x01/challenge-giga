import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListComponent } from './item-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
})
export class ItemListComponentModule {}

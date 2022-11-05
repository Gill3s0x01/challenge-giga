import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalePage } from './male.page';

const routes: Routes = [
  {
    path: '',
    component: MalePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalePageRoutingModule {}

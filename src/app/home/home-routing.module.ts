import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('../list/list.module').then((m) => m.ListPageModule),
      },
      {
        path: 'female',
        loadChildren: () =>
          import('../female/female.module').then((m) => m.FemalePageModule),
      },
      {
        path: 'male',
        loadChildren: () =>
          import('../male/male.module').then((m) => m.MalePageModule),
      },
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule {}

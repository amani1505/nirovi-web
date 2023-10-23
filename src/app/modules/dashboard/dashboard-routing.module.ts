import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { PodcastComponent } from './pages/podcast/podcast.component';
import { HomeComponent } from './pages/home/home.component';
import { LodgesComponent } from './pages/lodges/lodges.component';
import { ServicesComponent } from './pages/lodges/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      
    ],
  },
  // {
  //   path: 'logdes',
  //   component: LodgesComponent,
  //   children: [
  //     { path: '', component: LodgesComponent },
  //     { path: 'services', component: ServicesComponent },
  //   ],
  // },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

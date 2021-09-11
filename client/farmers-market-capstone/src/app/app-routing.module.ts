import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewBoothsComponent } from './view-booths/view-booths.component';

const fallBackRoute: Route = {
  path: '**',
  component: NotFoundComponent,
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-all-booths', component: ViewBoothsComponent },
  fallBackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

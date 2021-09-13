import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ViewAllBoothsComponent } from './view-all-booths/view-all-booths.component';
import { BoothSearchComponent } from './booth-search/booth-search.component';

const fallBackRoute: Route = {
  path: '**',
  component: NotFoundComponent,
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'view-all-booths', component: ViewAllBoothsComponent },
  { path: 'search-booths', component: BoothSearchComponent },
  fallBackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

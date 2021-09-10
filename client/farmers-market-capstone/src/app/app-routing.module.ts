import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const fallBackRoute: Route = {
  path: '**',
  component: NotFoundComponent,
};

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'home', component: HomeComponent }, fallBackRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

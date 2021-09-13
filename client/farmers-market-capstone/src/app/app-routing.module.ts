import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ViewAllBoothsComponent } from './view-all-booths/view-all-booths.component';
import { BoothSearchComponent } from './booth-search/booth-search.component';
import { BoothAddComponent } from './booth-actions/booth-add/booth-add.component';
import { MemberAddComponent } from './member-actions/member-add/member-add.component';
import { BoothEditComponent } from './booth-actions/booth-edit/booth-edit.component';
import { MemberEditComponent } from './member-actions/member-edit/member-edit.component';

const fallBackRoute: Route = {
  path: '**',
  component: NotFoundComponent,
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'view-all-booths', component: ViewAllBoothsComponent },
  { path: 'search-booths', component: BoothSearchComponent },
  { path: 'add-booth', component: BoothAddComponent },
  { path: 'add-member', component: MemberAddComponent },
  { path: 'edit-booth', component: BoothEditComponent },
  { path: 'edit-member', component: MemberEditComponent },
  fallBackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

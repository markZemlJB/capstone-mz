import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ViewAllBoothsComponent } from './view-all-booths/view-all-booths.component';
import { BoothListComponent } from './booth-list/booth-list.component';
import { BoothEditComponent } from './booth-actions/booth-edit/booth-edit.component';
import { BoothAddComponent } from './booth-actions/booth-add/booth-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoothDisplayComponent } from './booth-actions/booth-display/booth-display.component';
import { BoothSearchComponent } from './booth-search/booth-search.component';
import { MemberDisplayComponent } from './member-actions/member-display/member-display.component';
import { MemberAddComponent } from './member-actions/member-add/member-add.component';
import { MemberEditComponent } from './member-actions/member-edit/member-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    NotFoundComponent,
    HomeComponent,
    AdminComponent,
    ViewAllBoothsComponent,
    BoothListComponent,
    BoothEditComponent,
    BoothAddComponent,
    BoothDisplayComponent,
    MemberDisplayComponent,
    BoothSearchComponent,
    MemberAddComponent,
    MemberEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

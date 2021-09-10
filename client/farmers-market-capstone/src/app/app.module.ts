import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ViewBoothsComponent } from './view-booths/view-booths.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent, MainComponent, ViewBoothsComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

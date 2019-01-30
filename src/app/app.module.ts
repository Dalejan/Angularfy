import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**Components */
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

/**Angular material */
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistDetailComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

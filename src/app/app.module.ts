import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**Components */
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

/**Angular material */
import { MaterialModule } from './modules/material.module';
/**Spotify service */
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumItemComponent } from './components/album-item/album-item.component';

/**Avatar */
import { AvatarModule } from 'ngx-avatar';
import { NoimagePipe } from './pies/noimage.pipe';
import { DomseguroPipe } from './pies/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistDetailComponent,
    NavbarComponent,
    SearchComponent,
    AlbumItemComponent,
    NoimagePipe,
    DomseguroPipe,
    LoadingComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

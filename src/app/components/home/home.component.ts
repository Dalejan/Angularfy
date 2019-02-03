import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  releases: any[] = [];
  isLoading: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.releases = data;
      this.isLoading = false;
    });
  }

}

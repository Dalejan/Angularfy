import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  private artist: any;
  private topTracks: any;
  private isLoading: boolean;
  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }
  getArtist(id: string) {
    this.spotifyService.getArtsit(id).subscribe(data => {
      this.artist = data;
      this.isLoading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getArtistTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });
  }
}

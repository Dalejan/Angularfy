import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private artists: any;
  private tracks: any;
  isLoading: boolean;

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.isLoading = true;
  }

  ngOnInit() {

    this.spotifyService.getSearchData().subscribe((data: any) => {
      console.log(data);
      this.artists = data[0];
      this.tracks = data[1];
      this.isLoading = false;
    });
  }

  goToArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }

}

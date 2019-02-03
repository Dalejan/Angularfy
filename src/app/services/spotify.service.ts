import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject,  } from 'rxjs';
import {map} from 'rxjs/operators';
import { getUrlScheme } from '@angular/compiler';

@Injectable()
export class SpotifyService {
  private dataObs$ = new Subject();

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD0XgznLuX8smbDSbQT_BzJtmtdVD9cFP09KH3gno-4hB62BTfw6nkW_rF4_auKsWf7_ingPwmKaYg-6eU'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases = () => {
    return this.getQuery('browse/new-releases').pipe(
      map( data => {
        return data['albums'].items;
      }
    ));
  }

  getArtsit = (id: string) => {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks = (id: string, countryCode: string = 'us') => {
    return this.getQuery(`artists/${id}/top-tracks?country=${countryCode}`).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }

  getArtsitAndTracks = (term: string) => {
    return this.getQuery(`search?q=${term}&type=track%2Cartist&limit=10`).
    pipe(map(data => {
      return [data['artists'].items, data['tracks'].items];
    } )
    );
  }

  getSearchData() {
    return this.dataObs$;
  }

  updateSearchData(data: any) {
    this.dataObs$.next(data);
  }

}

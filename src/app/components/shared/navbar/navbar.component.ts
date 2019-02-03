import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sopotifyService: SpotifyService, private router: Router) { }

  ngOnInit() {
    this.handleNavbarScroll();
  }

  handleNavbarScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-70px';
      }
      prevScrollpos = currentScrollPos;
    };
  }

  openSearchBar() {
    console.log('openSearch');
  }
  goHome() {
    this.router.navigate(['home']);
  }

  search(term: string) {
    this.sopotifyService.getArtsitAndTracks(term).subscribe((data) => {
      this.sopotifyService.updateSearchData(data);
      this.router.navigate(['search']);
    }, error => {
      console.log(error);
    }
    );
  }
}

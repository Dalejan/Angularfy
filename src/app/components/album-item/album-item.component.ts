import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }

}

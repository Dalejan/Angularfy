import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angufy';
  strDevice = false;
  scrHeight: any;

  // Check resize window
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //       this.scrHeight = window.innerHeight;
  // }

}

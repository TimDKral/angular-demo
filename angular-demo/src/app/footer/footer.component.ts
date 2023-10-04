import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationStart, Event as NavigationEvent } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  test = "null123";


  constructor(private router: Router) { 

    router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          console.log(event.url);
          this.test = "URL Path: " + event.url;
        }
      });
  }
}

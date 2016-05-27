import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: 'src/components/about/index.html'
})

export class AboutUs implements OnInit {

  constructor() {
    console.info('About Us Page Mounted Successfully');
  }

  ngOnInit() {
  }

}

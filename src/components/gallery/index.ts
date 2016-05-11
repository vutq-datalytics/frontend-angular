import { Component } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: 'src/components/gallery/index.html'
})


export class Gallery {

  constructor() {
    console.info('Gallery Component Mounted Successfully');
  }

}

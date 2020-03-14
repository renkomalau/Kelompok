import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public pages: Array<{ title: string, thumb: string, description: string, link: any  }>;

  constructor() {
    this.pages = [
      {
        title: 'Diabetes',
        thumb: './assets/images/tab4/doctor-img2.png',
        description: 'Who we are. What we do. Why we’re here',
        link: "/about"
      },

    ];
  }
  slidebaru = {
    slidesPerView: 4.3 }
}

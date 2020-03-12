import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public pages: Array<{ title: string, thumb: string, description: string, link: any  }>;

  constructor() {
    this.pages = [
      {
        title: 'Diabetes',
        thumb: './assets/images/a.jpeg',
        description: 'Who we are. What we do. Why we’re here',
        link: "/about"
      },
      {
        title: 'Corona',
        thumb: './assets/images/b.jpeg',
        description: 'Drop us a line and get in touch we’d love to hear from you!',
        link: "/contact"
      },
      {
        title: 'Anemia',
        thumb: './assets/images/c.jpeg',
        description: 'Third party resources used by this app',
        link: "/technology"
      },
      {
        title: 'Depresi',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Diare',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Tuberkulosis',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'HIV/AIDS',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Chikungunya',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rubella',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'DBD',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rabies',
        thumb: 'assets/images/d.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      }

    ];
    
  }
  slidebaru = {
    slidesPerView: 4.3 }

}

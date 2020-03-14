import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public pages: Array<{ title: string, thumb: string, description: string, link: any  }>;
  public doctor: Array<{ id:string , name: string, description: string, link: any, image : string  }>;


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
        title: 'Tuberkulosis',
        thumb: 'assets/images/e.jpeg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'HIV/AIDS',
        thumb: 'assets/images/f.jpg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Chikungunya',
        thumb: 'assets/images/g.jpg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rubella',
        thumb: 'assets/images/h.jpg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'DBD',
        thumb: 'assets/images/i.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rabies',
        thumb: 'assets/images/j.jpg',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      }
    ];

    this.doctor = [
      {
        id : '1',
        name : 'Dr.Ade Senorita, Sp.PD',
        description : 'Dokter Spesialis Penyakit Dalam',
        link: "bnbcnas",
        image: 'assets/images/doctor/1.jpeg'
      },
      {
        id : '2',
        name : 'Dr.April Hidayat, Sp.B,FINACS, FICS',
        description : 'Dokter Spesialis Bedah',
        link: "bnbcnas",
        image: 'assets/images/doctor/2.jpg'
      },
      {
        id : '3',
        name : 'Dr.Lindayanti,Sp.PK',
        description : 'Dokter Spesialis Kesehatan Jiwa',
        link: "bnbcnas",
        image: 'assets/images/doctor/3.jpg'
      },
      {
        id : '4',
        name : 'Dr.Zalmah',
        description : 'Dokter Umum',
        link: "bnbcnas",
        image: 'assets/images/doctor/4.jpg'
      },
      {
        id : '5',
        name : 'Dr.Jamar Hasan, Sp.A',
        description : 'Dokter Spesialis Anak',
        link: "bnbcnas",
        image: 'assets/images/doctor/5.jpg'
      },
      {
        id : '6',
        name : 'Dr.Antonius Sianturi, Sp.P',
        description : 'Dokter Spesialis Paru',
        link: "bnbcnas",
        image: 'assets/images/doctor/6.jpg'
      },
      {
        id : '7',
        name : 'Dr.Ali Akbar, Sp.P',
        description : 'Dokter Spesialis Mata',
        link: "bnbcnas",
        image: 'assets/images/doctor/7.jpg'
      },
      {
        id : '8',
        name : 'Dr.Muhammad Wijaya, Sp.P',
        description : 'Dokter Spesialis Kulit',
        link: "bnbcnas",
        image: 'assets/images/doctor/8.jpg'
      },
    ];
    
  }
  slidebaru = {
    slidesPerView: 4.3 }

}

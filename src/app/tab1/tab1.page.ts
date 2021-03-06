import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public pages: Array<{ title: string, thumb: string, description: string, link: any  }>;
  public doctor: Array<{ id:string , name: string, description: string, link: any, image : string  }>;
  public date: any;


  constructor() {
    this.date = moment().format('LT'); 

    this.pages = [
      {
        title: 'Diabetes',
        thumb: './assets/images/diabetes.png',
        description: 'Who we are. What we do. Why we’re here',
        link: "/about"
      },
      {
        title: 'Corona',
        thumb: './assets/images/corona.png',
        description: 'Drop us a line and get in touch we’d love to hear from you!',
        link: "/contact"
      },
      {
        title: 'Anemia',
        thumb: './assets/images/anemia.png',
        description: 'Third party resources used by this app',
        link: "/technology"
      },
      {
        title: 'Depresi',
        thumb: 'assets/images/depresi.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Tuberkulosis',
        thumb: 'assets/images/batuk.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'HIV/AIDS',
        thumb: 'assets/images/hiv.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
      title: 'Malaria',
        thumb: 'assets/images/malaria.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rubella',
        thumb: 'assets/images/rabella.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Insomnia',
        thumb: 'assets/images/insomnia.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      },
      {
        title: 'Rabies',
        thumb: 'assets/images/rabies.png',
        description: 'The latest news updates from our Twitter account',
        link: "TweetsPage"
      }

    ];

    this.doctor = [
      {
        id : '1',
        name : 'Dr.Ade Senorita, Sp.PD',
        description : 'Spesialis Penyakit Dalam',
        link: "bnbcnas",
        image: 'assets/images/doctor/1.jpeg'
      },
      {
        id : '2',
        name : 'Dr.April Hidayat, Sp.B',
        description : 'Spesialis Bedah',
        link: "bnbcnas",
        image: 'assets/images/doctor/2.jpg'
      },
      {
        id : '3',
        name : 'Dr.Lindayanti,Sp.PK',
        description : 'Spesialis Kesehatan Jiwa',
        link: "bnbcnas",
        image: 'assets/images/doctor/3.jpg'
      },
      {
        id : '4',
        name : 'Dr.Zalmah',
        description : 'Umum',
        link: "bnbcnas",
        image: 'assets/images/doctor/4.jpg'
      },
      {
        id : '5',
        name : 'Dr.Jamar Hasan, Sp.A',
        description : 'Spesialis Anak',
        link: "bnbcnas",
        image: 'assets/images/doctor/5.jpg'
      },
      {
        id : '6',
        name : 'Dr.Antonius Sianturi, Sp.P',
        description : 'Spesialis Paru',
        link: "bnbcnas",
        image: 'assets/images/doctor/6.jpg'
      },
      {
        id : '7',
        name : 'Dr.Ali Akbar, Sp.P',
        description : 'Spesialis Mata',
        link: "bnbcnas",
        image: 'assets/images/doctor/7.jpg'
      },
      {
        id : '8',
        name : 'Dr.Muhammad Wijaya, Sp.P',
        description : 'Spesialis Kulit',
        link: "bnbcnas",
        image: 'assets/images/doctor/8.jpg'
      },
    ];
    
  }
  slidebaru = {
    slidesPerView: 2.7 }
}

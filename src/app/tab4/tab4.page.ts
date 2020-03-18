import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})



export class Tab4Page implements OnInit {
  contacts: Array <{
    contactName: string,
    contactAvatar: string,
    snippet: string,
    time: Date}>;

    public date:any;


  constructor() { 
    this.date = moment().format('LL');


    this.contacts= [
        {
          contactName: "Andre",
          contactAvatar:'assets/images/doctor/1.jpeg',
          snippet: "Listen, I've had a pretty messed up day...",
          time: new Date(Date.now())
        },
        {
          contactName: "Han",
          contactAvatar:'assets/images/doctor/2.jpg',
          snippet: "I've got enough on my plate as it is, and I...",
          time: new Date(Date.now())
        },
        {
          contactName: "Rey",
          contactAvatar:'assets/images/doctor/3.jpg',
          snippet: "You will remove these restraints and leave...",
          time: new Date(Date.now())
        },
        {
          contactName: "Luke",
          contactAvatar:'assets/images/doctor/4.jpg',
          snippet: "I feel the good in you, the conflict...",
          time: new Date(Date.now())
        }
      ];
    }
    ngOnInit() {
    }
  
  }
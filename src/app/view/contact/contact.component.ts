import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      document.getElementById("AboutSek").style.transform = " skew(19deg, 0deg) translateX(0%)";
      document.getElementById("AboutSek").style.opacity = "1";
    }, 800);

    setTimeout(() => {

      document.getElementById("ContactForm").style.opacity = "1";
    }, 1300);

  }

  ngOnInit(): void {
  }

  
}

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  windWidth = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.windWidth = window.innerWidth;
  if(this.windWidth >900){
      document.getElementById("AboutSek").style.transform = " skew(19deg, 0deg) translateX(0%)";
  document.getElementById("AboutSek").style.opacity = "1";
  }

}

  constructor() { 
    setTimeout(() => {
      if(window.innerWidth > 700){
        document.getElementById("AboutSek").style.transform = " skew(19deg, 0deg) translateX(0%)";
      }
      
      document.getElementById("AboutSek").style.opacity = "1";
    }, 800);

    setTimeout(() => {

      document.getElementById("ContactForm").style.opacity = "1";
    }, 1300);

  }

  ngOnInit(): void {
  }

  
}

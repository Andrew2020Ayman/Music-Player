import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      document.getElementById("Abouttitle").style.transform = "translateX(0%)";
      document.getElementById("Abouttitle").style.opacity = "1";
    }, 800);
    
setTimeout(() => {
      document.getElementById("AboutTxt").style.transform = "translateX(0%)";
      document.getElementById("AboutTxt").style.opacity = "1";
    }, 900);

    
   }

  ngOnInit(): void {
  }

}

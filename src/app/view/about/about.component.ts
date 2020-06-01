import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  LinkedUrl = "https://www.linkedin.com/in/andrew-ayman-068735152/";
  constructor( private router:Router) {
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
GoToLinked(){
  window.location.href = "https://www.linkedin.com/in/andrew-ayman-068735152/";
 /*  this.router.navigateByUrl('https://www.linkedin.com/in/andrew-ayman-068735152/') */
}
}

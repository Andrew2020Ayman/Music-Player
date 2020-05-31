import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  slideBool = true;
  constructor() { }

  ngOnInit() {
  }

  ControlSlide(){
    if(this.slideBool){
      $('.SlideMenu').css("width","41%");
      $('.SlideMenu').css("height","88%");
      $('.SlideMenu').css("top","-165px");

      $('.menuList').css("opacity","1");
      $('.menuList').css("transform","translateX(10%)");
      this.slideBool = false;
    }
    else if(!this.slideBool){
      $('.SlideMenu').css("width","19%");
      $('.SlideMenu').css("height","36%");
      $('.SlideMenu').css("top","-101px");

      $('.menuList').css("opacity","0");
      $('.menuList').css("transform","translateX(220%)");

      this.slideBool = true;
    }
  }
}

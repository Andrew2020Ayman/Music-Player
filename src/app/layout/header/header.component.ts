import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  windWidth = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.windWidth = window.innerWidth;
  if(this.windWidth >= 1600){
    $('.SlideMenu').css("width","15%");
    $('.SlideMenu').css("height","28%");
  }
  else if(this.windWidth< 1600){
    $('.SlideMenu').css("width","17%");
    $('.SlideMenu').css("height","31%");

  }

}
  slideBool = true;
  constructor() { }

  ngOnInit() {
  
  }

  ControlSlide(){
    let windWidth = window.innerWidth;
    console.log(windWidth);
    if(this.slideBool){
      console.log("Normal");
      if(windWidth < 1600){
        $('.SlideMenu').css("width","41%");
        $('.SlideMenu').css("height","88%");
        $('.SlideMenu').css("top","-165px");
  
        $('.menuList').css("opacity","1");
        $('.menuList').css("transform","translateX(10%)");
      }
      else  if(windWidth >= 1600){
        $('.SlideMenu').css("width","37%");
        $('.SlideMenu').css("height","77%");
        $('.SlideMenu').css("top","-165px");
  
        $('.menuList').css("opacity","1");
        $('.menuList').css("transform","translateX(10%)");
      }
      this.slideBool = false;
    }
   
    else if(!this.slideBool){
     this.closeMenu();
    }

  }

  closeMenu(){
    let windWidth = window.innerWidth;
    console.log(windWidth);
    
    if( !this.slideBool && windWidth < 1600){
      $('.SlideMenu').css("width","17%");
    $('.SlideMenu').css("height","31%");
    $('.SlideMenu').css("top","-101px");

    $('.menuList').css("opacity","0");
    $('.menuList').css("transform","translateX(220%)");

    }
    else if(!this.slideBool && windWidth >= 1600){
      $('.SlideMenu').css("width","15%");
    $('.SlideMenu').css("height","28%");
    $('.SlideMenu').css("top","-101px");

    $('.menuList').css("opacity","0");
    $('.menuList').css("transform","translateX(220%)");

    }
    
    this.slideBool = true;
  }
}

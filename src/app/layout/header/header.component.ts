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
  

   /* if(this.windWidth > 1000){
    $('.slideRes').css("width","200px");
    $('.slideRes').css("height","200px");
    $('.slideRes').css("top","-14%");
    $('.slideRes').css("right","-7%");

  } */
  /*
  else if(this.windWidth< 1600){
    $('.slideRes').css("width","17%");
    $('.slideRes').css("height","31%");

  } */

}
  slideBool = true;
  constructor() { }

  ngOnInit() {
  
  }


  ControlSlide(){
    let windWidth = window.innerWidth;
    console.log(windWidth);
    if(this.slideBool){
      
      
        if(windWidth <= 900){
        $('.slideRes').css("width","400px");
        $('.slideRes').css("height","400px");
        $('.slideRes').css("top","-16%");
        $('.slideRes').css("right","-12%");

        $('.menuList').css("opacity","1");
        $('.menuList').css("transform","translateX(10%)");
      }

     /* else if(windWidth < 1600){
        $('.slideRes').css("width","41%");
        $('.slideRes').css("height","88%");
        $('.slideRes').css("top","-165px");
  
        $('.menuList').css("opacity","1");
        $('.menuList').css("transform","translateX(10%)");
      }
      else  if(windWidth >= 1600){
        $('.slideRes').css("width","37%");
        $('.slideRes').css("height","77%");
        $('.slideRes').css("top","-165px");
  
        $('.menuList').css("opacity","1");
        $('.menuList').css("transform","translateX(10%)");
      } */
      this.slideBool = false;
    }
   
    else if(!this.slideBool){
     this.closeMenu();
    }

  }

  closeMenu(){
    let windWidth = window.innerWidth;
    console.log(windWidth);
    
    if( !this.slideBool && windWidth <= 900){
     
      $('.slideRes').css("width","120px");
      $('.slideRes').css("height","120px");
      $('.slideRes').css("top","-49px");
      $('.slideRes').css("right","-51px");

      $('.menuList').css("opacity","0");
      $('.menuList').css("transform","translateX(220%)");
    }
    
   /*
   else if( !this.slideBool && windWidth < 1600){
      $('.slideRes').css("width","17%");
    $('.slideRes').css("height","31%");
    $('.slideRes').css("top","-101px");

    $('.menuList').css("opacity","0");
    $('.menuList').css("transform","translateX(220%)");

    }
    else if(!this.slideBool && windWidth >= 1600){
      $('.slideRes').css("width","15%");
    $('.slideRes').css("height","28%");
    $('.slideRes').css("top","-101px");

    $('.menuList').css("opacity","0");
    $('.menuList').css("transform","translateX(220%)");

    }
    */
    this.slideBool = true;
  }
}

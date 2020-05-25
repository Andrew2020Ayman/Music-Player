import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides=['01', '02' , '03' ];
  
  imgsss =[
    "../../../assets/headphones_table.jpg",
    "../../../assets/guitar_close.jpg",
    "../../../assets/microphone_instrument.jpg",
  ];
  
  imgs=[
    {
      imgPath:"../../../assets/guitar_guitarist_musical_instrument_126078_3840x2160.jpg",
      Title:"Eddie van der Meer",
      des : "I'm a fingerstyle guitarist from the Netherlands."

    }, 
    {
      imgPath :"../../../assets/backiee-10054.jpg",
      Title :"Andre Soueid",
      des : "I am a violinist from Lebanon and I love doing cover songs and music videos."

    },
    {
      imgPath :"../../../assets/rbbUehl-saxophone-wallpaper.png",
      Title :"Graziatto",
      des :"Mexican saxophonist Available Worldwide"

    }
  ];

  customOptions: any = {
    loop: true,
    dots: false,
    navSpeed: 700,
    mouseDrag:true,
     margin:35,
     slideTransition:"fade",
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true, // Show next and prev buttons
    navText: [
      `<i class="fa fa-chevron-circle-left IconBtn" ></i> `,
      `<i class="fa fa-chevron-circle-right IconBtn" ></i> `
    ]
  };
  
  firstintro = true; 
  constructor( public router:Router) { 
   
  }



  ngOnInit() {

    /* ----------- */


    /*  */
    setTimeout(() => {
      document.getElementById("splash").style.opacity="1";
      document.getElementById("home").style.opacity="1";
    }, 2000);
  
   
    
    setTimeout(() => {
      document.getElementById("myVideo").style.opacity="0";
      document.getElementById("splash").style.opacity="0";
      document.getElementById("splash").style.display="none";
    }, 3570);
  
    setTimeout(() => {
      document.getElementById("myVideo").style.display="none";
      document.getElementById("myVideo").remove();
      document.getElementById("splash").remove();
      this.firstintro = false;
    }, 4100);

    this.customOptions = {
      loop: true,
      dots: false,
      navSpeed: 700,
    margin:35,
    animateIn: 'fadeIn', // add this
  animateOut: 'fadeOut' ,// and this
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: true, // Show next and prev buttons
      navText: [
        `<i class="fa fa-chevron-circle-left IconBtn" ></i> `,
        `<i class="fa fa-chevron-circle-right IconBtn" ></i> `
      ]
    };

    
  }

  GoToBand(BandId){
    setTimeout(() => {
      document.getElementById("closTrns").style.opacity="1";
      document.getElementById("closTrns").style.width="125%";
      document.getElementById("closTrns").style.height="193%";
      document.getElementById("closTrns").style.bottom="-55%";
      document.getElementById("closTrns").style.right="-6%";

      setTimeout(() => {
         this.router.navigateByUrl(`Band/${BandId}`);
      }, 550);
    }, 500);
    
   
  }
}

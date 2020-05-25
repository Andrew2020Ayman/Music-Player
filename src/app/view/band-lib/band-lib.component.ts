import { Component, OnInit, Inject } from '@angular/core';

import { Track } from 'ngx-audio-player'; 
import { async } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';


declare var $ :any;
 @Component({
  selector: 'app-band-lib',
  templateUrl: './band-lib.component.html',
  styleUrls: ['./band-lib.component.css']
})
export class BandLibComponent implements OnInit {
  degree=0;
  currentTrackID = 1;
  currentTrackString = "1";

  scroll=40;
 scrollTopBool = 0;
 Images = [
  "../../../assets/one.jpg" ,
  "../../../assets/two.jpg" ,
  "../../../assets/three.jpg" ,
  "../../../assets/four.jpg" ,
  "../../../assets/five.jpg" ,
  "../../../assets/six.jpg" ,
  "../../../assets/seven.jpg" ,
  "../../../assets/eight.jpg" 
];

public urL: string = "";
musicArtist = "";
msaapPlaylist;

andre = [
  {
      title: 'ASMAR',
      des:  'Andre X Jad',
      link: '../../../assets/andre/ASMAR - Andre X Jad.mp3'
  },
  {
    title: 'Bella Ciao ',
    des: 'La Casa De Papel',
    link: '../../../assets/andre/Bella Ciao - La Casa De Papel.mp3'
  },
  {
    title: 'Btaaref Shuur',
    des: 'Adham Nabulsi',
    link: '../../../assets/andre/Btaaref Shuur - Adham Nabulsi.mp3'
  },
  {
    title: 'DANCE MONKEY ',
    des: 'Tones and I',
    link: '../../../assets/andre/DANCE MONKEY - Tones and I.mp3'
  },
  {
    title: 'DESPACITO',
    des: 'Luis Fonsi ft. Daddy Yankee',
    link: '../../../assets/andre/DESPACITO - Luis Fonsi ft. Daddy Yankee.mp3'
  },
  {
    title: 'Karman Line',
    des: 'Andre X Jad',
    link: '../../../assets/andre/Karman Line - Andre X Jad.mp3'
  },
  {
    title: 'Kel el Qasayed',
    des: 'Marwan Khoury',
    link: '../../../assets/andre/Kel el Qasayed - Marwan Khoury.mp3'
  },
  {
    title: 'Mohim Jiddan',
    des: 'Hussain Al Jassmi',
    link: '../../../assets/andre/Mohim Jiddan - Hussain Al Jassmi.mp3'
  }
];

Eddie  = [
  {
      title: 'Believer',
      des:'Imagine Dragons',
      link: '../../../assets/Eddie van der Meer/Believer - Imagine Dragons.mp3'
  },
  {
    title: 'bad guy',
    des:'Billie Eilish',
    link: '../../../assets/Eddie van der Meer/Billie Eilish - bad guy.mp3'
  },
  {
    title: 'City of Stars',
    des:'Ryan Gosling & Emma Stone',
    link: '../../../assets/Eddie van der Meer/City of Stars  - Ryan Gosling & Emma Stone.mp3'
  },
  {
    title: 'My Heart Will Go On',
    des:'',
    link: '../../../assets/Eddie van der Meer/My Heart Will Go On.mp3'
  },
  {
    title: 'Perfect',
    des:'Ed Sheeran',
    link: '../../../assets/Eddie van der Meer/Perfect - Ed Sheeran.mp3'
  },
  {
    title: 'Shape of You',
     des:'Ed Sheeran',
    link: '../../../assets/Eddie van der Meer/Shape of You - Ed Sheeran.mp3'
  },
  {
    title: 'Unravel',
    des:'Tokyo Ghoul OP',
    link: '../../../assets/Eddie van der Meer/Unravel - Tokyo Ghoul OP.mp3'
  },
  {
    title: 'Wolves',
    des:'Selena Gomez & Marshmello',
    link: '../../../assets/Eddie van der Meer/Wolves - Selena Gomez & Marshmello.mp3'
  }
];

Graziatto  = [
          {
          title: 'A thousand years',
          des:'Christina Perri',
          link: '../../../assets/Graziatto/A thousand years - Christina Perri (sax cover) Graziatto.mp3'
          },
          {
          title: 'Attention',
          des:'Charlie Puth',
          link: '../../../assets/Graziatto/Attention - Charlie Puth (sax cover Graziatto).mp3'
          },
          {
          title: 'Childish Gambino',
          des:'Redbone',
          link: '../../../assets/Graziatto/Childish Gambino - Redbone (sax cover Graziatto).mp3'
          },
          {
          title: 'Aangerous woman',
          des:'Ariana Grande',
          link: '../../../assets/Graziatto/Dangerous woman - Ariana Grande (sax cover Graziatto).mp3'
          },
          {
          title: 'Faded',
          des:'Alan Walker',
          link: '../../../assets/Graziatto/Faded - Alan Walker (sax cover Graziatto).mp3'
          },
          {
          title: 'i dont wanna live forever',
          des:'Zayn Taylor Swift',
          link: '../../../assets/Graziatto/i dont wanna live forever - Zayn Taylor Swift (sax cover Graziatto).mp3'
          },
          {
          title: 'Love on the brain',
          des:'Rihanna',
          link: '../../../assets/Graziatto/Love on the brain - Rihanna (sax cover Graziatto).mp3'
          },
          {
          title: 'Rockabye',
          des:'',
          link: '../../../assets/Graziatto/Rockabye (Sax cover) Graziatto.mp3'
          }
];
private audio ;
played=true; 

constructor()
   { 
    this.urL = window.location.href;
  let urlLen = this.urL.length;
  let MusicID = this.urL[urlLen-1];
 
  
  if(MusicID === '0'){
    this.msaapPlaylist = this.Eddie;
    this.musicArtist = "Eddie van der Meer";
  }
  else if(MusicID === '1'){
    this.msaapPlaylist = this.andre;
    this.musicArtist = "Andre Soueid";
  }
  else  if(MusicID === '2'){
    this.msaapPlaylist = this.Graziatto;
    this.musicArtist = "Graziatto";
  }
    
  }

  ngOnInit() {


    //------------- Audio Progress------------------------------
  $('#audioPlayer')[0].addEventListener('timeupdate',function (){
      let curtime = parseInt( $('#audioPlayer')[0].currentTime, 10);
      $("#seek")[0].value = curtime;
       });

  $("#seek").bind("change", function() {
    $('#audioPlayer')[0].currentTime = $("#seek")[0].value;
    $("#seek")[0].max = $('#audioPlayer')[0].duration;
    
  });
//-------------------------------------------------------------------

  
    $('#button2').click(function(){    
      this.audio = this.document.getElementById("myAudio");
      this.audio.pause(); 
    }); 

   
    setTimeout(() => {
      document.getElementById("OpenTrans").style.opacity="1";
    document.getElementById("OpenTrans").style.width="5px";
    document.getElementById("OpenTrans").style.height="5px";
    document.getElementById("OpenTrans").style.bottom="48.8%";
    document.getElementById("OpenTrans").style.right="9.2%"; 
    setTimeout(() => {
      document.getElementById("OpenTrans").style.display="none"; 
    }, 900);
    }, 1);
    
  }
 

  GoToTrack(TrackID){
    let rotNm = TrackID - this.currentTrackID;
    
    let degreeRot = rotNm * 45;
    this.degree += degreeRot; 
    console.log(`degree :  ${ this.degree} `);
    if(degreeRot !== 0){
       this.currentTrackID = TrackID ;
       this.currentTrackString = this.currentTrackID.toString();
    document.getElementById("smallcircle").style.transform=` rotate(${this.degree}deg) `; 
    }
   
     console.log(this.currentTrackID);
  }


  
  OPenImgTrack()
  {
    this.played = true;
    $("#audioPlayer")[0].src = this.msaapPlaylist[this.currentTrackID-1].link;
    $("#audioPlayer")[0].play();
    console.log("Tracks Open");
    $('.PlayedTrack').css('background-color','black');
    $('.PlayedTrack').css('z-index','16');
   
    
      document.getElementById("PlayedImg").style.setProperty("width","51%","important");
      document.getElementById("PlayedImg").style.setProperty("height","100%","important");
      document.getElementById("PlayedImg").style.top = "0";
      document.getElementById("PlayedImg").style.left = "0";
  
    setTimeout(() => {
       $('.CurrentTrack').css('opacity','1');
    }, 1100); 
     
  }

  
  CloseTrack(){
      $("#audioPlayer")[0].pause();
    
   

     document.getElementById("PlayedImg").style.setProperty("width","38.2%","important");
    document.getElementById("PlayedImg").style.setProperty("height","44.5%","important");
    document.getElementById("PlayedImg").style.top = "32.8%";
    document.getElementById("PlayedImg").style.left = "13.8%";
    
   
     $('.PlayedTrack').css('background','transparent');

     setTimeout(async() => {
      $('.CurrentTrack').css('opacity','0');
   }, 100); 

     setTimeout(async() => {
      $('.PlayedTrack').css('z-index','0'); 
      
    }, 810); 
 
     this.played = false;
  }

  SlDown(){
    if(this.currentTrackID !== 8)
    {
      console.log(document.getElementById("BandTracksID").scrollTop);
      
       this.currentTrackID++;
      if(this.currentTrackID === 1){
        $('.PlayCont').css('top','46%');
      }
      else if (this.currentTrackID === 2){
        $('.PlayCont').css('top','56%');
      }
      else if (this.currentTrackID === 3){
        $('.PlayCont').css('top','66%');
      }
      else{
        
          document.getElementById("BandTracksID").scrollTop += 65;
      } 
     
      this.currentTrackString = this.currentTrackID.toString();
     let degreeRot =  45;
     this.degree += degreeRot; 
     console.log(`degree :  ${ this.degree} `);
    
     document.getElementById("smallcircle").style.transform=` rotate(${this.degree}deg) `; 
    }
   
  }

  SlUp(){
    if(this.currentTrackID > 1)
    {
      console.log(document.getElementById("BandTracksID").scrollTop);
       this.currentTrackID--;
      if(this.currentTrackID === 1){
        $('.PlayCont').css('top','46%');
      }
      else if (this.currentTrackID === 2){
        $('.PlayCont').css('top','56%');
      }
      else if (this.currentTrackID === 3){
        $('.PlayCont').css('top','66%');
      }
      else{
          document.getElementById("BandTracksID").scrollTop -= 65;
      } 

      
      this.currentTrackString = this.currentTrackID.toString();
     let degreeRot =  -45;
     this.degree += degreeRot; 
     console.log(`degree :  ${ this.degree} `);
    
     document.getElementById("smallcircle").style.transform=` rotate(${this.degree}deg) `; 
    }
   
  }
  

PlayClick(){
  if(this.played){
    $("#audioPlayer")[0].pause();
    this.played = false;
  }else{
     $("#audioPlayer")[0].play();
     this.played = true;
  }
}
SoundM(){
  if($("#audioPlayer")[0].volume>0){
    $("#audioPlayer")[0].volume -=0.1 ; 
  }
}
SoundP(){
  if($("#audioPlayer")[0].volume<1){
     $("#audioPlayer")[0].volume += 0.1 ;
  }
 
}


}

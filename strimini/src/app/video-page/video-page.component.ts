import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var videojs;

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit, AfterViewInit {
  url: string;
  idx: string;
  player: any;


  constructor() { }

  ngOnInit() {
    this.url = 'assets/videos/small.mp4';
    this.idx = '1';
  }

  ngAfterViewInit() {
    // ID with which to access the template's video element
    const el = 'video_' + this.idx;

    // // setup the player via the unique element ID
    this.player = videojs(document.getElementById(el), {}, function () {

      //   // Store the video object
      const myPlayer = this, id = myPlayer.id();

      //   // Make up an aspect ratio
      let aspectRatio = 264 / 640;

      //   // internal method to handle a window resize event to adjust the video player
      // function resizeVideoJS() {
      //   let width = document.getElementById(id).parentElement.offsetWidth;
      //   myPlayer.width(width).height(width * aspectRatio);
      // }

      //   // Initialize resizeVideoJS()
      // resizeVideoJS();

      //   // Then on resize call resizeVideoJS()
      // window.onresize = resizeVideoJS;
    });

    this.player.markers({
      markerStyle: {
        'width': '8px',
        'background-color': 'red'
      },
      markers: [
        { time: 1, text: "this" },
        { time: 2, text: "is" },
        { time: 3, text: "so" },
        { time: 4, text: "cool" }
      ]
    });
  }

}

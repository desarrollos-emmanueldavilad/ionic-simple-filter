import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  originalData: any;
  modifiedData: any;

  constructor(public router: Router) {
    this.originalData = [
      {name: 'chadwick', subscribers: 1200, avatar: 'http://placehold.it/100', chanel_url: 'https://www.youtube.com/watch?v=A-4CLa05tp0'},
      {name: 'chadwick1', subscribers: 1300, avatar: 'http://placehold.it/100', chanel_url: 'https://www.youtube.com/watch?v=A-4CLa05tp0'},
      {name: 'chadwick2', subscribers: 1400, avatar: 'http://placehold.it/100', chanel_url: 'https://www.youtube.com/watch?v=A-4CLa05tp0'},
      {name: 'chadwick3', subscribers: 1500, avatar: 'http://placehold.it/100', chanel_url: 'https://www.youtube.com/watch?v=A-4CLa05tp0'},

    ];
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData))

  }

  resetData(){
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  filterData(){
    this.modifiedData = this.modifiedData.filter((youtuber) =>{
      return youtuber.subscribers > 1300;
    });
  }

  mapData(){

    this.modifiedData = this.modifiedData.map((youtuber) =>{

      youtuber.name = youtuber.name.toUpperCase();
      youtuber.subscribers = youtuber.subscribers = 1200;
      return youtuber;
    });

  }
  reduceData(){

    let sum = this.modifiedData.reduce((previous, current) =>{

      let prevResuld = Number.isInteger(previous) ? previous : previous.subscribers;
      return prevResuld + current.subscribers;
    });

    console.log("sium", sum);

    let most  = this.modifiedData.reduce((previous, current) =>{
      let prevResuld = Number.isInteger(previous) ? previous : previous.subscribers;
      let max = Math.max(prevResuld, current.subscribers);

      return max;

      console.log(max)
    });
  
  }
}

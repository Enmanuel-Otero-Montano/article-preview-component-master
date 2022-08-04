import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger("shareNoShare", [
      state("noShare", style({
        backgroundColor: "hsl(0, 0%, 0%)"
      })),

      state("share", style({
        backgroundColor: "hsl(0, 0%, 100%)"
      })),

      transition('noShare => share', [
        animate('0.2s')
      ]),

      transition('share => noShare', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class MainComponent implements OnInit {

  hide:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  hideContainer(){
    if(this.hide === true){
      this.hide = false
    }else{
      this.hide = true
    }
    
  }

  back(){
    this.hide = true
  }

}

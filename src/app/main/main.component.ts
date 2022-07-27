import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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

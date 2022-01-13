import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {

  constructor() { }


  addToList(event){
    this.people.push(event)
  }


  people = []



}

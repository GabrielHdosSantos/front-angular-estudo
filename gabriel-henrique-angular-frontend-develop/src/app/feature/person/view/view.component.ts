import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {

  constructor() { }

  people = [{
    name: 'gabriel',
    age: '18',
    email: 'dgayadgyda@gmail'
  },
  {
    name: 'dadadadad',
    age: '23',
    email: 'dadadada@gmail'
  }
]



}

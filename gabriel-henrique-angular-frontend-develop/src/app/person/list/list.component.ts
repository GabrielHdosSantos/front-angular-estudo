import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  headers = ['name', 'age', 'email'];

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

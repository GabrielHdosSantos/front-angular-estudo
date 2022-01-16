import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit {

  constructor() { }

  ngOnInit():void{
  }


  addToList(event){
    this.people.push(event)
  }

  people = []



}

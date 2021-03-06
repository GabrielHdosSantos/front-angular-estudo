import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit {

  constructor(private activated:ActivatedRoute) { }

  ngOnInit():void{
    this.activated.data.subscribe((value) => {
      this.people = value.people;
    });
  }


  addToList(event){
    this.people.push(event)
  }

  people = []



}

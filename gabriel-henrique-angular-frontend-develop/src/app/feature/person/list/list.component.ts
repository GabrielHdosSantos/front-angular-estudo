import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  people;

  headers = ['name', 'age', 'email'];

  constructor(private peopleService: PeopleService){

  }

  deleteOnSubmit(id){
    this.peopleService.deletar(id).subscribe()
    }
  }



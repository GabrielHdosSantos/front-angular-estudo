import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit {

  constructor(private peopleService: PeopleService) { }

  ngOnInit(){
    this.peopleService.findAll().subscribe((value: any) =>{
       this.people = value
    });
  }


  addToList(event){
    this.people.push(event)
  }


  people = []



}

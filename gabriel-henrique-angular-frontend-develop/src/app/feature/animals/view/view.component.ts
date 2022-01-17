import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.data.subscribe((value) => {
      this.animals = value.animals;
    });
  }

  addToList(event){
    console.log('animais', this.animals)
    console.log('event', event)
    this.animals.push(event)
  }

  animals = []

}

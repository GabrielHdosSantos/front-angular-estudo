import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from 'src/app/core/animals/animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  animals = []

  headers = ['identification', 'specie']

  constructor(private animalsService:AnimalsService,
    private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.data.subscribe((value) => {
      this.animals = value.animals;
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  people = [];

  headers = ['name', 'age', 'email'];

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  editPerson(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.activated });
  }

  deleteOnSubmit(id) {
    this.peopleService.deletar(id).subscribe();
    this.people = this.people.filter((person) => person.id !== id);
  }
}

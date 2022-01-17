import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/app/core/animals/animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  animals = [];

  headers = ['identification', 'specie'];

  constructor(
    private animalsService: AnimalsService,
    private activated: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  deleteOnSubmit(id: number) {
    this.animalsService.delete(id).subscribe();
   this.animals = this.animals.filter((animal) => animal.id !== id);
  }

  editOnSubmit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.activated });
  }
}

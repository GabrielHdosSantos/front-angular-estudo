import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @Input()
  personId: number;

  @Output()
  submit = new EventEmitter();
  keys: string[];

  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      id: '',
      name: '',
      age: ['', [Validators.max(80)]],
      email: '',
      phone: '',
    });

    this.keys = Object.keys(this.formPerson.value).filter(
      (key) => key !== 'id'
    );

    if (this.personId) {
      this.peopleService.getOne(this.personId).subscribe((person) => {
        this.formPerson.patchValue(person);
      });
    }
  }

  clickOnSubmit() {
    if (this.formPerson.valid) {
      const person: Person = this.formPerson.value;
      this.peopleService.upsert(person).subscribe((value) => {
        if(this.personId){
          this.router.navigate(['people']);
        }
        this.submit.emit(value), this.formPerson.reset();
      });
    }
  }
}

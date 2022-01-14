import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/core/people/models/Person';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @Output()
  submit = new EventEmitter();
  keys: string[];

  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      name: '',
      age: ['', [Validators.max(80)]],
      email: '',
      phone: '',
    });

    this.keys = Object.keys(this.formPerson.value);
  }

  clickOnSubmit() {
    if (this.formPerson.valid) {
      const person: Person = this.formPerson.value;
      this.peopleService.add(person).subscribe((value) => {
        this.submit.emit(value), this.formPerson.reset();
      });
    }
  }
}

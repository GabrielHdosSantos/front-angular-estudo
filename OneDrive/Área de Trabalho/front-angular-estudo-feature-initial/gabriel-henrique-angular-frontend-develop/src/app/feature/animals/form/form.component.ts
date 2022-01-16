import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input()
  animalId: number;

  @Output()
  submit = new EventEmitter();
  keys: string[];

  formAnimals: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formAnimals = this.formBuilder.group({
      id: '',
      identification: '',
      specie: '',
    });

    this.keys = Object.keys(this.formAnimals.value).filter((key) => {
      key !== 'id';
    });
  }

  ClickOnSubmit() {
    this.submit.emit((value) => {
      this.formAnimals;
    });
  }
}

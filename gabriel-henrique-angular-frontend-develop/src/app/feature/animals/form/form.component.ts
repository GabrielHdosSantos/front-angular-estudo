import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/app/core/animals/animals.service';
import { Animal } from 'src/app/core/animals/models/Animal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  animalId: number;

  @Output()
  submit = new EventEmitter();
  keys: string[];

  formAnimals: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private animalService: AnimalsService,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formAnimals = this.formBuilder.group({
      id: '',
      identification: '',
      specie: '',
    });

    this.keys = Object.keys(this.formAnimals.value).filter(
      (key) => key !== 'id'
    );

    if (this.animalId) {
      this.animalService.findById(this.animalId).subscribe((animal) => {
        this.formAnimals.patchValue(animal);

      });
    }
  }

  redirectBack(){
    this.router.navigate([''], {relativeTo: this.activated})
  }

  back(){
    this.router.navigate([''], {relativeTo: this.activated})
  }


  ClickOnSubmit() {
    const animal: Animal = this.formAnimals.value;
    this.animalService.upsert(animal).subscribe((value) => {
      console.log('value', value)
      this.submit.emit(value);
      this.formAnimals.reset();

    });
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  @Output()
  submit = new EventEmitter()
  keys: string[]

  formPerson: FormGroup

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void{
    this.formPerson = this.formBuilder.group({
      name: '',
      age: '',
      email: '',
      phone: ''

    })

    this.keys = Object.keys(this.formPerson.value)
  }

  clickOnSubmit(){
    this.submit.emit(this.formPerson.value)
  }

}

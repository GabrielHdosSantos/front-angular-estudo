import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  formInput = [
    {
      label: 'name',
      id: 'name',
    },
    {
      label: 'age',
      id: 'age',
    },
    {
      label: 'email',
      id: 'email',
    },
  ];


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from './models/Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrL = `${environment.baseUrl}/people`

 private _person = new Subject<Person>();

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Person[]>(this.baseUrL);
  }

}



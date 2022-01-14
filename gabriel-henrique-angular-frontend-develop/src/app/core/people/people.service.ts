import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from './models/Person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private baseUrL = `${environment.baseUrl}/people`;
  private baseDelete = `${environment.baseUrl}/people/`

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Person[]>(this.baseUrL);
  }

  add(person: Person) {
    person.age = Number(person.age);
    return this.http.post<Person>(this.baseUrL, person);
  }

  deletar(id: number){
    return this.http.delete<void>(this.baseDelete + id)
  }

}

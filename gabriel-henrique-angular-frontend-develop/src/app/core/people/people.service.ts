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

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Person[]>(this.baseUrL);
  }

  getOne(id: number) {
    return this.http.get<Person>(`${this.baseUrL}/${id}`);
  }

  deletar(id: number) {
    return this.http.delete<void>(`${this.baseUrL}/${id}`);
  }

  upsert(person: Person) {
    person.age = Number(person.age);

    if (person.id) {
      return this.http.patch<Person>(`${this.baseUrL}/${person.id}`, person);
    } else {
      return this.http.post<Person>(this.baseUrL, person);
    }
  }
}

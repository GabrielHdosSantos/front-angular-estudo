import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from './models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService implements OnInit {
  private baseUrl = `${environment.baseUrl}/animals`;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  add(animal: Animal) {
    return this.httpClient.post(`${this.baseUrl}`, animal);
  }

  findById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.baseUrl}`);
  }

  filter(nome){
    return this.httpClient.get<Animal[]>(`${this.baseUrl}?q=${nome}`)
  }


  upsert(animal: Animal) {
    if (animal.id) {
      return this.httpClient.patch(`${this.baseUrl}/${animal.id}`, animal);
    } else {
      return this.httpClient.post(this.baseUrl, animal);
    }
  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

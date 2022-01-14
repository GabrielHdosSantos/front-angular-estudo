import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animals } from './models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService implements OnInit {
  private baseUrl = `${environment.baseUrl}/animals`;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  add(animal: Animals) {
    this.httpClient.post(`${this.baseUrl}`, animal);
  }

  getAll() {
    this.httpClient.get(`${this.baseUrl}`);
  }

  patch(animal: Animals) {
    this.httpClient.patch(`${this.baseUrl}/${animal.id}`, animal);
  }

  delete(id: number) {
    this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  v;
}

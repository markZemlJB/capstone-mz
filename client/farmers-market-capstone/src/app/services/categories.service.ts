import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //Organizations are considered "Categories"
  constructor(private http: HttpClient) {}

  //TODO: Make url match server url name and configure dynamic port if needed

  categoryApiUrl = 'http://localhost:8082/api/organizations';
  //errorMessage: string;

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  getCategory(): Observable<Category[]> {
    const results: Observable<Category[]> = this.http.get<Category[]>(this.categoryApiUrl);
    return results;
  }
}

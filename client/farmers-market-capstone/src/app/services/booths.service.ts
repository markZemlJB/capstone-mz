import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Booth } from '../models/booths';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root',
})
export class BoothsService {
  //Groups are considered "Booths"
  constructor(private http: HttpClient) {}

  //TODO: Make url match server url name and configure dynamic port if needed

  boothApiUrl = 'http://localhost:8082/api/groups';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  getBooths(): Observable<Booth[]> {
    const results: Observable<Booth[]> = this.http.get<Booth[]>(this.boothApiUrl);
    return results;
  }

  getBoothsByCategory(categoryId: string): Observable<Booth[]> {
    const results: Observable<Booth[]> = this.http.get<Booth[]>(`${this.boothApiUrl}/byorganization/${categoryId}`);
    return results;
  }

  getBoothMembersByBoothId(boothId): Observable<Member[]> {
    const results: Observable<Member[]> = this.http.get<Member[]>(`${this.boothApiUrl}/${boothId}/members/`);
    return results;
  }
}

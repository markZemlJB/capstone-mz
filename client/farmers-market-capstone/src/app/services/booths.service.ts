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

  getBoothById(boothId: number): Observable<Booth> {
    const results: Observable<Booth> = this.http.get<Booth>(`${this.boothApiUrl}/${boothId}`);
    return results;
  }

  getBoothMembersByBoothId(boothId: number): Observable<Member[]> {
    const results: Observable<Member[]> = this.http.get<Member[]>(`${this.boothApiUrl}/${boothId}/members/`);
    return results;
  }

  getBoothMemberById(boothId: number, memberId: number): Observable<Member> {
    const results: Observable<Member> = this.http.get<Member>(`${this.boothApiUrl}/${boothId}/members/${memberId}`);
    return results;
  }

  addNewBooth(requestBody): Observable<Booth> {
    return this.http.post<Booth>(this.boothApiUrl, requestBody, this.jsonContentTypeHeaders);
  }

  addNewMemberToBooth(boothId: number, requestBody): Observable<Member> {
    return this.http.post<Member>(`${this.boothApiUrl}/${boothId}/members`, requestBody, this.jsonContentTypeHeaders);
  }

  deleteBoothById(boothId: number): Observable<Booth> {
    const results: Observable<Booth> = this.http.delete<Booth>(`${this.boothApiUrl}/${boothId}`);
    return results;
  }

  deleteBoothMemberById(boothId: number, memberId: number): Observable<Member> {
    const results: Observable<Member> = this.http.delete<Member>(`${this.boothApiUrl}/${boothId}/members/${memberId}`);
    return results;
  }
}

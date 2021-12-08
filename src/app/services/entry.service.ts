import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../Entry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private apiUrl = 'http://localhost:5000/entries'

  constructor(private http: HttpClient) { }

  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.apiUrl);
  }
}

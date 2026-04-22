import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://cine-latino-backend-production.up.railway.app/api/movies';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(movie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  update(id: number, movie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, movie);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
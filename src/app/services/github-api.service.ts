import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(user:string): Observable<any>{
    const url = `${this.apiUrl}/users/${user}`
    return this.http.get(url)
  }
}

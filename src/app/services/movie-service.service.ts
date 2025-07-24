import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/movies")
  }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './model/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly httpClient: HttpClient) { }

  API_HOST = `http://localhost:3232`;

  getMovies(): Observable<Movie[]> {    
    return this.httpClient.get<Movie[]>(`${this.API_HOST}/movies`);
  }

  getMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.API_HOST}/movies/${movie.id}`);
  }

  insertMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(`${this.API_HOST}/movies`, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.patch<Movie>(`${this.API_HOST}/movies/${movie.id}`, movie);
  }

  deleteMovie(id: number) {
    return this.httpClient.delete<Movie>(`${this.API_HOST}/movies/${id}`);
  }
}

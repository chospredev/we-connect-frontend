import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/books.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  API_HOST = "http://localhost:3232";

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.API_HOST}/books`);
  }

  getBook(book: Book): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_HOST}/books/${book.id}`)
  }

  insertBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.API_HOST}/books`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.patch<Book>(`${this.API_HOST}/books/${book.id}`, book);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(`${this.API_HOST}/books/${id}`);
  }
}

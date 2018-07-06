import { Injectable } from '@angular/core';
import { Book } from  '../../model/book.interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private urlServer: string = 'http://localhost:5000';

  private books: Book[] = [];



  constructor(private http: HttpClient) { }



  

  getBook(id: number) {

    return this.http.get(this.urlServer + '/books/' + id);

  }



  getBooks() {

    // renvoie Observable, la souscription se fera côté composant

    return this.http.get(this.urlServer + '/books');

  }

  
}
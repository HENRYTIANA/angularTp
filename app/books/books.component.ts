import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  


  

  constructor(private booksService: BooksService) { }



  // Lifecycle hook, ngOnInit s'exécute au chargement du composant

  ngOnInit() {

    this.booksService

      .getBooks()

      
        
      });

  }



 



 



}

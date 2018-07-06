import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BooksService } from '../services/books.service';
import { switchMap } from 'rxjs/operators';

import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  @Input('data')book = {

  id: 0,
  title: "",

  author: "",

  publicationDate: "",

  available: "string",

  nbPages: 0,

  nbRent: 0



  }


  constructor(

    private router: Router,

    private activatedRoute: ActivatedRoute,

    private BooksService: BooksService

  ) { }



  ngOnInit() {

      }



}

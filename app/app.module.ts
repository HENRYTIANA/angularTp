import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { HeaderComponent } from './header/header.component';
import {BooksService} from './services/books.service'


const appRoutes: Routes = [

  {path: 'books', component: BooksComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'books/:id', component: BookComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    AuthorsComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),
  ],

  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

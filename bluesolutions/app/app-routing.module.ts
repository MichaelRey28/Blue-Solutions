import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'home-page', component: HomeComponent },
  { path: 'about-page', component: AboutComponent },
  { path: 'news-page', component: NewsComponent },

  { path: 'edit-book/:id', component: BookDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
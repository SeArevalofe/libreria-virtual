import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(book: Book) {
    this.bookService.addBook(book).then(() => {
      console.log('Book added successfully');
    }).catch(error => {
      console.error('Error adding book: ', error);
    });
  }

  goToBookDetails(book: Book) {
    this.router.navigate(['/book-detail', book.id]); // Asegúrate de que aquí esté "book-detail"
  }
  
}

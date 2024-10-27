import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id'); // Asegúrate de que el parámetro se llama 'id'
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(data => {
        this.book = data;
      });
    }
  }
}

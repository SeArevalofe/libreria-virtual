import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Book {
  id?: string; // El ID será proporcionado por Firestore
  title: string;
  author: string;
  image: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private collectionName = 'books'; // Nombre de la colección en Firestore

  constructor(private firestore: AngularFirestore) {}

  // Agregar un nuevo libro
  addBook(book: Book): Promise<any> {
    return this.firestore.collection(this.collectionName).add(book);
  }

  // Obtener todos los libros
  getBooks(): Observable<Book[]> {
    return this.firestore.collection<Book>(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Actualizar un libro
  updateBook(id: string, book: Partial<Book>): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(book);
  }

  // Eliminar un libro
  deleteBook(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  // BookService
  getBookById(id: string): Observable<Book | undefined> {
    return this.firestore.collection(this.collectionName).doc<Book>(id).valueChanges();
  }
  

  

  
}

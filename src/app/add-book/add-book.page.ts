import { Component } from '@angular/core';
import { BookService } from '../services/book.service'; // Importar el servicio
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage {
  book = { title: '', author: '', image: '', description: '' }; // Inicializa el objeto book

  constructor(private bookService: BookService, private navCtrl: NavController) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      this.book.image = e.target?.result as string;
    };
    
    reader.readAsDataURL(file);
  }

  // Método que se ejecuta cuando se envía el formulario
  submitBook() {
    this.bookService.addBook(this.book).then(() => {
      console.log('Libro guardado en Firebase');
      this.navCtrl.navigateBack('/home'); // Navegar de regreso a la página de inicio
    }).catch((error) => {
      console.error('Error al guardar el libro: ', error);
    });
  }

  
}

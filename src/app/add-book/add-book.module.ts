import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { IonicModule } from '@ionic/angular';
import { AddBookPage } from './add-book.page';
import { AddBookPageRoutingModule } from './add-book-routing.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de agregar esto
    IonicModule,
    AddBookPageRoutingModule
  ],
  declarations: [AddBookPage]
})
export class AddBookPageModule {}

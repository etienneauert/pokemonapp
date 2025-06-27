import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kaan',
  imports: [CommonModule],
  templateUrl: './kaan.html',
  styleUrl: './kaan.css'
})
export class Kaan {
  isPopupOpen = false;

  openPopup() {
    console.log('nils Button geklickt!');
    this.isPopupOpen = true;
    console.log('isPopupOpen ist jetzt:', this.isPopupOpen);
  }

  closePopup() {
    console.log('nils Popup wird geschlossen');
    this.isPopupOpen = false;
  }
}

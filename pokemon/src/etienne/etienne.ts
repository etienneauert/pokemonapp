import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etienne',
  imports: [CommonModule],
  templateUrl: './etienne.html',
  styleUrl: './etienne.css'
})
export class Etienne {
  isPopupOpen = false;

  openPopup() {
    console.log('etienne Button geklickt!');
    this.isPopupOpen = true;
    console.log('isPopupOpen ist jetzt:', this.isPopupOpen);
  }

  closePopup() {
    console.log('etienne Popup wird geschlossen');
    this.isPopupOpen = false;
  }
}

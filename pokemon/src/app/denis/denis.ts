import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-denis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './denis.html',
  styleUrls: ['./denis.css']
})
export class Denis {
  isPopupOpen = false;

  openPopup() {
    console.log('Denis Button geklickt!');
    this.isPopupOpen = true;
    console.log('isPopupOpen ist jetzt:', this.isPopupOpen);
  }

  closePopup() {
    console.log('Denis Popup wird geschlossen');
    this.isPopupOpen = false;
  }
}
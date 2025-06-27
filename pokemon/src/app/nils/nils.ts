import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nils.html',
  styleUrls: ['./nils.css']
})
export class Nils {
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

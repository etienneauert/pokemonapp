import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audi',
  standalone: true,  // Falls Sie standalone components verwenden
  imports: [CommonModule],
  templateUrl: './audi.html',
  styleUrls: ['./audi.css']
})
export class AudiComponent {
  isPopupOpen = false;

  openPopup() {
    console.log('Button clicked - before:', this.isPopupOpen);
    this.isPopupOpen = true;
    console.log('Button clicked - after:', this.isPopupOpen);
  }

  closePopup() {
    console.log('Closing popup');
    this.isPopupOpen = false;
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  @Input() texto: string = 'Presentación';
  
  // Emite un evento cuando el usuario hace clic en el div
  @Output() clickBoton = new EventEmitter<void>();

  alHacerClic() {
    this.clickBoton.emit();
  }
}

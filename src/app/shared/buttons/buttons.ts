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
  
  @Output() clickBoton = new EventEmitter<void>();

  alHacerClic() {
    this.clickBoton.emit();
  }
}

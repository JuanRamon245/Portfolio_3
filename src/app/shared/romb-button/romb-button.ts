import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-romb-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './romb-button.html',
  styleUrl: './romb-button.scss',
})
export class RombButton {
  @Input() isOpen: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}

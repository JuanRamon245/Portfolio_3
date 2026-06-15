import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-romb-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './romb-button.html',
  styleUrl: './romb-button.scss',
})
export class RombButton {
  isOpen: boolean = false;

  toggleButton() {
    this.isOpen = !this.isOpen;
  }
}

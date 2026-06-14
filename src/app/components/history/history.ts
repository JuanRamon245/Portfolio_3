import { Component } from '@angular/core';
import { Buttons } from "../../shared/buttons/buttons";

@Component({
  selector: 'app-history',
  imports: [Buttons],
  standalone: true,
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  public tuFuncionEnElComponentePadre() {
    console.log("Realizar algo");
  }
}

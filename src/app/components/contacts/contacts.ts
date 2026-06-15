import { Component } from '@angular/core';
import { Buttons } from "../../shared/buttons/buttons";

@Component({
  selector: 'app-contacts',
  imports: [Buttons],
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  public tuFuncionEnElComponentePadre() {
    console.log("Realizar algo");
  }
}

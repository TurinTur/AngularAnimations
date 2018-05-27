import { fade, fadeState, fadeState2 } from './../animations';
import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';   // Importar de /animations, no de /core

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [                             // Se ha movido todo a animation.ts
    /*trigger('fade', [                       // nombre de trigger, array
      ]),
    trigger('fade-state',[                // Ahora lo mismo pero  usando estados
      ]),
    trigger('fade-state2',[                // Mas abreviado
      ])  */     
      fade,fadeState,fadeState2            
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

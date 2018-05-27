import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [                             // primero se definen los triggers
    trigger('fade', [                       // nombre de trigger, array
        //state('',),
        transition('void => *', [              // void es el estado de 'elemento fuera de dom', * es default state
          style({ backgroundColor: 'yellow', opacity: 0}),                  // style aplica este estilo inmediatamente. keys son css properities
          //animate( 2000, style ({ backgroundColor: 'white', opacity: 1})) // animate lo aplica en el tiempo especificado
          animate( 2000)       // No hace falta el sytle destino porque blanco y opaco son los valores por defecto del default state. animate(x) deshará el style inicial (de arriba)
        ]),  
        transition('* => void', [           // transicion cuando eliminamos algo del DOM
          animate(2000, style({opacity:0}))
        ])
    ]),
    trigger('fadeout',[

    ])                     
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

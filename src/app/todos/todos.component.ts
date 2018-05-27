import { fade, fadeState, fadeState2, slide, bounceOutLeftAnimation } from './../animations';
import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, useAnimation } from '@angular/animations';   // Importar de /animations, no de /core

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [                               // Se ha movido todo a animation.ts
    /*trigger('fade', [                       // nombre de trigger, array
      ]),
    trigger('fade-state',[                    // Ahora lo mismo pero  usando estados
      ]),
    trigger('fade-state2',[                   // Mas abreviado
      ])  */     
      fade,fadeState,fadeState2, slide,
      trigger('todoAnimation',[
          transition(':enter', [
            style ({ opacity: 0}),              // cuando el item aparece en pantalla, esta ligeramente a la izquierda, y se coloca en su sitio
            animate(2000)
            ]),
        transition(':leave', [
          style ({ backgroundColor:'red'}),         // primero pasa de rojo a 'default' (blanco) en 1000ms, despues hace la animación  
          animate(1000),
          /*style ({ transform: 'translateX(-1000px)'}),    // puedes hacer varias animaciones una tras otra        
          animate(2000),
          style ({ transform: 'translateX(1000px)'}),          
          animate(2000)*/
          useAnimation(bounceOutLeftAnimation)      // reusamos una animación predefinida, por no repetir codigo
           ])
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

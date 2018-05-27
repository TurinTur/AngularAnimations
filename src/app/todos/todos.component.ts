import { fade, fadeState, fadeState2, slide, bounceOutLeftAnimation, fadeState3, slide2 } from './../animations';
import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, useAnimation, query, animateChild, group, stagger } from '@angular/animations';   // Importar de /animations, no de /core

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [                               // Se ha movido todo a animation.ts
    /*trigger('fade', [                       
      ]),
    trigger('fade-state',[                    
      ]),
    trigger('fade-state2',[                  
      ])  */     
  fade,fadeState,fadeState2, slide, fadeState3, slide2,

    trigger('todosAnimation',[
      transition(':enter', [               // Hay un problema, hay dos transiciones enter que se deberian ejecutar a la vez, pero se le da prioridad al padre (todosAnimation)...
        group([                             // Metiendo todo en un group, hará que las animaciones se ejecuten de forma simultánea
          query('h1', [                          // selector por elemento, clase, id, y tambien: :enter, :leave, :animating, @trigger, @*, :self
              style ({ transform: 'translateY(-20px)'}),            // Se aplica a cualquer h1 de la template dentro de todosAnimation 
              animate(1000)
          ]),                                 // ...el problema se arregla llamando al resto de animaciones con query tambien.
          query('@todoAnimation',animateChild())  // La animación ya está hecha abajo, solo hay que llamarla con animateChild()])
        ]) 
      ]) 
    ]),

    trigger('todoAnimation',[
        transition(':enter', [
          style ({ opacity: 0}),              // cuando el item aparece en pantalla, esta ligeramente a la izquierda, y se coloca en su sitio
          animate(2000)
          ]),
      transition(':leave', [
        style ({ backgroundColor:'red'}),         // primero pasa de rojo a 'default' (blanco) en 1000ms, despues hace la animación  
        animate(1000),
        /* style ({ transform: 'translateX(-1000px)'}),    // puedes hacer varias animaciones una tras otra        
        animate(2000),
        style ({ transform: 'translateX(1000px)'}),          
        animate(2000) */
        useAnimation(bounceOutLeftAnimation)      // reusamos una animación predefinida, por no repetir codigo
          ])
    ])  ,

    trigger('staggerTodosAnimation',[
      transition(':enter', [               
        group([                           
          query('h1', [                         
              style ({ transform: 'translateY(-20px)'}),          
              animate(1000)
          ]),                                
          query('@todoAnimation',
            stagger(100,animateChild()))        // Stagger, hace que cada item vaya animandose uno detrás de otro. solo se pueda usar en un query
        ]) 
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

  animationStarted($event){
     console.log($event)
  }

  animationDone($event){
    console.log($event)
  }
}

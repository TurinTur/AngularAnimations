import { trigger, transition, style, animate, state } from "@angular/animations";

export let fade =
    trigger('fade', [                       // nombre de trigger, array
        transition('void => *', [              // void es el estado de 'elemento fuera de dom', * es default state
          style({ backgroundColor: 'yellow', opacity: 0}),                  // style aplica este estilo inmediatamente. keys son css properities
          //animate( 2000, style ({ backgroundColor: 'white', opacity: 1})) // animate lo aplica en el tiempo especificado
          animate( 2000)       // No hace falta el sytle destino porque blanco y opaco son los valores por defecto del default state. animate(x) deshará el style inicial (de arriba)
        ]),  
        transition('* => void', [           // transicion cuando eliminamos algo del DOM
          animate(2000, style({opacity:0}))
        ])
    ]);

export let fadeState =
    trigger('fadeState',[                // Ahora lo mismo pero  usando estados
        state('void',style({ backgroundColor: 'yellow', opacity:0})),   // defino simplemente cual es el void state
        transition('void => *', [          
             animate( 2000)      
        ]),  
      transition('* => void', [       
        animate(2000)
      ])
    ]);

export let fadeState2 =
    trigger('fadeState2',[                // Mas abreviado
      state('void',style({ backgroundColor: 'yellow', opacity:0})),   // defino simplemente cual es el void state
      //transition('void => *, * => void', [            // Dos transiciones de una vez  
      transition(':enter, :leave', [                     // Alias de lo de arriba
      //transition('void <=> *', [                        // Lo mismo pero con otra notación
           animate( 2000)      
      ])
  ]) ;                  
  
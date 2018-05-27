import { trigger, transition, style, animate, state, keyframes, animation, useAnimation } from "@angular/animations";
                                                // OT: Hay una libreria llamada animate.css con efectos predefinidos bastante útil

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
  
export let bounceOutLeftAnimation = animation(            
    animate('1000ms 0.1s ease-out', keyframes([        // KEYFRAMES
        style({
            offset: 0.2,                                // Keyframe 1, al 20% de la animación
            opacity: 1,
            transform: 'translateX(30px)'
        }),
        style({
            offset: 1,                                  // key fram 2, al final de la animación (100%)
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ])) 
);

export let slide = trigger('slide', [
    transition(':enter', [
        style ({ transform: 'translateX(-10px)'}),          // cuando el item aparece en pantalla, esta ligeramente a la izquierda, y se coloca en su sitio
        animate(500)
    ]),
    /*transition(':leave', [
        //animate('500ms 0.1s ease-in', style ({ transform: 'translateX(-100%)'})) // cuando el item desaparece, se va totalmente a la izquierda
        // la duración tiene parametros extra si se usa un string: duracion, delay, easing.
        // easings: linear, ease-in, ease-out, ease-in-out. Usar http://cubic-bezier.com para custom. cubic-bezier(.17,.66,.9,.58)
        animate('500ms cubic-bezier(.17,.66,.9,.58)', style ({ transform: 'translateX(-100%)'}))
    ])*/
    transition(':leave', [                                   
       useAnimation(bounceOutLeftAnimation)
    ])
])
  

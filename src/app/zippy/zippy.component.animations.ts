import { trigger, state, transition, animate, style, useAnimation, query, animateChild, group, stagger } from '@angular/animations';  

 export const expandCollapse = trigger('expandCollapse',[
    state('collapsed', style({    // Custom state. Para manejar el elemento oculto.
        height: 0,
        //overflow: 'hidden', backgroundColor:'white',  // el color se puso para debuggear, el hidden está realmente en el CSS asi que sobra aqui
        paddingTop: 0, paddingBottom: 0,  // necesitamos sobreescribir el padding, porque tiene 20px en el css que estropeaban todo
        opacity: 0
    })),
    // state('expanded', style({     // Realmente no necesitamos este estado, porque cuando hacemos el animate(), este ya vuelve al estado por defecto
    //    height: '*',               // No sabemos que altura le tenemos que poner, con * Angular la calculará
    //    overflow: 'auto',
    //    padding: '*' 
    // })),

    // transition('collapsed => expanded',[
    //   animate('200ms ease-out')
    // ]),
    transition('collapsed => expanded',[        // Multi Step animation
      animate('200ms ease-out', style({         // 1ª animacion
        height: '*',
        paddingTop: '*', paddingBottom: '*'
      })),
      animate('400ms ease-out', style({        // 2ª animación
        opacity: 1
      }))
    ]),
    transition('expanded => collapsed',[
      animate('200ms ease-in')
    ])

  ])
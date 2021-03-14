import { Directive, ElementRef, Input } from '@angular/core';
 
@Directive({
  selector: '[appColorTitulo]'
})
export class ColorTituloDirective {
  @Input("appColorTitulo") appColorTitulo: string;


  constructor(
    private el: ElementRef,
  ) { 

    const interval = setInterval(_=>{
    let r=this.getRandomInt(0,255);
    let g=this.getRandomInt(0,255);
    let b=this.getRandomInt(0,255);  
this.el.nativeElement.style.color = `rgb(${r},${g},${b})`;
    },2)
  }

   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

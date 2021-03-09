import { Directive, ElementRef } from '@angular/core';
import { DataLocalService } from '../../servicios/data-local.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    public el: ElementRef,
    public localService: DataLocalService
    ) { 


  }

}

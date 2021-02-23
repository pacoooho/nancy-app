  import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core'

@Component({
  selector: 'svg4',
  templateUrl: './svg4.component.html',
  styleUrls: ['./svg4.component.css']
})
export class Svgs {
  @ViewChild('svg' ,{static: false}) svg: ElementRef;

  constructor(private renderer: Renderer2) {
  }
// https://www.concretepage.com/angular-2/angular-4-renderer2-example#
  onClickMe() {
    const path = this.renderer.createElement("path", 'http://www.w3.org/2000/svg')
    this.renderer.setAttribute(path, "d", 'M60,150 H50 V 50 Z')
    this.renderer.setAttribute(path, "style", "fill:#F00;")
     this.renderer.appendChild(this.svg.nativeElement, path)
  }
}
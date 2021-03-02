import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tuto1',
  templateUrl: './tuto1.component.html',
  styleUrls: ['./tuto1.component.scss'],
})
export class Tuto1Component implements OnInit {
  @ViewChild('gMovil', {static: false}) gMovil: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
   // this.renderer.setAttribute(this.gMovil.nativeElement, 'display', 'none');
// 

  }

}

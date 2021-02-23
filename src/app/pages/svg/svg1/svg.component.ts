import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2  
 } from '@angular/core';


@Component({
  selector: 'svg-widget',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent   {

  @ViewChild('tooltip', {static: false}) tooltip: ElementRef;

  constructor(private renderer: Renderer2) { }

  public mouseEnter($event, data): void {
    console.log("object");
    let circle = $event.target as HTMLElement;
    let coordinates = circle.getBoundingClientRect();
    let x = `${coordinates.left + 20}px`;
    let y = `${coordinates.top + 20}px`;
    this.renderer.setStyle(this.tooltip.nativeElement, 'left', x);
    this.renderer.setStyle(this.tooltip.nativeElement, 'top', y);
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'block');
    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', data);
  }

  public mouseLeave($event): void {
    console.log("object");

    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', '');
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'none');
  }
  
}
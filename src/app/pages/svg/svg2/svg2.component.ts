import {
  Component,
  
  
  Input,OnInit, Output
} from '@angular/core';

@Component({
  selector: 'g[app-svg2]',
  templateUrl: './svg2.component.html',
  styleUrls: ['./svg2.component.css']
})
export class Svg2Component implements OnInit {
   @Input() name_1 ;
  @Input() name_2 ;
  @Input()  circle_center_x;
  @Input()  r;
  dr =5;
  constructor() { }

  ngOnInit() {
    console.log(this.name_1,this.name_2,this.circle_center_x,this.r)
     
  }
  get(){
    console.log(this.r)
  }

}

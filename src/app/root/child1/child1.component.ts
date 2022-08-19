import { Component, EventEmitter, OnInit, Output } 
        from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  childinpit:any;
  constructor() { }
  ngOnInit(): void {
  }
  @Output() emitter:EventEmitter<string>
       = new EventEmitter<string>();
  
  emit(keyword:any){
      this.emitter.emit(keyword);
  }

}

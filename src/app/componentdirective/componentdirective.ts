import { Component, Directive, OnInit ,Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  // selector: 'app-componentdirective',
  selector: '[appComponentDirectives]',
  standalone:true
})
export class Componentdirective implements OnInit{

  @Input() backgroundColor:string='blue';
  @Input() width:string='200px';
  @Input() height:string='100px';

  constructor(private el:ElementRef,private renderer:Renderer2){
  }

  ngOnInit(): void {
    
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.backgroundColor);

    this.renderer.setStyle(this.el.nativeElement,'width',this.width);

    this.renderer.setStyle(this.el.nativeElement,'height',this.height);

    this.renderer.setStyle(this.el.nativeElement,'text-align','center');

    this.renderer.setStyle(this.el.nativeElement,'line-height',this.height)
  }

}

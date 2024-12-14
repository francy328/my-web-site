import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective implements OnInit {

  constructor(private el: ElementRef,private renderer: Renderer2) { }

@Input()
backColor: string = "trasparent";
@Input()
textColor : string = "red";


@HostBinding('style.backgroundColor')
backgroundColor : string = this.backColor;

@HostListener('mouseenter') mouseover(eventData: Event){
  this.backgroundColor = "darkorange";
}

@HostListener('mouseleave') mouseleave(eventData: Event){
  this.backgroundColor = this.backColor;
}

  ngOnInit(): void {
    this.applyStyles();
  }

  applyStyles() {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.backColor);
    this.renderer.setStyle(this.el.nativeElement,'color',this.textColor);
  }

}

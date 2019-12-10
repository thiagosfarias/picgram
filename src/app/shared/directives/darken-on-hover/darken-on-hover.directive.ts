import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]'
})
// tslint:disable-next-line: no-trailing-whitespace
export class DarkenOnHoverDirective {

    @Input() brightness = '65%';

    constructor(
        private el: ElementRef,
        // tslint:disable-next-line: deprecation
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
// tslint:disable-next-line: eofline
}

/**
 * Diretiva de máscara genérica em campo de texto.
 *
 * @author Thomaz Barreto
 * @since 0.0.4
 */

import { Directive, OnInit, HostListener, Input, ElementRef, Renderer} from '@angular/core';


@Directive({ selector: '[myFocus]' })

export class FocusDirective implements OnInit {

  @Input('myFocus') isFocused: boolean;

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    if (this.isFocused) {
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    }
  }
}

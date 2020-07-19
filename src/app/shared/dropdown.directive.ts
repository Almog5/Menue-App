import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  open: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.isOpen= this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}

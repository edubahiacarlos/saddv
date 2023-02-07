import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickEnter]'
})
export class ClickEnterDirective {
  @Output() appClickEnter: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  click(event: Event) : void {
    this.appClickEnter.emit(event);
  }

  @HostListener('keyup', ['$event'])
  enter(event: KeyboardEvent) : void {
    if (event.key !== 'Tab') {
      this.appClickEnter.emit(event);
    }
  }
}

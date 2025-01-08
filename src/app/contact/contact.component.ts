import { Component, ElementRef, ViewChild } from '@angular/core';
import { DecoratorComponent } from '../decorator/decorator.component';

@Component({
  selector: 'app-contact',
  imports: [DecoratorComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild(DecoratorComponent) decorator!: DecoratorComponent;
  ngAfterViewInit() {
    this.decorator.blueColor();
  }
  @ViewChild('btn') btn!: ElementRef;
  onSubmit(event: Event) {
    event.preventDefault();
  }
}

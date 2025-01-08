import { Component, ViewChild } from '@angular/core';
import { DecoratorComponent } from '../decorator/decorator.component';

@Component({
  selector: 'app-about',
  imports: [DecoratorComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @ViewChild(DecoratorComponent) decorator!: DecoratorComponent;
  ngAfterViewInit() {
    this.decorator.whiteColor();
  }
}

import { Component, ViewChild } from '@angular/core';
import { DecoratorComponent } from "../decorator/decorator.component";

@Component({
  selector: 'app-home',
  imports: [DecoratorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  @ViewChild(DecoratorComponent) decorator!: DecoratorComponent;
  ngAfterViewInit() {
    this.decorator.whiteColor();
  }
}

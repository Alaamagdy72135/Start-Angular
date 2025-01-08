import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-decorator',
  imports: [],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css',
})
export class DecoratorComponent {
  @ViewChildren('bgColored') bgColored!: QueryList<ElementRef>;
  @ViewChild('colored') colored!: ElementRef;
  blueColor() {
    this.bgColored.forEach((element) => {
      element.nativeElement.classList.add('blue-bgColor');
      element.nativeElement.classList.remove('white-bgColor');
    })
    this.colored.nativeElement.classList.add('blue-color');
    this.colored.nativeElement.classList.remove('white-color');
  }
  whiteColor() {
    this.bgColored.forEach((element) => {
      element.nativeElement.classList.remove('blue-bgColor');
      element.nativeElement.classList.add('white-bgColor');
    })
    this.colored.nativeElement.classList.remove('blue-color');
    this.colored.nativeElement.classList.add('white-color');
  }
}

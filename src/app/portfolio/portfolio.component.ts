import { DecoratorComponent } from './../decorator/decorator.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [DecoratorComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    './images/poert1.png',
    './images/port2.png',
    './images/port3.png',
    './images/poert1.png',
    './images/port2.png',
    './images/port3.png',
  ];
  openImage(image: string) {
    const modalContent = document.querySelector('.modal-content');
    modalContent!.innerHTML = `<img src="${image}" class="w-100" alt="">`;
  }
  
  @ViewChild(DecoratorComponent) decorator!: DecoratorComponent;
  ngAfterViewInit() {
    this.decorator.blueColor();
  }
  
}

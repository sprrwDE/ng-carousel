import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent implements AfterViewInit {

  slides: ElementRef[] = []

  @ViewChild('slideOne') slideOne!: ElementRef;
  @ViewChild('slideTwo') slideTwo!: ElementRef;
  @ViewChild('slideThree') slideThree!: ElementRef;
  @ViewChild('slideFour') slideFour!: ElementRef;
  @ViewChild('slideFive') slideFive!: ElementRef;
  @ViewChild('slideSix') slideSix!: ElementRef;


  constructor(private renderer: Renderer2) {

  }


  ngAfterViewInit(): void {
    this.slides.push(this.slideOne);
    this.slides.push(this.slideTwo);
    this.slides.push(this.slideThree);
    this.slides.push(this.slideFour);
    this.slides.push(this.slideFive);
    this.slides.push(this.slideSix);
  }

  nextSlide() {


    const firstElement = this.slides.shift();


    if (firstElement) {
      this.slides.push(firstElement);
    }

    for(let i = 0; i < this.slides.length; i++) {
      this.removeAllClasses(i);

      this.renderer.addClass(this.slides[0].nativeElement, 'active');
      this.renderer.addClass(this.slides[1].nativeElement, 'right');
      this.renderer.addClass(this.slides[this.slides.length - 1].nativeElement, 'left');

      i > 1 && i < this.slides.length - 1 ? this.renderer.addClass(this.slides[i].nativeElement, 'hidden') : null; 

    }
  }


  removeAllClasses(i: number) {
    this.renderer.removeClass(this.slides[i].nativeElement, 'active');
    this.renderer.removeClass(this.slides[i].nativeElement, 'left');
    this.renderer.removeClass(this.slides[i].nativeElement, 'right');
    this.renderer.removeClass(this.slides[i].nativeElement, 'hidden');
  }


  previousSlide() {

  }


}

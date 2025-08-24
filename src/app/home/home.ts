import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Slide {
  img: string;
  alt: string;
  title: string;
  submitLabel: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  current = 0;
  intervalMs = 5000;
  timer: any = null;
  isPaused = false;

  // Slides (use your assets or keep these URLs)
  slides: Slide[] = [
    { img: 'https://images.indianexpress.com/2025/03/B.Z.-Zameer-Ahmed-Khan-.jpg', alt: 'Slide 1', title: 'Register Your Project', submitLabel: 'Submit' },
    { img: 'https://realtynxtmedia201121.s3.ap-south-1.amazonaws.com/media/2023/10/6536158f1b00a_karnatakareratakesactiondeveloperurgedtotransferfund.jpg', alt: 'Slide 2', title: 'Project Enquiry', submitLabel: 'Send' },
    { img: 'https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/114234.WhatsApp-Image-2024-03-04-at-01.02.15_484b3f17.jpg', alt: 'Slide 3', title: 'Contact Authority', submitLabel: 'Contact' },
    { img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/zameer-ahmed-khan-031629709-16x9.png?VersionId=I1Pi8YmNp30tUwpSP5.pY4wFhjTVV8o7&size=690%3A388', alt: 'Slide 4', title: 'Report an Issue', submitLabel: 'Report' }
  ];

  // Indicators derived from slides length
  get indicators(): number[] {
    return this.slides.map((_, i) => i);
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  goToSlide(i: number) {
    const total = this.slides.length;
    this.current = (i + total) % total;
    this.resetTimer();
  }

  nextSlide() {
    this.goToSlide(this.current + 1);
  }

  prevSlide() {
    this.goToSlide(this.current - 1);
  }

  startTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.isPaused) this.nextSlide();
    }, this.intervalMs);
  }

  resetTimer() {
    this.startTimer();
  }

  pause() { this.isPaused = true; }
  resume() { this.isPaused = false; }

  onSubmit(formId: string) {
    alert(`Form ${formId} submitted (demo). Replace with backend call.`);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prevSlide();
    if (event.key === 'ArrowRight') this.nextSlide();
  }
}

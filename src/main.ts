import 'zone.js/dist/zone';
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>Count {{count()}}</div>
    <div>Double {{double()}}</div>
    <button (click)="changeCount()">Change Count</button>
  `,
})
export class App {
  count = signal(0);
  double = computed(() => this.count() * 2);

  public changeCount() {
    this.count.set(5);
  }
}

bootstrapApplication(App);

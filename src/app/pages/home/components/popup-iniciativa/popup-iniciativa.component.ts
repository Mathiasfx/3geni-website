import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

const POPUP_DELAY_MS = 2000;

@Component({
  selector: 'app-popup-iniciativa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-iniciativa.component.html',
  styleUrl: './popup-iniciativa.component.scss',
})
export class PopupIniciativaComponent implements OnInit, OnDestroy {
  isVisible = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      this.isVisible = true;
    }, POPUP_DELAY_MS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  close(): void {
    this.isVisible = false;
  }
}

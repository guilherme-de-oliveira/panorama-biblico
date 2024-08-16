import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DataService, Slide } from '../services/data.service';
import { chevronForward, chevronBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-slide.page.html',
  styleUrls: ['./view-slide.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote, IonButton, RouterLink],
})
export class ViewSlidePage implements OnInit {
  public slide!: Slide;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle, chevronBack, chevronForward });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.slide = this.data.getSlidesById(parseInt(id, 10));
    console.log(this.slide)
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return 'Menu';
  }
}

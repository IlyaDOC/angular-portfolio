import {Component, inject, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';
import {AboutItem} from '../../../types/about-item.type';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  public isRight: boolean = false;
  // Получаем данные об образовании
  private aboutService = inject(AboutService);
  public aboutItems = this.aboutService.aboutItems;

  constructor() {

  }

  ngOnInit() {

  }
}

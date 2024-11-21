import { Injectable } from '@angular/core';
import {AboutItem} from '../../types/about-item.type';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutItems_: AboutItem[] = [
    {
      date: '2019',
      title: 'ПМГУМУ им. И.М. Сеченова',
      description: 'Высшее медицинское образование по специальности лечебное дело'
    },
    {
      date: '2021',
      title: 'РНИМУ им. Н.И. Пирогова',
      description: 'Ординатура по специальности травматология-ортопедия'
    },
    {
      date: '2022',
      title: 'Stepik',
      description: 'Поколение Python": курс для начинающих'
    },
    {
      date: '2022',
      title: 'Stepik',
      description: 'Web-технологии: начальный уровень'
    },
    {
      date: 'c 2022 по 2024',
      title: 'Онлайн школа Айтилогия',
      description: 'Обучение по курсу «Frontend-разработчик»'
    },
    {
      date: '2023',
      title: 'Stepik',
      description: 'JavaScript для начинающих'
    },
    {
      date: '2023',
      title: 'Stepik',
      description: 'Фундаментальный JavaScript'
    },
  ];

  constructor() { }

  get aboutItems(): AboutItem[] {
    return this.aboutItems_;
  };
}

import { Injectable } from '@angular/core';
import {ProjectItemType} from '../../types/project-item.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects_: ProjectItemType[] = [
    {
      image: 'sushi.png',
      title: 'Проект SuperSushi',
      description: 'HTML, CSS',
      link: 'https://ilyadoc.github.io/sushi-shop/'
    },
    {
      image: 'dashboard.png',
      title: 'Проект Dashboard',
      description: 'HTML, CSS, Flexbox',
      link: 'https://ilyadoc.github.io/dashbord/'
    },
    {
      image: 'teashop.png',
      title: 'Проект Teashop',
      description: 'HTML, CSS, Jquery, Bootstrap, Slick-slider, WOW-animate',
      link: 'https://ilyadoc.github.io/teashop/'
    },
    {
      image: 'macaroons.png',
      title: 'Проект Macaroons',
      description: 'HTML, CSS, Jquery, CSS-animation',
      link: 'https://ilyadoc.github.io/macaroonsshop/'
    },
    {
      image: 'boomburger.png',
      title: 'Проект Boomburger',
      description: 'HTML, CSS, Jquery, WOW-animate, Slick-slider',
      link: 'https://ilyadoc.github.io/boomburger/'
    },
    {
      image: 'homework.png',
      title: 'Проект HomeWork',
      description: 'HTML, CSS, JS, RegExp, LocalStorage',
      link: 'https://ilyadoc.github.io/HomeWorks/'
    },
    {
      image: 'it-storm.png',
      title: 'Проект ItStorm',
      description: 'HTML, SCSS, Angular, Angular Material, RxJs, Angular Routing, Reactive Forms, Owl-Carousel. Backend: NodeJS',
      link: 'https://github.com/IlyaDOC/it-storm/tree/master'
    },
  ];

  constructor() { }

  get projects(): ProjectItemType[] {
    return this.projects_;
  }
}

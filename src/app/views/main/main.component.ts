import {Component} from '@angular/core';
import {ProjectItemType} from '../../types/project-item.type';
import {SkillType} from '../../types/skill.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public projects: ProjectItemType[] = [
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

  public skills: SkillType[] = [
    {
      name: 'HTML',
      level: 'advanced'
    },
    {
      name: 'CSS, SASS',
      level: 'advanced'
    },
    {
      name: 'Javascript',
      level: 'regular'
    },
    {
      name: 'TypeScript',
      level: 'regular'
    },
    {
      name: 'Jquery',
      level: 'beginner'
    },
    {
      name: 'Bootstrap',
      level: 'regular'
    },
    {
      name: 'GIT',
      level: 'regular'
    },
    {
      name: 'Webpack',
      level: 'beginner'
    },
    {
      name: 'Gulp',
      level: 'regular'
    },
    {
      name: 'Angular',
      level: 'regular'
    },
  ];

  public additionalSkills = [
    {name: 'Работа с хостингом'},
    {name: 'Адаптивная верстка'},
    {name: 'Чтение тех. документации на английском'},
    {name: 'B1 english'},
    {name: 'Figma, Photoshop'},
  ];

  events = [
    {
      date: '2019',
      title: 'ПМГУМУ им. И.М. Сеченова',
      details: 'Высшее медицинское образование по специальности лечебное дело.'
    },
    {
      date: '2019',
      title: 'ПМГУМУ им. И.М. Сеченова',
      details: 'Высшее медицинское образование по специальности лечебное дело.'
    },
    {
      date: '2019',
      title: 'ПМГУМУ им. И.М. Сеченова',
      details: 'Высшее медицинское образование по специальности лечебное дело.'
    },
  ];
}

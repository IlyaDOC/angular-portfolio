import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterOutlet} from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TechnologiesItemComponent } from './components/technologies-item/technologies-item.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProjectCardComponent,
    TechnologiesItemComponent
  ],
  exports: [
    ProjectCardComponent,
    TechnologiesItemComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SharedModule { }

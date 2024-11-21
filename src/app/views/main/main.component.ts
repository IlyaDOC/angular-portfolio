import {Component, inject} from '@angular/core';
import {ProjectItemType} from '../../types/project-item.type';
import {SkillType} from '../../types/skill.type';
import {ProjectsService} from '../../shared/services/projects.service';
import {SkillsService} from '../../shared/services/skills.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{

  // Получаем все проекты из ProjectService
  private projectService = inject(ProjectsService);
  public projects = this.projectService.projects as ProjectItemType[];

  // Получаем все навыки из SkillService
  private skillService = inject(SkillsService);
  public skills = this.skillService.skills as SkillType[];

  // Получаем дополнительные навыки из SkillService
  public additionalSkills: {name: string}[] = this.skillService.additionalSkills;


}

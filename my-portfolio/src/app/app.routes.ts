import { Routes } from '@angular/router';
import path from 'node:path';
import { title } from 'node:process';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
    path:'home',
    title:'header component',
    component:MaincontentComponent,
   },
   {
    path:'',
    title:'header component',
    component:MaincontentComponent,
   },
   {
    path:'about',
    title:'aboutme component',
    component:AboutmeComponent,
   },
   {
    path:'skills',
    title:'skills component',
    component:SkillsComponent,
   },
  
];


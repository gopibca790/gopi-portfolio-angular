import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

  userName:string= "gopinath murugan";
  course:string="Frontend Developer";
}

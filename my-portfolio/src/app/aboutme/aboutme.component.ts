import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  degree:string="BCA"
  skills:string="HTML, CSS, JavaScript, and Angular 2.0,"
  name:string="GOPINATH M"
  possition:string="Frontend Developer"
}

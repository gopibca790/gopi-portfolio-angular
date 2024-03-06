import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  username:string="Gopinath"
}

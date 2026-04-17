import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navegacao',
  imports: [MatSidenavModule, RouterLink, RouterModule, MatIconModule],
  templateUrl: './navegacao.html',
  styleUrl: './navegacao.css',
  
})
export class Navegacao {}

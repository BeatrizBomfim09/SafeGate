import { Component } from '@angular/core';
import { BotaoConfirmar } from "../../shared/botao-confirmar/botao-confirmar";

@Component({
  selector: 'app-home',
  imports: [BotaoConfirmar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

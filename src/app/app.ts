import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './epi-list/epi-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // protected readonly title = signal('Aula de angular, turma 2026.1');
  titulo = "Sistema de controle de EPIs";
  subtitulo = "Gestão de segurança do trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individual";
  // professor = "Elias Santos";
}

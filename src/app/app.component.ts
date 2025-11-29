import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'criacao-cards';

  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanTye(meuInput: string) {
    this.cardPlanType = meuInput;
  }
}

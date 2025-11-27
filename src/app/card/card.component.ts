import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @ts-ignore
  plano: any = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  };

  @Input('planType') planType: string = '';
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;

  buttonClicked(valueEmitted: boolean) {
    if(valueEmitted) {
      console.log('buttonClicked')
    }
  }
}

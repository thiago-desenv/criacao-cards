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

  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;

  private _planType: string = '';

  @Input('planType') set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  buttonClicked(valueEmitted: boolean) {
    if(valueEmitted) {
      console.log('buttonClicked')
      console.log('planType', this.planType);
    }
  }
}

import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: `
  //   <div class="card-button">Adquirir</div>
  // `,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input({ transform: booleanAttribute}) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}

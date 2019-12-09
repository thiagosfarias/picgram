import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent {
    // tslint:disable-next-line: no-inferrable-types
    @Input() title: string = '';
}

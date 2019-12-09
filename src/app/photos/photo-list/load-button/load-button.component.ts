import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

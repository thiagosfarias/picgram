import { Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onTyping = new EventEmitter<string>();
    debounce: Subject<string> = new Subject<string>();
    // tslint:disable-next-line: no-inferrable-types
    @Input() value: string = '';

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter));
    }
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  // tslint:disable-next-line: no-inferrable-types
  hasMore: boolean = true;
  currentPage = 1;
  username = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }
  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.userName;
    // tslint:disable-next-line: no-string-literal
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
}

ngOnDestroy(): void {
    this.debounce.unsubscribe();
}

load() {
    this.photoService
        .listFromUserPaginated(this.username, ++this.currentPage)
        .subscribe(photos => {
            this.photos =  this.photos.concat(photos);
            if (!photos.length) {
              this.hasMore = false;
            }
        });
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];
  filter = '';
  // tslint:disable-next-line: no-inferrable-types
  hasMore: boolean = true;
  currentPage = 1;
  username = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.userName;
    // tslint:disable-next-line: no-string-literal
    this.photos = this.activatedRoute.snapshot.data['photos'];
}

load() {
    this.photoService
        .listFromUserPaginated(this.username, ++this.currentPage)
        .subscribe(photos => {
            this.filter = '';
            this.photos =  this.photos.concat(photos);
            if (!photos.length) {
              this.hasMore = false;
            }
        });
}


}

import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[appPhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit{

  @Input() ownedPhoto: Photo;

  constructor(
      private element: ElementRef<any>,
      private renderer: Renderer, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser()
                    .subscribe(user => {
                      // tslint:disable-next-line: triple-equals
                      if (!user || user.id != this.ownedPhoto.userId) {
                        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                      }
                    });
  }


}

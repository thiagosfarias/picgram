import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoCommentsComponent } from '../photo/photo-comments/photo-comments.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  declarations: [
      PhotoDetailComponent,
      PhotoCommentsComponent,
      PhotoOwnerOnlyDirective
  ],
  exports: [
      PhotoDetailComponent,
      PhotoCommentsComponent],
  imports: [
      CommonModule,
      PhotoModule,
      RouterModule,
      ReactiveFormsModule,
      VMessageModule,
      ShowIfLoggedModule
  ]
})

export class PhotoDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CardModule } from '../shared/components/card/card.module';


@NgModule({
    imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
        CommonModule
    ]
})
export class PhotosModule {}

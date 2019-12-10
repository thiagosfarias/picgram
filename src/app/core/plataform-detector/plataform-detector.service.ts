import { Injectable, PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({providedIn: 'root'})
export class PlataformDetectorService {

  constructor(@Inject( PLATFORM_ID) private plataformID: string) {}

  isPlataformBrowser() {
    return isPlatformBrowser(this.plataformID);
  }

}

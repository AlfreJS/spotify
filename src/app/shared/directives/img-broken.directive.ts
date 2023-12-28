import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  @HostListener('error') handlerError():void{
    const elNative = this.elHost.nativeElement
    elNative.src = "https://img.freepik.com/psd-gratis/nota-musica-negro_23-2150588291.jpg?w=740&t=st=1703273760~exp=1703274360~hmac=5d841232a6afb58dda9b1ba12e83c8f9b4164508f3f03660cd7fe7cc12133c01"
  }

  constructor(private elHost : ElementRef) { }

}

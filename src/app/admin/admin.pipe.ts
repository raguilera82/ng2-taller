import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'admin'
})
export class AdminPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let msg: string;

    if (value) {
      msg = 'Es admin';
    }else {
      msg = 'No es admin';
    }
    return msg;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custampipe'
})
export class CustampipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

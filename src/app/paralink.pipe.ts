import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paralink'
})
export class ParalinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

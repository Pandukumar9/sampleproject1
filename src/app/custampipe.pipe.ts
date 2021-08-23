import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custampipe'
})
export class CustampipePipe implements PipeTransform {

  transform(str: any): any {
    let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
    let final = str;
    match.map((url:string) => {
      final = final.replace(
        url,
        '<a href="' + url + '" target="_BLANK">' + url + '</a>'
      );
    });
    return final;
  }

}

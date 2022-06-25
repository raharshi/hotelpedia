import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!value) return null;
    if (!args) return value;
    args.forEach((arg: any) => {
      if (arg != null && arg.toString().length > 0) {
        arg = arg.toLowerCase();
        value = value.filter(function (data: any) {
          return JSON.stringify(data).toLowerCase().includes(arg);
        })
      }
    });
    return value;
  }

}

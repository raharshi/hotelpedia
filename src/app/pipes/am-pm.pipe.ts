import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amPm'
})
export class AmPmPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let times: string[] = value.split('-');

    let result: string = "";
    times.forEach((res) => {
      result = result != "" ? result + " - " : result;
      if (!res.toLowerCase().includes("am") && !res.toLowerCase().includes("pm")) {
        let hours = Math.abs(parseInt(res.split(':')[0]));
        let minutes = Math.abs(parseInt(res.split(':')[1]));
        if (hours == 0) {
          result += (12).toString() + " : " + res.split(':')[1] + " am "
        }
        else if (hours > 12) {
          result += (hours - 12).toString() + " : " + res.split(':')[1] + " pm "
        } else if (hours == 12 && minutes > 0) {
          result += (hours).toString() + " : " + res.split(':')[1] + " pm "
        }
        else {
          result += (hours).toString() + " : " + res.split(':')[1] + " am "
        }
      } else {
        result += res;
      }
    })

    return result;
  }

}

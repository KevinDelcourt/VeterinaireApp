import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length < limit || limit <= 3) {
      return value;
    }
    return value.substr(0, limit - 3) + '...';
  }

}

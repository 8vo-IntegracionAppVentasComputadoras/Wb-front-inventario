import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatId'
})
export class FormatIdPipe implements PipeTransform {

  transform(value: number, length: number = 7): string {
    const strValue = value.toString();
    const padding = length - strValue.length;
    return padding > 0 ? '0'.repeat(padding) + strValue : strValue;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'JobOpeningPipe' })
export class JobOpeningPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        if (value == 1)
            return 'Active';
        else
            return 'Inprogresss'
    }
}
import { Pipe, PipeTransform } from '@angular/core';

/**
* @description transforms movie's duration (min) to hour-minute format
* @param { number | undefined } duration
* @returns { string | null } duration hour-minute format 
*/
@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number | undefined): string | null {
    if(duration){
      const hour = Math.floor(duration/60);
      const minutes = duration - hour*60; 

      return minutes > 0 ? `${hour}h${minutes}` : `${hour}h`; 
      
    }else{
      return null
    }
   
  }

}

import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

  let pipe : DurationPipe; 

  beforeEach(() => {
    pipe = new DurationPipe(); 
  })
  
  it('should transform minutes duration into the default hours-minute format', () =>{
 
    const duration = 120; 
    expect(pipe.transform(duration)).toBe('2h'); 
  })
  it('should return null duration when duration is undefined', () =>{
    const duration = undefined; 
    expect(pipe.transform(duration)).toBe(null); 
  })
});

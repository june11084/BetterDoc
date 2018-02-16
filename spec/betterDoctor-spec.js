import { Age } from './../js/age.js';

describe('yearsToSeconds', function() {
  it('test', function() {
    let age = new Age();
    const seconds = 31536000;
    expect(age.yearsToSeconds(1)).toEqual(seconds);
  });
});
});

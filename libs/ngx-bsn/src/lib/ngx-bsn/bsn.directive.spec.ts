import { BsnDirective } from './bsn.directive';
import { FormControl } from '@angular/forms';

describe('BsnDirective', () => {
  let directive: BsnDirective;

  beforeEach(() => {
    directive = new BsnDirective();
  });

  it('should be created', () => {
    expect(directive).toBeTruthy();
  });

  it.each([
    { bsn: '1234567', expected: { bsn: true } },
    { bsn: '1234567890', expected: { bsn: true } },
    { bsn: '111222333', expected: null },
    { bsn: '123456782', expected: null },
    { bsn: '123456781', expected: { bsn: true } },
    { bsn: null, expected: null },
  ])('should return $expected for input $bsn', ({ bsn, expected }) => {
    expect(directive.validate(new FormControl<string | null>(bsn))).toEqual(
      expected
    );
  });
});

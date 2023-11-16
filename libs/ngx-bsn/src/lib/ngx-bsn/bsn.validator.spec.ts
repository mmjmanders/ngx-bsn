import { validateBsn } from './bsn.validator';

describe('validateBsn', () => {
  test.each([
    { bsn: '1234567', expected: false },
    { bsn: '1234567890', expected: false },
    { bsn: '111222333', expected: true },
    { bsn: '123456782', expected: true },
    { bsn: '123456781', expected: false },
  ])('should return $expected for input $bsn', ({ bsn, expected }) => {
    expect(validateBsn(bsn)).toBe(expected);
  });
});

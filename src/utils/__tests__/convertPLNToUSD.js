import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-543')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD('')).toBeNaN();
  });
  it('should return NaN when input is not a number and string', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(()=>{})).toBe('Error');
  });
  it('should return NaN when input is < 0', () => {
    expect(convertPLNToUSD(-100)).toBe('Wrong value');
    expect(convertPLNToUSD(-53)).toBe('Wrong value');
  });
});
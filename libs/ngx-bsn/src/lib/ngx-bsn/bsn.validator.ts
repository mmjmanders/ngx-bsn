export const validateBsn: (bsn: string) => boolean = (bsn) => {
  return (
    /^\d{8,9}$/.test(bsn) &&
    bsn
      .padStart(9, '0')
      .split('')
      .reduce((previousValue, currentValue, currentIndex) => {
        const multiplier = currentIndex === 8 ? -1 : 1;
        return (
          previousValue +
          parseInt(currentValue, 10) * (multiplier * (9 - currentIndex))
        );
      }, 0) %
      11 ===
      0
  );
};

import { formatDate } from './formatDate';

describe('getFormattedDate', () => {
  it('should return a formatted date', () => {
    const date = '2023-01-24T08:41:13.000Z';
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe('24 de janeiro de 2023');
  });
});

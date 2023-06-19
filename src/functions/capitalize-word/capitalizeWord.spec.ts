import { capitalizeWord } from './capitalizeWord';

describe('capitalizeWord', () => {
  it('should capitalize a word', () => {
    expect(capitalizeWord('hello')).toBe('Hello');
  });
});

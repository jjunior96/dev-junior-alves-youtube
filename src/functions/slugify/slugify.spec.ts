import { slugify } from './slugify';

describe('slugify', () => {
  it('should slugify a word', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });
});

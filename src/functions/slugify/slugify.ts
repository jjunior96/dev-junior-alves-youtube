export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u03ef]/, '')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '')
    .replace(/-{2,}/g, '');
};

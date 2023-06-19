export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}

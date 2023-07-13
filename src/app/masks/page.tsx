'use client';

function maskCpf(cpf: string) {
  if (cpf.length !== 11) return '';

  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskCnpj(cnpj: string) {
  if (cnpj.length !== 14) return '';

  return cnpj
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

// REPLACE (string)
export default function Masks() {
  const cpf = '00000000000';
  const cpfFormatted = maskCpf(cpf);
  console.log(cpfFormatted);

  const cnpj = '12345678000190';
  const cnpjFormatted = maskCnpj(cnpj);
  console.log(cnpjFormatted);

  return (
    <>
      <h2>Masks</h2>
    </>
  );
}

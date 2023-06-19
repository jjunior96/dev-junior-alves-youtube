import { siteConfig } from '@/config';

import { Layout } from '@/components/Layout';

import * as S from './styles';

export const Footer = () => {
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo">
            <p>{siteConfig.title}</p>
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reseverdos © Junior Alves{' '}
            {new Date().getFullYear()}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};

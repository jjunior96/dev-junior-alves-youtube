import { AnchorHTMLAttributes } from 'react';

import * as S from './styles';

type LinkProps = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <S.LinkContainer href={href} {...rest}>
      <S.LinkContent>{children}</S.LinkContent>
    </S.LinkContainer>
  );
};

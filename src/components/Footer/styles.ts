import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-col
  border-t-[1px] 
  border-slate-600 
  pt-6
  pb-4
`;

export const Content = tw.div`
  flex 
  w-full 
  justify-between 
  pb-10
`;

export const Section = tw.div`
  flex 
  flex-col
  gap-6
  max-w-[8rem]
  sm:max-w-xs
`;

export const FooterTitle = tw.p`
  text-xl
  font-bold
`;

export const Navigation = tw.nav`
  flex 
  flex-col
  text-left
  gap-4
`;

export const CopyrightContainer = tw.div`
  mt-3
  flex
  w-full
  items-center
  justify-center
`;

export const Copyright = tw.p`
  mb-2
  max-w-[280px]
  text-center
  text-gray-500
  sm:max-w-fit
`;

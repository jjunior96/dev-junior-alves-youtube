import tw from 'tailwind-styled-components';

export const LinkContainer = tw.a`
  text-xl
  text-link
  group 
  transition-all 
  duration-300 
  ease-in-out
`;

export const LinkContent = tw.span`
  bg-gradient-to-r 
  from-link
  to-link 
  bg-[length:0%_2px] 
  bg-left-bottom 
  bg-no-repeat 
  transition-all 
  duration-500 
  ease-out 
  group-hover:bg-[length:100%_2px]
`;

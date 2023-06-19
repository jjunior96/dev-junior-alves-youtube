export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  isNew?: boolean;
};

export type MainNavItem = NavItem;

export type HeaderNavItem = {
  mainNav: MainNavItem[];
};

export type FooterNavItem = {
  mainNav: MainNavItem[];
};

export type SocialLinksConfig = {
  mainNav: MainNavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  title: string;
  subtitle: string;
  url: string;
  comments: string;
  ogImage: string;
  links: {
    youtube: string;
    linkedin: string;
    github: string;
  };
};

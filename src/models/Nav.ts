export type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

export type NavItemType = NavItem & {
  disabled?: boolean;
  isNew?: boolean;
};

export type MainNavProps = {
  mainNav: NavItemType[];
};

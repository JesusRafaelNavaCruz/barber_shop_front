export interface NavLink {
  label: string;
  link: string;
  isSection: boolean;
  isModal: boolean;
  id: string;
}

export interface NavbarData {
  createdAt: string;
  updatedAt: string;
  globalType: string;
  navigationLinks: NavLink[];
  id: string;
}

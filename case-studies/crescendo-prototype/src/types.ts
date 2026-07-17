export interface SizeOption {
  label: string;
  price: number;
}

export interface AddOnOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  desc: string;
  price?: number;
  tags?: string[];
  sizes?: SizeOption[];
  addOns?: AddOnOption[];
}

export interface DisplayItem extends MenuItem {
  priceLabel: string;
  isVeg: boolean;
  addLabel: string;
}

export interface Category {
  id: string;
  label: string;
}

export interface CartLine {
  key: string;
  id: string;
  name: string;
  unitPrice: number;
  qty: number;
  sizeLabel: string | null;
  addOns: AddOnOption[];
}

export type PickupMode = 'asap' | 'scheduled';
export type View = 'home' | 'menu';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  category: string;
  isStaffPick?: boolean;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  SHOP = 'SHOP',
  EVENTS = 'EVENTS',
  RARE = 'RARE'
}
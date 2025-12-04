import { Book } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The City We Became',
    author: 'N.K. Jemisin',
    price: 18.99,
    coverUrl: 'https://picsum.photos/300/450?random=1',
    category: 'Fiction',
    isStaffPick: true,
    description: 'Five New Yorkers must come together to defend their city from an ancient evil.'
  },
  {
    id: '2',
    title: 'Crying in H Mart',
    author: 'Michelle Zauner',
    price: 16.95,
    coverUrl: 'https://picsum.photos/300/450?random=2',
    category: 'Non-Fiction',
    isStaffPick: true,
    description: 'A powerful memoir about growing up Korean American, losing her mother, and forging her own identity.'
  },
  {
    id: '3',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    price: 28.00,
    coverUrl: 'https://picsum.photos/300/450?random=3',
    category: 'Fiction',
    description: 'A spanning novel about two childhood friends who become creative partners in video game design.'
  },
  {
    id: '4',
    title: 'Kitchen Confidential',
    author: 'Anthony Bourdain',
    price: 17.00,
    coverUrl: 'https://picsum.photos/300/450?random=4',
    category: 'Non-Fiction',
    isStaffPick: true
  },
  {
    id: '5',
    title: 'Dune',
    author: 'Frank Herbert',
    price: 12.99,
    coverUrl: 'https://picsum.photos/300/450?random=5',
    category: 'Sci-Fi'
  },
  {
    id: '6',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.50,
    coverUrl: 'https://picsum.photos/300/450?random=6',
    category: 'Classics',
    description: 'The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.'
  },
  {
    id: '7',
    title: 'Educated',
    author: 'Tara Westover',
    price: 18.00,
    coverUrl: 'https://picsum.photos/300/450?random=7',
    category: 'Non-Fiction'
  },
  {
    id: '8',
    title: 'Normal People',
    author: 'Sally Rooney',
    price: 17.00,
    coverUrl: 'https://picsum.photos/300/450?random=8',
    category: 'Fiction'
  },
  {
    id: '9',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    price: 22.00,
    coverUrl: 'https://picsum.photos/300/450?random=9',
    category: 'Non-Fiction'
  },
  {
    id: '10',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 29.99,
    coverUrl: 'https://picsum.photos/300/450?random=10',
    category: 'Sci-Fi',
    isStaffPick: true
  }
];

export const STRAND_LOCATIONS = [
  "828 Broadway at 12th Street, NYC",
  "Columbus Avenue at 82nd Street, NYC"
];

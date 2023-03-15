export interface User {
  id: number,
  firstName: string;
  lastName: string;
  contact: string;
}

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}

import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastActive: string;
  city: string;
  country: string;
  photoUrl: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];

}

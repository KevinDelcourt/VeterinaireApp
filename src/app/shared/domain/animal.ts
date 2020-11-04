import {Species} from './species.enum';

export interface Animal {
  id: number;
  name: string;
  species: Species;
  comment: string;
  veterinarian: number;
}

import { GeoEntity } from './geo.entity';

export interface AddressEntity {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoEntity;
}

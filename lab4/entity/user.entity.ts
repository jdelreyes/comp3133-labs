import { AddressEntity } from './address.entity';
import { CompanyEntity } from './company.entity';

export interface UserEntity extends Document{
  name: string;
  username: string;
  email: string;
  address: AddressEntity;
  phone: string;
  website: string;
  company: CompanyEntity;
}

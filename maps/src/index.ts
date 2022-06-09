/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);

const corp = new Company();
console.log(corp);

const customMap = new CustomMap('map');

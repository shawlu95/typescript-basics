import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string = 'red';

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getInfo(): string {
    return `
      <div>
        <h4>Company Name: ${this.companyName}</h4>
        <p>Slogan: ${this.catchPhrase}</p>
      </div>
    `;
  }
}

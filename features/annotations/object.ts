const profile = {
  user: 'shaw',
  age: 28,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const myAge = profile.age;
const { age: hisAge } = profile;
const { age, user }: { age: number; user: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(myAge, hisAge, age, user, lat, lng);

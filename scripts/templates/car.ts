import faker from 'faker';

export default (index: number) => {
  const type = faker.random.arrayElement(["Honda", "Toyota", "Tesla"]);

  return {
    color: faker.commerce.color(),
    name: faker.name.title(),
    type,
    description: faker.lorem.text()
  }
}

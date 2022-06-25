/* eslint-disable import/prefer-default-export */
import faker from 'faker'
import times from 'lodash/times'

export const generateFakeData = (n: number) =>
  times(n, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }))

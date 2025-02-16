import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Test1', password: 'password' },
    { username: 'Test2', password: 'password' },
    { username: 'Test3', password: 'password' },
  ], { individualHooks: true });

  console.log('Seeded users');
};

import { mylib } from './mylib';

describe('mylib', () => {
  it('should work', () => {
    console.log('X\n\nY');
    expect(mylib()).toEqual('mylib');
  });
});

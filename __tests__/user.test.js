import User from './../src/js/user.js';

describe ('User', () => {

  let currentUser;

  beforeEach(() => {
    currentUser = new User(37, 77);
  });

  test('should correctly create an object with earthAge property using the Object constructor', () => {
      expect(currentUser.earthAge).toEqual(37);
    });

  test('should correctly create an object with lifeExpectancy property using the Object constructor', () => {
    expect(currentUser.lifeExpectancy).toEqual(77);
  });

  test('should correctly create an object with mercuryAge property using the Object constructor', () => {
    expect(currentUser.mercuryAge).toEqual(8.88);
  });

  test('should correctly create an object with venusAge property using the Object constructor', () => {
    expect(currentUser.venusAge).toEqual(22.94);
  });

  test('should correctly create an object with marsAge property using the Object constructor', () => {
    expect(currentUser.marsAge).toEqual(69.56);
  });

});

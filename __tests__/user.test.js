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
    expect(currentUser.mercuryAge).toEqual(8.879999999999999);
  });

  test('should correctly create an object with venusAge property using the Object constructor', () => {
    expect(currentUser.venusAge).toEqual(22.94);
  });

  test('should correctly create an object with marsAge property using the Object constructor', () => {
    expect(currentUser.marsAge).toEqual(69.56);
  });

  test('should correctly create an object with jupiterAge property using the Object constructor', () => {
    expect(currentUser.jupiterAge).toEqual(438.82);
  });

  test('should correctly calculate life expectancy on mercury', () => {
    expect(currentUser.determineMercuryLifeExpectancy()).toEqual(9.6);
  });

  test('should correctly calculate life expectancy on venus', () => {
    expect(currentUser.determineVenusLifeExpectancy()).toEqual(24.8);
  });

  test('should correctly calculate life expectancy on mars', () => {
    expect(currentUser.determineMarsLifeExpectancy()).toEqual(75.19999999999999);
  });

  test('should correctly calculate life expectancy on jupiter', () => {
    expect(currentUser.determineJupiterLifeExpectancy()).toEqual(474.4);
  });

});

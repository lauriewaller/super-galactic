export default class User {
  
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = earthAge * .24;
    this.marsAge = earthAge * 1.88;
    this.jupiterAge = earthAge * 11.86;
  }
};
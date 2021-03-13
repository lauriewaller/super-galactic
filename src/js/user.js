export default class User {
  
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = earthAge * .24;
    this.venusAge = earthAge * .62;
    this.marsAge = earthAge * 1.88;
  }
};
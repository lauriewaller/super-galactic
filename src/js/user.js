export default class User {
  
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = earthAge * .24;
    this.venusAge = earthAge * .62;
    this.marsAge = earthAge * 1.88;
    this.jupiterAge = earthAge * 11.86;
  }

  determineMercuryLifeExpectancy() {
    return (this.lifeExpectancy - this.earthAge) * .24;
  }

  determineVenusLifeExpectancy() {
    return (this.lifeExpectancy - this.earthAge) * .62;
  }

};
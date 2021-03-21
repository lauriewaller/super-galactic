export default class User {
  
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = Math.ceil(earthAge * .24);
    this.venusAge = Math.ceil(earthAge * .62);
    this.marsAge = Math.ceil(earthAge * 1.88);
    this.jupiterAge = Math.ceil(earthAge * 11.86);
  }

  findLifeExpectancy() {
    if (this.earthAge < this.lifeExpectancy) {
      return true;
    } else if (this.earthAge > this.lifeExpectancy) {
      return false;
    }
  }

  determineMercuryLifeExpectancy() {
    return Math.abs(Math.ceil((this.lifeExpectancy - this.earthAge) * .24));
  }

  determineVenusLifeExpectancy() {
    return Math.abs(Math.ceil((this.lifeExpectancy - this.earthAge) * .62));
  }

  determineMarsLifeExpectancy() {
    return Math.abs(Math.ceil((this.lifeExpectancy - this.earthAge) * 1.88));
  }

  determineJupiterLifeExpectancy() {
    return Math.abs(Math.ceil((this.lifeExpectancy - this.earthAge) * 11.86));
  }

}
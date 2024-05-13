//.1)constructor for the class Movie will set the class property rating to "PG"

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

//method getPG
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


//.2)Convert the UML diagram to Typescript class.

class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle with radius ${this.radius} and color ${this.color}`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }


//.3)Write a “person” class to hold all the details.

 class Person {
    constructor(firstName, lastName, age, occupation, ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getOccupation() {
      return this.occupation;
    }
  
    introduceSelf() {
      console.log(`Hi! My name is ${this.getFullName()}, I am ${this.age} years old, and I work as a ${this.occupation}.`);
    }
  }

  const person = new Person("Abith", "Ahmed", 25, "Full Stack Developer");
person.introduceSelf(); 
console.log(person.getFullName()); 
console.log(person.getAge()); 
console.log(person.getOccupation());

//.4)write a class to calculate the Uber price.

class UberPrice {
    constructor(pricePerMile, pricePerPeakHourMinute, pricePerNormalHourMinute, baseFare, minimumFare, tipPercentage) {
      this.pricePerMile = pricePerMile;
      this.pricePerPeakHourMinute = pricePerPeakHourMinute;
      this.pricePerNormalHourMinute = pricePerNormalHourMinute;
      this.baseFare = baseFare;
      this.minimumFare = minimumFare;
      this.tipPercentage = tipPercentage;
    }
  
    isPeakHour(time) {
      // Implement your logic to check if it's peak hour
      // For example,check if the current hour is between 7am and 9am or 5pm and 7pm
      const hour = time.getHours();
      return (hour >= 6 && hour < 8) || (hour >= 16 && hour < 18);
    }
  
    calculatePricePerMinute(time) {
      return this.isPeakHour(time) ? this.pricePerPeakHourMinute : this.pricePerNormalHourMinute;
    }
  
    calculatePrice(time, minutes, miles) {
      const pricePerMinute = this.calculatePricePerMinute(time);
      const pricePerMileDistance = miles * this.pricePerMile;
      const price = pricePerMinute * minutes + pricePerMileDistance + this.baseFare;
      return Math.max(price, this.minimumFare) * (5 + this.tipPercentage / 100);
    }
  }
  // Ex:
  const uberPrice = new UberPrice(1.5, 0.5, 0.3, 2.5, 5, 10); // $1.5 per mile, $0.5 per peak hour minute, $0.3 per normal hour minute, $2.5 base fare, $5 minimum fare, 10% tip
  const time = new Date(); // Use the current time
  time.setHours(8); // Set the hour to 8am (peak hour)
  console.log(uberPrice.calculatePrice(time, 10, 3)); // Calculate the price for a 10 minute, 3 mile trip
